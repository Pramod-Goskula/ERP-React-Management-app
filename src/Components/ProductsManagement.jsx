import React, { useState } from 'react';
import { Card, Button, Modal, Form, ToastContainer, Toast } from 'react-bootstrap';
import dummyData from './DummyData';
import './ProductsManagement.css';

const ProductsManagement = () => {
  const [products, setProducts] = useState(dummyData.products);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [editProduct, setEditProduct] = useState({ name: '', category: '', price: '', stock: '' });

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = (productId) => {
    setDeleteProductId(productId);
    setShowDeleteModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (productId) => {
    const product = products.find(product => product.id === productId);
    setEditProduct({ ...product });
    setEditProductId(productId);
    setShowEditModal(true);
  };


  const handleAddProduct = () => {
    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stock: '' });
    setShowAddModal(false);


    dummyData.products = updatedProducts;

    dummyData.totalProducts = updatedProducts.length;

    setToastMessage('Product added successfully!');
    setShowToast(true);
    setToastVariant('success');
  };

  const handleDeleteProduct = () => {
    const updatedProducts = products.filter(product => product.id !== deleteProductId);
    setProducts(updatedProducts);


    dummyData.products = updatedProducts;

    dummyData.totalProducts = updatedProducts.length;

    setShowDeleteModal(false);

    setToastMessage('Product deleted successfully!');
    setShowToast(true);
    setToastVariant('danger');
  };

  const handleEditProduct = () => {
    const updatedProducts = products.map(product => {
      if (product.id === editProductId) {
        return { ...editProduct };
      }
      return product;
    });
    setProducts(updatedProducts);


    dummyData.products = updatedProducts;

    setShowEditModal(false);

    setToastMessage('Product updated successfully!');
    setShowToast(true);
    setToastVariant('success');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = e => {
    const { name, value } = e.target;
    setEditProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className='text-center text-primary'>Products Management</h2>
      <Button variant="primary mb-3" onClick={handleShowAddModal}>Add Product</Button>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <Card className="product-card shadow-sm" bg="light" border="primary">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <p><span className='text-muted fw-semibold'>Category: </span>{product.category}</p>
                  <p><span className='text-muted fw-semibold'>Price: </span> <i className="bi bi-currency-rupee"></i>{product.price}</p>
                  <p><span className='text-muted fw-semibold'>Stock: </span> {product.stock}</p>
                </Card.Text>
                <Button variant="danger" onClick={() => handleShowDeleteModal(product.id)}>Delete</Button>
                <Button variant="primary" className="ms-2" onClick={() => handleShowEditModal(product.id)}>Edit</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/*To show Add Product Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={newProduct.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="productCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" value={newProduct.category} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={newProduct.price} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="productStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" value={newProduct.stock} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>Cancel</Button>
          <Button variant="primary" onClick={handleAddProduct}>Add</Button>
        </Modal.Footer>
      </Modal>

      {/*To Show Delete Product Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteProduct}>Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* To Show Edit Product Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={editProduct.name} onChange={handleEditChange} />
            </Form.Group>
            <Form.Group controlId="editProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" value={editProduct.category} onChange={handleEditChange} />
            </Form.Group>
            <Form.Group controlId="editProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={editProduct.price} onChange={handleEditChange} />
            </Form.Group>
            <Form.Group controlId="editProductStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" value={editProduct.stock} onChange={handleEditChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>Cancel</Button>
          <Button variant="primary" onClick={handleEditProduct}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* To Display Toast Message */}
      <ToastContainer position="top-end" className="p-3 mt-5" style={{ zIndex: 1 }}>
        <Toast bg={toastVariant} onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Body className='text-white'>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ProductsManagement;
