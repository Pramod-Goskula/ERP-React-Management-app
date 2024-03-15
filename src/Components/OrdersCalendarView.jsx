import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dummyData from './DummyData';

const OrdersCalendarView = () => {
    const { orders } = dummyData;
    const [selectedDate, setSelectedDate] = useState(new Date());

    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.date);
        return orderDate.toDateString() === selectedDate.toDateString();
    });

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const renderOrders = () => {
        return filteredOrders.map(order => (
            <div key={order.id} className="mb-3">
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title>{`Order #${order.id}`}</Card.Title>
                        <Card.Text>
                            <p>Customer: {order.customer}</p>
                            <p>Date: {order.date.toDateString()}</p>
                            <p>Status: {order.status}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ));
    };

    return (
        <div>
            <h2 className='text-warning-emphasis '>Orders Calendar View</h2>
            <div className="row mt-4">
                <div className="col-md-4 mx-auto mb-3">
                    <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>
                <div className="col-md-8">
                    <h3>Orders for {selectedDate.toDateString()}</h3>
                    {filteredOrders.length > 0 ? renderOrders() : <Alert variant="danger text-center fw-bold">No orders for this date</Alert>}
                </div>
            </div>
        </div>
    );
};

export default OrdersCalendarView;
