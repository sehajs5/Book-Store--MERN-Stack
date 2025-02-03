import {createBrowserRouter} from 'react-router-dom'; 
import App from '../App';
import Home from '../pages/Home';
import Login from '../componenets/Login';
import Register from '../componenets/Register';
import AddToCart from '../pages/AddToCart';
import Checkout from '../pages/Checkout';
import SingleBook from '../pages/Books/SingleBook';
import Privateroute from './Privateroute';
import OrderPage from '../pages/OrderPage';
import AdminRoute from './AdminRoute';
import AdminLogin from '../componenets/AdminLogin';
import DashboardLayout from '../pages/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import ManageBooks from '../pages/ManageBooks';
import AddBook from '../pages/Add Book/AddBook';
import UpdateBook from '../pages/UpdateBook';
const router = createBrowserRouter([
    {
        path: "/", 
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/orders",
                element: <Privateroute> <OrderPage/> </Privateroute>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cart", 
                element: <AddToCart/>
            },
            {
                path: "/checkout", 
                element: <Privateroute> <Checkout/></Privateroute>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
    },
    {
        path: "/dashboard",
        element: <AdminRoute>
            <DashboardLayout/>
        </AdminRoute>,
        children: [
            {
            path: "",
            element: <AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path: "add-new-book",
                element: <AdminRoute><AddBook/></AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><UpdateBook/></AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute><ManageBooks/></AdminRoute>
            },
        ]
    }
]);
export default router;