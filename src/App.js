import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import ProductsManagement from './Components/ProductsManagement';
import OrdersManagement from './Components/OrdersManagement';
import OrdersCalendarView from './Components/OrdersCalendarView';
import Dashboard from './Components/DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/orders-calendar" element={<OrdersCalendarView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
