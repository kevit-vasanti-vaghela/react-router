import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";


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
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />}, //path = ''
      {path: 'products', element: <Products />},
      {path: 'products/:productId', element: <ProductDetail />}
    ],
  },
])

const App = () => {
  return (
   
        <RouterProvider router={router}/> 

  );
};

export default App;
