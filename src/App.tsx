import './index.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CategoryProductsContainer from './components/categoryProducts/CategoryProductsContainer';
import { Suspense } from 'react';
import ProductContainer from './components/product/ProductContainer';
import CartContainer from './components/cart/CartContainer';
function App() {
  return (
    <div className="dark:bg-darkBlueColor dark:text-gray-400 h-screen transition-opacity">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        }
      >
        <Router>
          <Nav></Nav>

          <div className="dark:bg-darkBlueColor pl-5 pr-5">
            <div className=" max-w-screen-xl2 m-auto ">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/category/:id"
                  element={<CategoryProductsContainer />}
                ></Route>
                <Route path="/product/:id" element={<ProductContainer />}></Route>
                <Route path="/cart" element={<CartContainer />}></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
