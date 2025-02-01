import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom"

import Layout from "./Layout"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"

const App = () => {
  
  
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route  path={'/'} element={<Layout/>}>
                <Route path="" element={<LandingPage/>}/>
                <Route path="home" element={<Home/>}/>
            </Route>
        )
    )

    return (
    <>
        <RouterProvider  router={router}/>
    </>
  )
}
export default App