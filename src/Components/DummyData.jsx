const dummyData = {
    products: [
        { id: 1, name: 'T-shirt', category: 'Clothing', price: 20, stock: 150 },
        { id: 2, name: 'Jeans', category: 'Clothing', price: 40, stock: 100 },
        { id: 3, name: 'Running Shoes', category: 'Footwear', price: 80, stock: 80 },
        { id: 4, name: 'Backpack', category: 'Accessories', price: 60, stock: 90 },
        { id: 5, name: 'Smartphone', category: 'Electronics', price: 600, stock: 50 },
        { id: 6, name: 'Laptop', category: 'Electronics', price: 1000, stock: 30 },
        { id: 7, name: 'Watch', category: 'Accessories', price: 150, stock: 120 },
        { id: 8, name: 'Sunglasses', category: 'Accessories', price: 80, stock: 80 },
        { id: 9, name: 'Headphones', category: 'Electronics', price: 50, stock: 100 },
        { id: 10, name: 'Dress', category: 'Clothing', price: 70, stock: 70 }
    ],
    orders: [
        { id: 'ORD1', customer: 'Priya Patel', date: new Date(2024, 2, 14), status: 'Pending' },
        { id: 'ORD2', customer: 'Rahul Sharma', date: new Date(2024, 2, 15), status: 'Shipped' },
        { id: 'ORD3', customer: 'Ananya Singh', date: new Date(2024, 2, 15), status: 'Delivered' },
        { id: 'ORD4', customer: 'Vikram Gupta', date: new Date(2024, 2, 20), status: 'Pending' },
        { id: 'ORD5', customer: 'Neha Mehra', date: new Date(2024, 2, 21), status: 'Shipped' }
    ],
    totalProducts: 0,
    totalOrders: 0,
};

dummyData.totalProducts = dummyData.products.length;
dummyData.totalOrders = dummyData.orders.length;

export default dummyData;
