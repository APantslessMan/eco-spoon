// components/BlobSVG.tsx
import React from 'react';

const BlobSVG: React.FC = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ animation: 'spin 120s linear infinite' }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(124.258, 212.915, 104.053, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(173.437, 226.611, 197.791, 0.73)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M18.9,-26.4C24.9,-21.7,30.3,-16.7,32,-10.6C33.7,-4.6,31.5,2.5,28.5,8.4C25.4,14.4,21.4,19.2,16.5,25.9C11.6,32.6,5.8,41.2,0.1,41.1C-5.7,40.9,-11.3,32.1,-18.4,26.2C-25.6,20.2,-34.2,17.1,-34.9,12C-35.6,7,-28.4,0,-24.4,-6.6C-20.4,-13.1,-19.5,-19.4,-16,-24.8C-12.4,-30.3,-6.2,-34.9,0.1,-35.1C6.5,-35.3,13,-31,18.9,-26.4Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: 'all 0.3s ease 0s' }}
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default BlobSVG;
