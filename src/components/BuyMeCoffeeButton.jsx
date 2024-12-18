import { useEffect } from 'react';

const BuyMeCoffeeButton = () => {
  useEffect(() => {
    const btn = document.createElement('script');
    btn.className = "bmc-button";
    btn.setAttribute('data-name', 'bmc-button');
    btn.setAttribute('data-slug', 'cereo');
    btn.setAttribute('data-color', '#5F7FFF');
    btn.setAttribute('data-emoji', '');
    btn.setAttribute('data-font', 'Cookie');
    btn.setAttribute('data-text', 'Buy me a coffee');
    btn.setAttribute('data-outline-color', '#000000');
    btn.setAttribute('data-font-color', '#ffffff');
    btn.setAttribute('data-coffee-color', '#FFDD00');
    
    const container = document.getElementById('bmc-container');
    if (container) {
      container.appendChild(btn);
    }
  }, []);

  return (
    <div 
      id="bmc-container" 
      className="fixed bottom-4 right-4 z-50"
    />
  );
};

export default BuyMeCoffeeButton;