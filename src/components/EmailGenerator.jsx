import { useState } from 'react';
import { Wand2, Copy, Send } from 'lucide-react';

const EmailGenerator = () => {
  const [purpose, setPurpose] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setGeneratedEmail(
        `Dear [Name],\n\nI hope this email finds you well. Based on our recent discussion about [Topic], I wanted to follow up with some key points...\n\nBest regards,\n[Your name]`
      );
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Professional Email Generator</h1>
        <p className="text-gray-600">Create perfect emails in seconds</p>
      </div>

      <div className="grid gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email Purpose</label>
          <input
            type="text"
            placeholder="e.g., Follow up after meeting, Job application..."
            className="w-full p-3 border rounded-lg"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Tone</label>
            <select 
              className="w-full p-3 border rounded-lg"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Length</label>
            <select 
              className="w-full p-3 border rounded-lg"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!purpose || loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5" />
              Generate Email
            </>
          )}
        </button>

        {generatedEmail && (
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Generated Email</h3>
              <div className="space-x-2">
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            <pre className="whitespace-pre-wrap font-sans">{generatedEmail}</pre>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-700">
            ✨ Pro tip: Add specific details to your purpose for more personalized results
          </p>
        </div>

        {/* Buy Me a Coffee Button */}
        <div className="flex justify-center mt-8">
          <a href="https://www.buymeacoffee.com/cereo" target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2">
              ☕ Buy me a coffee
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailGenerator;