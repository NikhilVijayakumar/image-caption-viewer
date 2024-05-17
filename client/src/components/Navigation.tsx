// src/components/Navigation.tsx
import React from 'react';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNext, onPrevious }) => {
  return (
    <div>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Navigation;
