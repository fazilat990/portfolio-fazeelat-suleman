import React from 'react';

export default function ProgressBar({ percentage = 0, trackWidth = 8 }) {
  // Ensure trackWidth is a number (px). If a string like "3" is provided, parse it.
  const parsedWidth = typeof trackWidth === 'number' ? trackWidth : parseInt(trackWidth, 10) || 8;
  const height = parsedWidth;
  const pct = Math.max(0, Math.min(100, Number(percentage) || 0));

  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width: '100%',
        height: `${height}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: `${Math.max(4, height / 2)}px`,
        overflow: 'hidden',
        marginBottom: '10px'
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          background: 'linear-gradient(90deg, var(--green) 0%, var(--blue) 100%)',
          transition: 'width 0.4s ease'
        }}
      />
    </div>
  );
}
