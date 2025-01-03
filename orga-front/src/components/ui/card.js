// src/components/ui/card.js
import React from 'react';

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

// CardContent is assumed to be a separate component
const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export default Card; // Default export for Card
export { CardContent }; // Named export for CardContent
