import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurentMenu from "./RestaurentMenu";
import Shimmer from "./Shimmer";
import userContext from "./userContext";
import {Provider} from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
import Footer from "./Footer";

const Grocery = lazy(() => import("./Grocery"));
const Help=lazy(() => import("./Help"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Satheesh Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Heading />
          <Outlet />
          <Footer />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurentMenu />,
      },
      {
       path: "/cart",
       element: <Cart/>
      },
      {
        path: "/help",
        element: <Help />,
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
