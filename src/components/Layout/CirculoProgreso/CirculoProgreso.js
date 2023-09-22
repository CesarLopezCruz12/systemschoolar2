import React from 'react';

export function CirculoProgreso  ({ percent }) {
    const circumference = 2 * Math.PI * 45; // Circunferencia del círculo
    const offset = circumference - (percent / 100) * circumference;
  
    return (
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="transparent" strokeWidth="10" stroke="#ccc" />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          strokeWidth="10"
          stroke="#007bff"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="16" fill="#007bff">
          {`${percent}%`}
        </text>
      </svg>
    );
};
