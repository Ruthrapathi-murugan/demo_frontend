import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import UserProfile from './Components/UserProfile';
import CartPage from './Components/CartPage';
import ProductInfo from './Components/ProductInfo';
import Product from './Components/Product';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<ProductListing />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:productSku" element={<ProductInfo />} />
        </Route>
      
      </Routes>
    </Router>
  );
}

export default App;
