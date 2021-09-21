import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSuppliers,
  getCreatedSupplier,
  getUpdatedSupplier,
  getDeletedSupplier
} from "../app/api";

// Components
import { SupplierTable } from "../components/Table";
import { CreateSupplier } from "../components/Create";
import { UpdateSupplier } from "../components/Update";
import { DeleteSupplier } from "../components/Delete";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import MySwal from "../index";

export const Supplies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);  
  const [currentSupplier, setCurrentSupplier] = useState({
    id: null,
    username: '',
    email: '',
  });
  const [supplier, setSupplier] = useState([]);
  const [activeModal, setActiveModal] = useState({ name: "", active: false });
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  getSuppliers()
    .then((response) => {
      setSupplier(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  const suppliersLastIndex = currentPage * pageSize;
  const suppliersFirstIndex = suppliersLastIndex - pageSize;
  const currentSuppliers = supplier.slice(suppliersFirstIndex, suppliersLastIndex);

  // Setting up Modal
  const setModal = modal => {
    // search("");
    setActiveModal({ name: modal, active: true });
  };

  // Pagination
  const paginate = page => {
    setCurrentPage(page);
  };

  

  // Create Supplies
  const createSupplier = async supplier => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getCreatedSupplier(supplier).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Supplies created successfully."
        }).then(() => {
          dispatch({ type: "CREATE_CUSTOMER", data: result });
          setSupplier([...supplier, result]);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to create supplier."
      });
    } finally {
      setLoading(false);
    }
  };

  // Update Supplies
  const updateRow = supplier => {
    setModal("Update Supplies");

    setCurrentSupplier({
      id: supplier.id,
      username: supplier.username,      
      email: supplier.email,
    });
  };

  const updateSupplier = async (id, updateSupplier) => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getUpdatedSupplier(id, updateSupplier).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Supplies updated successfully."
        }).then(() => {
          dispatch({
            type: "SET_SUPPLIERS",
            data: supplier.map(supplier =>
              supplier.id === id ? Object.assign(supplier, result) : supplier
            )
          });
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to update supplier."
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete Supplies
  const deleteRow = supplier => {
    setModal("Delete Supplies");

    setCurrentSupplier({
      id: supplier.id,
      username: supplier.username,
      email: supplier.email,
    });
  };

  const deleteSupplier = async id => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getDeletedSupplier(id).then(() => {
        MySwal.fire({
          icon: "success",
          title: "Supplies deleted successfully."
        }).then(() => {
          dispatch({
            type: "SET_SUPPLIERS",
            data: supplier.filter(supplier => supplier.id !== id)
          });
          setSupplier(supplier.filter(supplier => supplier.id !== id));
          setCurrentPage(1);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to delete supplier."
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
                  onClick={() => setModal("Create Supplies")}
                >
                  Create New Supplies
                </button>
              </div> */}
              <SupplierTable
                suppliers={currentSuppliers}
                updateRow={updateRow}
                deleteRow={deleteRow}
              />
              <Pagination
                totalResults={supplier.length}
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
          {activeModal.name === "Create Supplies" && (
            <CreateSupplier
              createSupplier={createSupplier}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Update Supplies" && (
            <UpdateSupplier
              currentSupplier={currentSupplier}
              updateSupplier={updateSupplier}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Delete Supplies" && (
            <DeleteSupplier
              currentSupplier={currentSupplier}
              deleteSupplier={deleteSupplier}
              setActiveModal={setActiveModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
};