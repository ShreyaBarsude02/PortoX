const express = require('express')
const router = express.Router()
const portfolios = require('../models/portfolioModel')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the folder where you want to store the files
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_"+Date.now()+path.extname(file.originalname));
    },
  });

  const upload = multer({ storage });

router.get('/getPortfolios', async (req,res)=>{
    try {
        const items = await portfolios.find({})
    res.json(items)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/addPortfolios', upload.single('pdf'), async (req, res) => {
    try {
      const { name, description, education, tag } = req.body;
      const pdfFile = req.file; // Use req.file to access the uploaded file details
  
      const newPortfolio = await portfolios.create({
        name,
        description,
        education,
        filepath: `${pdfFile.filename}`, // Store the file path in your MongoDB document
        tag,
      });
  
      res.status(201).json(newPortfolio);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  });

  router.get('/:pdfFileName', (req, res) => {
    const pdfFileName = req.params.pdfFileName;
    const filePath = path.join(__dirname, 'uploads', pdfFileName);
  
    res.setHeader('Content-Disposition', 'inline; filename=' + pdfFileName);
    // Serve the PDF file
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error('Error serving PDF file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  });

  router.get('/getpdf/:id',async (req,res)=>{
    const id = req.params.id
    const portfolio = await portfolios.findById(id)
    const pdfname = portfolio.filepath
    res.json(pdfname)
  })

module.exports = router;