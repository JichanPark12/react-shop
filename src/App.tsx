import './index.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CategoryProductsContainer from './components/categoryProducts/CategoryProductsContainer';
import { Suspense } from 'react';
import ProductContainer from './components/product/ProductContainer';
import CartContainer from './components/cart/CartContainer';
import FooterContainer from './components/footer/footerContainer';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="dark:bg-darkBlueColor dark:text-gray-400 h-screen transition-opacity">
      <Router>
        <div className="dark:bg-darkBlueColor ">
          <ErrorBoundary fallback={<div>nav 데이터 패칭 에러</div>}>
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  <span className="loading loading-ring loading-xs"></span>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-md"></span>
                  <span className="loading loading-ring loading-lg"></span>
                </div>
              }>
              <Nav></Nav>
            </Suspense>
          </ErrorBoundary>
          <div className="pt-16 min-h-[760px]">
            <Routes>
              <Route
                path="/"
                element={<Home />}></Route>

              <Route
                path="/category/:id"
                element={<CategoryProductsContainer />}></Route>
              <Route
                path="/product/:id"
                element={<ProductContainer />}></Route>
              <Route
                path="/cart"
                element={<CartContainer />}></Route>
              <Route
                path="/*"
                element={<Home />}></Route>
            </Routes>
          </div>

          <FooterContainer></FooterContainer>
        </div>
      </Router>
    </div>
  );
}

export default App;
