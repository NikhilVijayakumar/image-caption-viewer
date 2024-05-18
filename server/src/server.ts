import express from 'express';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins (or specify your frontend origin)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

const imageFolder = process.env.IMAGE_FOLDER_PATH;
if (!imageFolder) {
  throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
}
app.use('/images', express.static(imageFolder));

// API routes
app.use('/api/images', imageRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Image Caption Viewer API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
