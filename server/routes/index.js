const express = require('express');
const router = express.Router();
const yahooStockPrices = require('yahoo-stock-prices');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('', async (req, res) => {
  const { code } = req.body.company;

  const results = await yahooStockPrices.getCurrentPrice(`${code}.KS`);
  res.send({ results });
});

module.exports = router;
