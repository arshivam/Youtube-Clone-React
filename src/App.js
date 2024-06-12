import './App.css';
import Body from './components/Body';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Watch from './components/Watch';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Feed/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
