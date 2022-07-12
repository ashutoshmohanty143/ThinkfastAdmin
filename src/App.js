import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import ProtectedRoutes from './Components/Auth/ProtectedRoutes';

import Offers from './Components/Offers/Offers';
import AddOffers from './Components/Offers/AddOffers';
import UpdateOffer from './Components/Offers/UpdateOffer';

import Zones from './Components/Zone/Zones';
import AddZone from './Components/Zone/AddZone';
import UpdateZone from './Components/Zone/UpdateZone';

import Slots from './Components/Slot/Slots';
import AddSlot from './Components/Slot/AddSlot';
import UpdateSlot from './Components/Slot/UpdateSlot';

import Wirehouses from './Components/Wirehouse/Wirehouses';
import AddWirehouse from './Components/Wirehouse/AddWirehouse';
import UpdateWirehouse from './Components/Wirehouse/UpdateWirehouse';

import LocationPopup from "./Components/Location Popup/LocationPopup";
import AddLocationPopup from "./Components/Location Popup/AddLocationPopup";

import Orders from './Components/Orders/Orders';
import PageNotFound from './Components/Common/PageNotFound';

import Discounts from './Components/Discount/Discounts';
import AddDiscount from './Components/Discount/AddDiscount';

import Users from './Components/Users/Users';
import AddUser from './Components/Users/AddUser';



function App() {
  let token = sessionStorage.getItem('userToken');

  return (
    <>
      
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={token ? <Dashboard /> : <Login />} />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/dashboard" element={<ProtectedRoutes Comp={Home} />} />
            <Route path="/" element={<ProtectedRoutes Comp={Dashboard} />} >
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/offers" element={<Offers />} />
              <Route exact path="/addoffer" element={<AddOffers />} />
              <Route exact path="/updateoffer/:id" element={<UpdateOffer />} />

              <Route exact path="/zones" element={<Zones />} />
              <Route exact path="/addzone" element={<AddZone />} />
              <Route exact path="/updatezone/:id" element={<UpdateZone />} />

              <Route exact path="/slots" element={<Slots />} />
              <Route exact path="/addslot" element={<AddSlot />} />
              <Route exact path="/updateslot/:id" element={<UpdateSlot />} />

              <Route exact path="/wirehouses" element={<Wirehouses />} />
              <Route exact path="/addwirehouse" element={<AddWirehouse />} />
              <Route exact path="/updatewirehouse/:id" element={<UpdateWirehouse />} />

              <Route exact path="/locationpopup" element={<LocationPopup />} />
              <Route exact path="/addlocationpopup" element={<AddLocationPopup />} />

              <Route exact path="/discounts" element={<Discounts />} />
              <Route exact path="/adddiscount" element={<AddDiscount />} />

              <Route exact path="/users" element={<Users />} />
              <Route exact path="/adduser" element={<AddUser />} />

              <Route exact path="/orders" element={<Orders />} />
            </Route>
            <Route exact path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    
    </>
    
  );
}

export default App;
