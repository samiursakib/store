import React, { useState, useEffect } from "react";

export const DeleteCustomer = ({ currentCustomer, deleteCustomer, setActiveModal }) => {
  const [customer, setCustomer] = useState(currentCustomer);

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setCustomer(currentCustomer);
  }, [customer]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        deleteCustomer(customer.id);
      }}
    >
      <div className="form-group">
        Are you sure you want to delete {customer.username}?
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Delete</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};


















export const DeleteProduct = ({ currentProduct, deleteProduct, setActiveModal }) => {
  const [product, setProduct] = useState(currentProduct);

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setProduct(currentProduct);
  }, [product]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        deleteProduct(product.id);
      }}
    >
      <div className="form-group">
        Are you sure you want to delete {product.name}?
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Delete</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};













export const DeleteOrder = ({ currentOrder, deleteOrder, setActiveModal }) => {
  const [order, setOrder] = useState(currentOrder);

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setOrder(currentOrder);
  }, [order]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log(order);
        deleteOrder(order.id);
      }}
    >
      <div className="form-group">
        Are you sure you want to delete this order {order.id}?
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Delete</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};











export const DeleteSupplier = ({ currentSupplier, deleteSupplier, setActiveModal }) => {
  const [supplier, setSupplier] = useState(currentSupplier);

  const cancel = event => {
    event.preventDefault();
    setActiveModal({ active: false });
  };

  useEffect(() => {
    setSupplier(currentSupplier);
  }, [supplier]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        deleteSupplier(supplier.id);
      }}
    >
      <div className="form-group">
        Are you sure you want to delete this supplier?
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Delete</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};