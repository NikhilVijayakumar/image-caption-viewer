// src/services/api.ts
export interface ImageData {
    filename: string;
    caption: string;
  }
  
  export const fetchImages = async (): Promise<ImageData[]> => {
    const response = await fetch('http://localhost:5000/api/images');
    return response.json();
  };

 
export interface ImageDetails {
  base64Image: string;
}

export const fetchImageDetails = async (filename: string): Promise<ImageDetails> => {
  const response = await fetch(`http://localhost:5000/api/image/details/${filename}`);
  return response.json();
};

export const updateCaption = async (filename: string, caption: string): Promise<void> => {
  await fetch('http://localhost:5000/api/image/captions', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filename, caption }),
  });
};
  