import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyles}>
      <p>© {new Date().getFullYear()} Meaganne-Moussa </p>
    </footer>
  );
}

const footerStyles = {
    textAlign: 'left',
    padding: '14px',
    background: 'transparent', // Optional: Dark semi-transparent background
    color: 'black', // White text
    marginTop: 'auto', // Ensures it stays at the bottom
  };
