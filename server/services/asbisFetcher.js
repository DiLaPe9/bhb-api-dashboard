const axios = require('axios');
const xml2js = require('xml2js');

const URL = 'https://services.it4profit.com/product/bg/714/ProductList.xml?USERNAME=dipetrov&PASSWORD=Asbisb@nk';

async function fetchAsbisProducts() {
  const { data } = await axios.get(URL);
  const result = await xml2js.parseStringPromise(data, { explicitArray: false });
  const items = result?.PriceList?.Product || [];
  return items.map(item => ({
    sku: item.PartNumber,
    name: item.Description,
    ean: item.EANCode,
    price: item.EndUserPrice,
    stock: item.Stock,
  }));
}

module.exports = { fetchAsbisProducts };