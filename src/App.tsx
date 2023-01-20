import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppHeader = React.lazy(() => import("host/AppHeader"));
const ProvisioningComponent = React.lazy(() => import("provisn_app/ProvisioningComponent")); 
const StationMgtComponent = React.lazy(() => import("station_mgt_app/StationMgtComponent"));


function App() {
  return (
    <div>
      <AppHeader />
      <div className="app-menu">
        <div className="app-logo-name">Charger Management</div>
        <div className="app-menu-list">
          <ul>
            <li className="app-menu-list-item">
              <a href="http://localhost:3002">Provisioning</a>
            </li>
            <li className="app-menu-list-item">
            <a href="http://localhost:3002/station-mgt">Station Management</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="charger-mgt-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProvisioningComponent />} />
          <Route path="/station-mgt" element={<StationMgtComponent />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
