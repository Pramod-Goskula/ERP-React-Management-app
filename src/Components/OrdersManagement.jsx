import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Table } from 'react-bootstrap';
import dummyData from './DummyData';

const OrdersManagement = () => {
    const [orders, setOrders] = useState(dummyData.orders);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const [previousStatus, setPreviousStatus] = useState('');
    const [viewType, setViewType] = useState('card');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);

    useEffect(() => {
        dummyData.orders = orders;
    }, [orders]);

    const handleShowDetailsModal = (order) => {
        setSelectedOrder(order);
        setPreviousStatus(order.status);
        setShowDetailsModal(true);
    };

    const handleCloseDetailsModal = () => {
        setShowDetailsModal(false);
        setSelectedOrder(null);
        setPreviousStatus('');
    };

    const handleUpdateStatus = () => {
        const updatedOrders = orders.map(order => {
            if (order.id === selectedOrder.id) {
                return { ...order, status: newStatus };
            }
            return order;
        });
        setOrders(updatedOrders);
        handleCloseDetailsModal();
    };

    const handleDeleteOrder = (orderId) => {
        setOrderToDelete(orderId);
        setShowDeleteModal(true);
    };

    const handleDeleteProduct = () => {
        const updatedOrders = orders.filter(order => order.id !== orderToDelete);
        setOrders(updatedOrders);
        setShowDeleteModal(false);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setOrderToDelete(null);
    };

    const renderOrders = () => {
        if (viewType === 'table') {
            return (
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.date.toDateString()}</td>
                                <td>{order.status}</td>
                                <td className='d-flex justify-content-center'>
                                    <Button variant="primary" className='me-2' onClick={() => handleShowDetailsModal(order)}>View Details</Button>
                                    <Button variant="danger" onClick={() => handleDeleteOrder(order.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            );
        } else {
            return orders.map(order => (
                <div key={order.id} className="col-md-4 mb-3">
                    <Card className="shadow mb-3 text-dark">
                        <Card.Body>
                            <Card.Title>{`Order #${order.id}`}</Card.Title>
                            <Card.Text>
                                <p>Customer: {order.customer}</p>
                                <p>Date: {order.date.toDateString()}</p>
                                <p>Status: {order.status}</p>
                            </Card.Text>
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" className='me-2' onClick={() => handleShowDetailsModal(order)}>View Details</Button>
                                <Button variant="danger" onClick={() => handleDeleteOrder(order.id)}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ));
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-warning">Orders Management</h2>
            <div className="row">
                <div className='col-md-12'>
                    <h4 className='text-start'>Total Orders: {orders.length}</h4>
                    <div className=' d-flex justify-content-end'>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example" value={viewType} onChange={(e) => setViewType(e.target.value)}>
                                    <option>Select Orders View</option>
                                    <option value="card">Card View</option>
                                    <option value="table">Table View</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row">
                    {renderOrders()}
                </div>
            </div>

            {/* To Show Delete Order Modal */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this order?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteProduct}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {/* To Show Order Details Modal */}
            <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Order ID:</strong> {selectedOrder?.id}</p>
                    <p><strong>Customer Name:</strong> {selectedOrder?.customer}</p>
                    <p><strong>Order Date:</strong> {selectedOrder?.date?.toDateString()}</p>
                    <p><strong>Previous Status:</strong> {previousStatus}</p>
                    <Form.Group controlId="newStatus">
                        <Form.Label>New Status:</Form.Label>
                        <Form.Control as="select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailsModal}>Close</Button>
                    <Button variant="primary" onClick={handleUpdateStatus}>Update Status</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OrdersManagement;
