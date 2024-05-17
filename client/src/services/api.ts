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
  const response = await fetch(`http://localhost:5000/api/images/details/${filename}`);
  return response.json();
};

  