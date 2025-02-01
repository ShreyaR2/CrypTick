import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";   
import Layout from "./Layout"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import AllCoins from "./pages/AllCoins"

const App = () => {
  
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route  path={'/'} element={<Layout/>}>
                <Route path="" element={<LandingPage/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="coin/" element={<AllCoins/>}/>
                <Route path="coin/:symbol" element={<Coin/>}/>
            </Route>
        )
    )

    return (
    <>
        <RouterProvider  router={router}/>
        <Toaster /> 
    </>
  )
}
export default App