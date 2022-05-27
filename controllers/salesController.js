const express = require('express');
const salesService = require('../services/salesService');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const sales = await salesService.get();
    res.status(200).json(sales);
  } catch (err) {
    res.status(500).json({ Error: 'Erro interno' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesService.get(id);

    if (!sale) res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json({ Error: 'Erro interno' });
  }
});

module.exports = router;