// src/features/images/components/Navigation.tsx
import React from 'react';
import '../../../App.css';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="button-container">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Navigation;
