import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Suspense, lazy } from "react";

// Components
import Header from "./components/Header/Header";

// Lazy loaded components
const ProductList = lazy(() => import("./components/Products/ProductList"));
const ProductDetail = lazy(() => import("./components/Products/ProductDetail"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
