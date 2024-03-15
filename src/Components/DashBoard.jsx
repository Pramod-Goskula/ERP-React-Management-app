import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import dummyData from './DummyData';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-center'>Summary</h2>
            <div className="row justify-content-center">
                <div className="col-md-4 p-3">
                    <Link to="/products" className="card-link">
                        <Card className="p-3 shadow text-center card-container">
                            <Card.Body>
                                <Card.Title className="text-muted">Total Products</Card.Title>
                                <Card.Text><strong className="fs-4">{dummyData.totalProducts}</strong></Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-md-4 p-3">
                    <Link to="/orders" className="card-link">
                        <Card className="p-3 shadow text-center card-container">
                            <Card.Body className='p-3'>
                                <Card.Title className="text-muted">Total Orders</Card.Title>
                                <Card.Text><strong className="fs-4">{dummyData.orders.length}</strong></Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
