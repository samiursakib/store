import React, { useState } from "react";

export const CreateCustomer = ({ setActiveModal, createCustomer}) => {
  const initialData = { id: null, username: '', email: '', address: '' };
  const [customer, setCustomer] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!customer.username || !customer.email) return;
        createCustomer(customer);
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
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};







export const CreateProduct = ({ setActiveModal, createProduct}) => {
  const initialData = { id: null, name: "", image: "", price: null, description: "" };
  const [product, setProduct] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!product.name || !product.image || !product.price) return;
        createProduct(product);
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
      <div className="form-group">
        <label>Image</label>
        <input
          type="file"
          name="image"
          value={product.image}
          onChange={onInputChange}
        />
      </div>
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
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};









export const CreateOrder = ({ setActiveModal, createOrder}) => {
  const initialData = { id: null, customerId: null, productId: null, quantity: null };
  const [order, setOrder] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!order.productCategory || !order.productId || !order.quantity) return;
        createOrder(order);
      }}
    >
      <div className="form-group">
        <label>Customer Id</label>
        <input
          type="number"
          name="customerId"
          value={order.customerId}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Product Id</label>
        <input
          type="number"
          name="productId"
          value={order.productId}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};









export const CreateSupplier = ({ setActiveModal, createSupplier}) => {
  const initialData = { id: null, username: '', email: '' };
  const [supplier, setSupplier] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!supplier.username || !supplier.email) return;
        createSupplier(supplier);
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
      <div className="form-group form-group--actions">
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};