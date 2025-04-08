const getAsbisProducts = async () => {
  return [
    { sku: "TEST123", name: "Test Product A", price: 99.99, stock: 15 },
    { sku: "TEST456", name: "Test Product B", price: 199.99, stock: 7 },
    { sku: "TEST789", name: "Test Product C", price: 49.5, stock: 0 }
  ];
};
module.exports = { getAsbisProducts };