import React from 'react';
import { FaFlask } from 'react-icons/fa';

export const FeatureFlagFloatingButton = () => {
  return (
    <button className="fixed flex items-center justify-center bottom-4 right-4 bg-white border overflow-hidden shadow-xl rounded-lg font-sans w-12 h-12">
      <FaFlask />
    </button>
  );
};
