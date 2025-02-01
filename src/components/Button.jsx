import React from 'react';

const Button = ({ text, textColor, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
        transition: 'all 0.2s ease',
        boxShadow: `0 2px 4px ${darkenColor(bgColor, 20)}`,
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 4px 8px ${darkenColor(bgColor, 30)}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 2px 4px ${darkenColor(bgColor, 20)}`;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(1px)';
        e.currentTarget.style.boxShadow = `0 1px 2px ${darkenColor(bgColor, 40)}`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 4px 8px ${darkenColor(bgColor, 30)}`;
      }}
    >
      {text}
      {/* Ripple Effect */}
      <span 
        style={{
          position: 'absolute',
          borderRadius: '50%',
          transform: 'scale(0)',
          animation: 'ripple 600ms linear',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none'
        }}
      />
    </button>
  );
};

// Helper function to darken colors
const darkenColor = (color, percent) => {
  let num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  
  return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
};

// Add global styles for ripple animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`, styleSheet.cssRules.length);

export default Button;