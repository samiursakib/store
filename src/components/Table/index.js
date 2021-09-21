import React from "react";
// Styles
import "./style.scss";
// Images
import PlaceholderImg from "../../img/placeholder-user.jpg";
import SortIcon from "../../img/sort-icon.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));


export const CustomerTable = ({ customers, updateRow, deleteRow, onSortChange }) => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length ? (
            customers.map(customer => (
              <tr key={customer.id}>
                {/* <td className="field-avatar">
                  <img
                  src={customer.avatar ? customer.avatar : PlaceholderImg}
                  alt={customer.username}
                  />
                </td> */}
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td className="field-actions">
                  <button
                    className="primary-btn"
                    onClick={() => {
                      updateRow(customer);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="field-actions__delete"
                    onClick={() => deleteRow(customer)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
            ) : (
              <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};






export const ProductTable = ({ products, updateRow, deleteRow, onSortChange }) => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length ? (
            products.map(product => (
              <tr key={product.id}>
                <td className="field-avatar">
                  <img src={product.image ? images[product.image] : PlaceholderImg} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td className="field-actions">
                  <button
                    className="primary-btn"
                    onClick={() => {
                      updateRow(product);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="field-actions__delete"
                    onClick={() => deleteRow(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
            ) : (
              <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};







export const OrderTable = ({ orders, updateRow, deleteRow, onSortChange }) => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Bill</th>
            <th>Date</th> 
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length ? (
            orders.map(order => (
              <tr key={order.id}>
                <td>{order.username}</td>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.bill}</td>
                <td>{order.time}</td>
                <td className="field-actions">
                  {/* <button
                    className="primary-btn"
                    onClick={() => {
                      updateRow(order);
                    }}
                  >
                    Update
                  </button> */}
                  <button
                    className="field-actions__delete"
                    onClick={() => deleteRow(order)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};









export const SupplierTable = ({ suppliers, updateRow, deleteRow, onSortChange }) => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.length ? (
            suppliers.map(supplier => (
              <tr key={supplier.id}>
                <td>{supplier.username}</td>
                <td>{supplier.name}</td>
                <td>{supplier.quantity}</td>
                <td>{supplier.time}</td>
                <td className="field-actions">
                  {/* <button
                    className="primary-btn"
                    onClick={() => {
                      updateRow(supplier);
                    }}
                  >
                    Update
                  </button> */}
                  <button
                    className="field-actions__delete"
                    onClick={() => deleteRow(supplier)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};