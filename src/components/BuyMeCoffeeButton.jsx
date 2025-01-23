import React from "react";
import "./../styles/BuyMeCoffeeButton.css";

const BuyMeCoffeeButton = () => {
  return (
    <div className="buy-me-coffee-container">
      <a
        href="https://www.buymeacoffee.com/vaxly"
        target="_blank"
        rel="noopener noreferrer"
        className="buy-me-coffee-button"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </a>
    </div>
  );
};

export default BuyMeCoffeeButton;
