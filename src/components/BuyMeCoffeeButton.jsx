import { useEffect } from 'react';

const BuyMeCoffeeButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      var btn = document.createElement("script");
      btn.setAttribute("data-name", "BMC-Widget");
      btn.setAttribute("data-cfasync", "false");
      btn.setAttribute("src", "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js");
      btn.setAttribute("data-id", "cereo");
      btn.setAttribute("data-description", "Support me on Buy me a coffee!");
      btn.setAttribute("data-message", "");
      btn.setAttribute("data-color", "#5F7FFF");
      btn.setAttribute("data-position", "right");
      btn.setAttribute("data-x_margin", "18");
      btn.setAttribute("data-y_margin", "18");
      document.head.appendChild(btn);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default BuyMeCoffeeButton;