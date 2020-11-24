import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavBar from './components/Shop/SideNavBar/Sidebar';
import MedicineInventory from './components/Shop/MedicineInventory/MedicineInventoryComponent';
import ShopSignUp from './components/Shop/SignUp/ShopSignUp';
import HomePageComponent from './components/Shop/Home/HomePageComponent';
import Footer from './components/Shop/footer/FooterComponent'

function Shop() {
  return (    
    <div>
      <SideNavBar />
      <Switch>
          <Route path="/shop/inventory" component={MedicineInventory} />
          <Route path="/shop/signup" component={ShopSignUp} />
          <Route path="/shop/homepage" component={HomePageComponent} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Shop;