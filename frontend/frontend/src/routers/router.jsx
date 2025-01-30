import {createBrowserRouter} from 'react-router-dom'; 
import App from '../App';
import Home from '../pages/Home';
import Login from '../componenets/Login';
import Register from '../componenets/Register';
import AddToCart from '../pages/AddToCart';
import Checkout from '../pages/Checkout';
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
                element: <Checkout/>
            }
        ]
    },
]);
export default router;