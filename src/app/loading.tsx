import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
      <p className="ml-4 text-blue-400"> Loading... </p>
    </div>
  );
};

export default Loading;
