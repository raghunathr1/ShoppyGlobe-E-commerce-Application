import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
const Home = lazy(() => import("./Components/Home"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const Cart = lazy(() => import("./Components/Cart"));
const Checkout = lazy(() => import("./Components/Checkout"));
const NotFound = lazy(() => import("./Components/NotFound"));

// Path Setting 

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