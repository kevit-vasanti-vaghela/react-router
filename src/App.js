import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";


// ONE WAY OF DEFINING ROUTES
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>} />
//     <Route path="/products" element={<Products/>} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)


// ANOTHER WAY OF DEFINING ROUTES
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/' , element: <Home />},
      {path: '/products', element: <Products />}
    ]
  },
])

const App = () => {
  return (
   
        <RouterProvider router={router}/> 

  );
};

export default App;
