import React, { useState, useEffect } from "react";

export const UpdateCustomer = ({ currentCustomer, updateCustomer, setActiveModal }) => {
  const [customer, setCustomer] = useState(currentCustomer);

  const onInputChange = event => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setCustomer(customer);
  }, [customer]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        updateCustomer(customer.id, customer);
      }}
    >
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={customer.username}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};












export const UpdateOrder = ({ currentOrder, updateOrder, setActiveModal }) => {
  const [order, setOrder] = useState(currentOrder);

  const onInputChange = event => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setOrder(order);
  }, [order]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        updateOrder(order.id, order);
      }}
    >
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={order.username}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};











export const UpdateProduct = ({ currentProduct, updateProduct, setActiveModal }) => {
  const [product, setProduct] = useState(currentProduct);

  const onInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setProduct(product);
  }, [product]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        updateProduct(product.id, product);
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={onInputChange}
        />
      </div>
      {/* <div className="form-group">
        <label>Image</label>
        <input
          type="file"
          name="image"
          value={product.image}
          onChange={onInputChange}
        />
      </div> */}
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};









export const UpdateSupplier = ({ currentSupplier, updateSupplier, setActiveModal }) => {
  const [supplier, setSupplier] = useState(currentSupplier);

  const onInputChange = event => {
    const { name, value } = event.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setSupplier(supplier);
  }, [supplier]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        updateSupplier(supplier.id, supplier);
      }}
    >
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={supplier.username}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={supplier.email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Product</label>
        <input
          type="text"
          name="product"
          value={supplier.product}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};