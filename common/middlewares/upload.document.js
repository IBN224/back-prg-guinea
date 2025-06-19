import multer from 'multer';

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'D:/documents/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
const uploadMiddleware = multer({ storage });


export default uploadMiddleware;
