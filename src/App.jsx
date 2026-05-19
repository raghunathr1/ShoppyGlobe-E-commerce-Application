import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
import './App.css'
const Home = lazy(() => import("./components/Home"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/product/:id",
    element: <ProductDetail />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <>
    
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
      </>
          

  );
}

export default App;