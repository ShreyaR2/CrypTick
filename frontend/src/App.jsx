import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom"

import Layout from "./Layout"

const App = () => {
  
  
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route to={<Layout/>}>

            </Route>
        )
    )
    

    return (
    <div>

    </div>
  )
}
export default App