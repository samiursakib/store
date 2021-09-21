import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getOrders,
  getCreatedOrder,
  getUpdatedOrder,
  getDeletedOrder
} from "../app/api";

// Components
import { OrderTable } from "../components/Table";
import { CreateOrder } from "../components/Create";
import { UpdateOrder } from "../components/Update";
import { DeleteOrder } from "../components/Delete";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import MySwal from "../index";

export const Order = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);  
    const [currentOrder, setCurrentOrder] = useState({
        id: null,
        customerId: null,
        username: '',
        email: '',
        productId: null,
        name: '',
        price: null,
        quantity: null,
        bill: null,
        time: null
  });

  const [orders, setOrders] = useState([]);
  const [activeModal, setActiveModal] = useState({ name: "", active: false });
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  getOrders()
    .then((response) => {
      setOrders(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  const customersLastIndex = currentPage * pageSize;
  const customersFirstIndex = customersLastIndex - pageSize;
  const currentOrders = orders.slice(customersFirstIndex, customersLastIndex);

  // Setting up Modal
  const setModal = modal => {
    setActiveModal({ name: modal, active: true });
  };

  // Pagination
  const paginate = page => {
    setCurrentPage(page);
  };

  // Search

  //sorting

  // Create Order
  const createOrder = async order => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getCreatedOrder(order).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Order created successfully."
        }).then(() => {
          dispatch({ type: "CREATE_ORDER", data: result });
          setOrders([...orders, result]);
          console.log(res.data);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to create order."
      });
    } finally {
      setLoading(false);
    }
  };

  // Update Order
  const updateRow = order => {
    setModal("Update Order");

    setCurrentOrder({
      id: order.id,
      customerId: order.customerId,
      username: order.username,
      email: order.email,
      productId: order.productId,
      name: order.name,
      price: order.price,
      quantity: order.quantity,
      bill: order.bill,
      time: order.time
    });
  };

  const updateOrder = async (id, updatedOrder) => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getUpdatedOrder(id, updatedOrder).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Order updated successfully."
        }).then(() => {
          dispatch({
            type: "SET_ORDERS",
            data: orders.map(order =>
              order.id === id ? Object.assign(order, result) : order
            )
          });
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to update order."
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete Order
  const deleteRow = order => {
    setModal("Delete Order");

    setCurrentOrder({
      id: order.id,
      customerId: order.customerId,
      username: order.username,
      email: order.email,
      productId: order.productId,
      name: order.name,
      price: order.price,
      quantity: order.quantity,
      bill: order.bill,
      time: order.time
    });
  };

  const deleteOrder = async id => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getDeletedOrder(id).then(() => {
        MySwal.fire({
          icon: "success",
          title: "Order deleted successfully."
        }).then(() => {
          dispatch({
            type: "SET_ORDERS",
            data: orders.filter(order => order.id !== id)
          });
          setOrders(orders.filter(order => order.id !== id));
          setCurrentPage(1);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to delete order."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <main className="content">
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <div className="content-wrapper">
              {/* <div className="toolbar">
                <button
                  className="primary-btn"
                  onClick={() => setModal("Create Order")}
                >
                  Create New Order
                </button>
              </div> */}
              <OrderTable
                orders={currentOrders}
                updateRow={updateRow}
                deleteRow={deleteRow}
              />
              <Pagination
                totalResults={orders.length}
                currentPage={currentPage}
                pageSize={pageSize}
                paginate={paginate}
              />
            </div>
          )}
        </div>
      </main>
      {activeModal.active && (
        <Modal activeModal={activeModal}>
          {activeModal.name === "Create Order" && (
            <CreateOrder
              createOrder={createOrder}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Update Order" && (
            <UpdateOrder
              currentOrder={currentOrder}
              updateOrder={updateOrder}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Delete Order" && (
            <DeleteOrder
              currentOrder={currentOrder}
              deleteOrder={deleteOrder}
              setActiveModal={setActiveModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
};