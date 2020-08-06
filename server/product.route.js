import productContoller from 'data.controller';
import express from 'express';
const router = express.Router();

router.post('/create', productContoller.createProduct);

module.exports = router;