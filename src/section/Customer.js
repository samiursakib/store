import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCustomers,
  getCreatedCustomer,
  getUpdatedCustomer,
  getDeletedCustomer
} from "../app/api";

// Components
import { CustomerTable } from "../components/Table";
import { CreateCustomer } from "../components/Create";
import { UpdateCustomer } from "../components/Update";
import { DeleteCustomer } from "../components/Delete";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import MySwal from "../index";

export const Customer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);  
  const [currentCustomer, setCurrentCustomer] = useState({
    id: null,
    username: '',
    email: '',
    password: '',
    address: ''
  });
  const [customers, setCustomers] = useState([]);
  const [activeModal, setActiveModal] = useState({ name: "", active: false });
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  getCustomers()
    .then((response) => {
      setCustomers(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  const customersLastIndex = currentPage * pageSize;
  const customersFirstIndex = customersLastIndex - pageSize;
  const currentCustomers = customers.slice(customersFirstIndex, customersLastIndex);

  // Setting up Modal
  const setModal = modal => {
    // search("");
    setActiveModal({ name: modal, active: true });
  };

  // Pagination
  const paginate = page => {
    setCurrentPage(page);
  };

  

  // Create Customer
  const createCustomer = async customer => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getCreatedCustomer(customer).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Customer created successfully."
        }).then(() => {
          dispatch({ type: "CREATE_CUSTOMER", data: result });
          setCustomers([...customers, result]);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to create customer."
      });
    } finally {
      setLoading(false);
    }
  };

  // Update Customer
  const updateRow = customer => {
    setModal("Update Customer");

    setCurrentCustomer({
      id: customer.id,
      username: customer.username,      
      email: customer.email,
      password: customer.password,
      address: customer.address
    });
  };

  const updateCustomer = async (id, updatedCustomer) => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getUpdatedCustomer(id, updatedCustomer).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Customer updated successfully."
        }).then(() => {
          dispatch({
            type: "SET_CUSTOMERS",
            data: customers.map(customer =>
              customer.id === id ? Object.assign(customer, result) : customer
            )
          });
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to update customer."
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete Customer
  const deleteRow = customer => {
    setModal("Delete Customer");

    setCurrentCustomer({
      id: customer.id,
      username: customer.username,
      email: customer.email,
      password: customer.password,
      address: customer.address
    });
  };

  const deleteCustomer = async id => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getDeletedCustomer(id).then(() => {
        MySwal.fire({
          icon: "success",
          title: "Customer deleted successfully."
        }).then(() => {
          dispatch({
            type: "SET_CUSTOMERS",
            data: customers.filter(customer => customer.id !== id)
          });
          setCustomers(customers.filter(customer => customer.id !== id));
          setCurrentPage(1);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to delete customer."
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
              <div className="toolbar">
                <button
                  className="primary-btn"
                  onClick={() => setModal("Create Customer")}
                >
                  Create New Customer
                </button>
              </div>
              <CustomerTable
                customers={currentCustomers}
                updateRow={updateRow}
                deleteRow={deleteRow}
              />
              <Pagination
                totalResults={customers.length}
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
          {activeModal.name === "Create Customer" && (
            <CreateCustomer
              createCustomer={createCustomer}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Update Customer" && (
            <UpdateCustomer
              currentCustomer={currentCustomer}
              updateCustomer={updateCustomer}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Delete Customer" && (
            <DeleteCustomer
              currentCustomer={currentCustomer}
              deleteCustomer={deleteCustomer}
              setActiveModal={setActiveModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
};