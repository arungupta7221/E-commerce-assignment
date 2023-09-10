const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// Route to get top 5 products from each category
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(5)
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

// Implement other CRUD operations for products

module.exports = router
