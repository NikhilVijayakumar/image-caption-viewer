import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import getImagesRoutes from './features/images/routes/ImagesRoutes';
import getImageDetailsRoutes from './features/imagesDetails/routes/ImageDetailsRoutes';
import updateCaptionRoutes from './features/captions/routes/CaptionsRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins (or specify your frontend origin)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.use('/api/images', getImagesRoutes);
app.use('/api/image/details', getImageDetailsRoutes);
app.use('/api/image/captions', updateCaptionRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
