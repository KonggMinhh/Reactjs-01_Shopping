import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./pages/components/Navbar/Navbar";
import Footer from "./pages/components/Footer/Footer";
import "./app.scss";

const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            { path: "products", element: <Product /> },
            { path: "products/:productId", element: <Products /> },
        ],
    },
]);
function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
