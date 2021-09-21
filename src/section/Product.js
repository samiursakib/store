import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getProducts,
  getCreatedProduct,
  getUpdatedProduct,
  getDeletedProduct
} from "../app/api";

// Components
import { ProductTable } from "../components/Table";
import { CreateProduct } from "../components/Create";
import { UpdateProduct } from "../components/Update";
import { DeleteProduct } from "../components/Delete";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import MySwal from "../index";

export const Product = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);  
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: '',
    image: '',
    price: null,
    description: ''
  });
  const [products, setProducts] = useState([]);
  const [activeModal, setActiveModal] = useState({ name: "", active: false });
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  getProducts()
    .then((response) => {
      setProducts(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  const productsLastIndex = currentPage * pageSize;
  const productsFirstIndex = productsLastIndex - pageSize;
  const currentProducts = products.slice(productsFirstIndex, productsLastIndex);

  // Setting up Modal
  const setModal = modal => {
    // search("");
    setActiveModal({ name: modal, active: true });
  };

  // Pagination
  const paginate = page => {
    setCurrentPage(page);
  };

  

  // Create Product
  const createProduct = async product => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getCreatedProduct(product).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Product created successfully."
        }).then(() => {
          dispatch({ type: "CREATE_PRODUCT", data: result });
          setProducts([...products, result]);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to create product."
      });
    } finally {
      setLoading(false);
    }
  };

  // Update Product
  const updateRow = product => {
    setModal("Update Product");

    setCurrentProduct({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description
    });
  };

  const updateProduct = async (id, updatedProduct) => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getUpdatedProduct(id, updatedProduct).then(res => {
        const result = res.data;
        MySwal.fire({
          icon: "success",
          title: "Product updated successfully."
        }).then(() => {
          dispatch({
            type: "SET_PRODUCTS",
            data: products.map(product =>
              product.id === id ? Object.assign(product, result) : product
            )
          });
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to update product."
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete Product
  const deleteRow = product => {
    setModal("Delete Product");

    setCurrentProduct({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description
    });
  };

  const deleteProduct = async id => {
    setActiveModal(false);
    setLoading(true);

    try {
      await getDeletedProduct(id).then(() => {
        MySwal.fire({
          icon: "success",
          title: "Product deleted successfully."
        }).then(() => {
          dispatch({
            type: "SET_PRODUCTS",
            data: products.filter(product => product.id !== id)
          });
          setProducts(products.filter(product => product.id !== id));
          setCurrentPage(1);
        });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to delete product."
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
                  onClick={() => setModal("Create Product")}
                >
                  Create New Product
                </button>
              </div>
              <ProductTable
                products={currentProducts}
                updateRow={updateRow}
                deleteRow={deleteRow}
              />
              <Pagination
                totalResults={products.length}
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
          {activeModal.name === "Create Product" && (
            <CreateProduct
              createProduct={createProduct}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Update Product" && (
            <UpdateProduct
              currentProduct={currentProduct}
              updateProduct={updateProduct}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal.name === "Delete Product" && (
            <DeleteProduct
              currentProduct={currentProduct}
              deleteProduct={deleteProduct}
              setActiveModal={setActiveModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
};