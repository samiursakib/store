import axios from "axios";

const apiURL = process.env.REACT_APP_REQRES_API;

function getCustomers() {
  const response = axios.get(`http://localhost:3001/api/customer`);
  return response;
}

function getCreatedCustomer({ username, email, address }) {
  const response = axios.post(`http://localhost:3001/api/customer`, {
    username,
    email,
    password: '12345678',
    address
  });
  return response;
}

function getUpdatedCustomer(id, customer) {
  const response = axios.put(`http://localhost:3001/api/customer/${id}`, {
    id: customer.id,
    username: customer.username,
    email: customer.email,
    password: customer.password,
    address: customer.address
  });
  return response;
}

function getDeletedCustomer(id) {
  const response = axios.delete(`http://localhost:3001/api/customer/${id}`);
  return response;
}














function getProducts() {
  const response = axios.get(`http://localhost:3001/api/product`);
  return response;
}

function getCreatedProduct({ name, image, price, description }) {
  const response = axios.post(`http://localhost:3001/api/product`, {
    name,
    image,
    price,
    description
  });
  return response;
}

function getUpdatedProduct(id, product) {
  const response = axios.put(`http://localhost:3001/api/product/${id}`, {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    description: product.description
  });
  return response;
}

function getDeletedProduct(id) {
  const response = axios.delete(`http://localhost:3001/api/product/${id}`);
  return response;
}














function getOrders() {
  const response = axios.get(`http://localhost:3001/api/order`);
  return response;
}

function getCreatedOrder({ customerId, productId, quantity }) {
  const response = axios.post(`http://localhost:3001/api/order`, {
    customerId,
    productId,
    quantity
  });
  return response;
}

function getUpdatedOrder(id, order) {
  const response = axios.put(`http://localhost:3001/api/order/${id}`, {
    id: order.id,
    cutomerId: order.customerId,
    productId: order.productId,
    quantity: order.quantity
  });
  return response;
}

function getDeletedOrder(id) {
  const response = axios.delete(`http://localhost:3001/api/order/${id}`);
  return response;
}









function getSuppliers() {
  const response = axios.get(`http://localhost:3001/api/supplies`);
  return response;
}

function getCreatedSupplier({ username, email }) {
  const response = axios.post(`http://localhost:3001/api/supplies`, {
    username,
    email,
  });
  return response;
}

function getUpdatedSupplier(id, supplier) {
  const response = axios.put(`http://localhost:3001/api/supplies/${id}`, {
    id: supplier.id,
    username: supplier.username,
    email: supplier.email,
  });
  return response;
}

function getDeletedSupplier(id) {
  const response = axios.delete(`http://localhost:3001/api/supplies/${id}`);
  return response;
}










export { 
  getCustomers, 
  getCreatedCustomer, 
  getUpdatedCustomer, 
  getDeletedCustomer, 
  
  getOrders, 
  getCreatedOrder, 
  getUpdatedOrder, 
  getDeletedOrder, 

  getProducts, 
  getCreatedProduct, 
  getUpdatedProduct, 
  getDeletedProduct,

  getSuppliers,
  getCreatedSupplier,
  getUpdatedSupplier,
  getDeletedSupplier
};