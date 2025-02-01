import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import IndivMemeCoin from './pages/IndivMemeCoin';
import ApiStuff from './pages/ApiStuff';


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="indivmemecoin" element={<IndivMemeCoin />} />
          <Route path="apistuff" element={<ApiStuff />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
