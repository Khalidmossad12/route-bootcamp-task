import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
   <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
