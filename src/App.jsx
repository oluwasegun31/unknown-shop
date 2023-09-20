import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home, Product, ProductDetails, Error404 } from "./pages";
import RootLayout from "./pageLayout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
