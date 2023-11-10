import Dashboard from "./layout/dashboard"
import {router} from './router/index'
import { RouterProvider } from "react-router-dom"


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
