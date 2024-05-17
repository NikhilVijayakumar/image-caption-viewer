// src/components/Caption.tsx
import React from 'react';

interface CaptionProps {
  text: string;
}

const Caption: React.FC<CaptionProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default Caption;
