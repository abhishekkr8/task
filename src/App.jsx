import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SubmitAssignment from "./pages/SubmitAssignment";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";
import Samples from "./pages/Samples";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Services from "./pages/Services";
import AITools from "./pages/AITools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Public Home
      {
        index: true,
        element: <Dashboard />,
      },
      { 
        path: "/services", 
        element: <Services /> 
      },

      // Protected Routes
      {
        element: <PrivateRoute />, // Wrapper
        children: [
          {
            path: "/submit-assignment",
            element: <SubmitAssignment />,
          },
          {
            path: "/samples",
            element: <Samples />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/faq",
            element: <FAQ />,
          },
          { 
            path: "/ai-tools", 
            element: <AITools /> 
          },
        ],
      },

      // Public Routes
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
