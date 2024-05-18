// src/features/images/components/Caption.tsx
import React, { useState, useEffect } from 'react';
import '../../../App.css';

interface CaptionProps {
  text: string;
  onSave: (newCaption: string) => void;
}

const Caption: React.FC<CaptionProps> = ({ text, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [caption, setCaption] = useState(text);

  useEffect(() => {
    setCaption(text);
  }, [text]);

  const handleSave = () => {
    onSave(caption);
    setIsEditing(false);
  };

  return (
    <div className="caption">
      {isEditing ? (
        <div>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>{caption}</p>
      )}
    </div>
  );
};

export default Caption;
