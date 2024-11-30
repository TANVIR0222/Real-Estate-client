import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
import CreateListing from "@/page/CreateListing";
import ListCart from "@/components/popularCategory/ListCart";
import PropertyView from "@/components/popularCategory/PropertyView";
import WishList from "@/page/WishList";
import TripList from "@/page/TripList";
import SearchView from "@/components/popularCategory/SearchView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
        {
            path:'',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
            path:'/create-List',
            element: <CreateListing />
        },
        {
            path:'/listCart/:label',
            element: <ListCart />
        },
        {
            path:'/property/:id',
            element: <PropertyView />
        },
        {
            path:'/favorite-booking',
            element: <WishList />
        },
        {
            path:'/trip_list',
            element: <TripList />
        },
        {
            path:'/search-view',
            element: <SearchView />
        },
    ]
  },
]);
