import {router} from './router/index'
import { RouterProvider } from "react-router-dom"


function App() {
  return (
    <div className='scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
