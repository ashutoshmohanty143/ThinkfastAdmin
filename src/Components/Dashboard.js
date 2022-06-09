import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';
import Home from './Home';



class Dashboard extends Component {
    render() {
        return (
            <>
                <Header />
                <SideNav />
                <Home />    
                <Footer />
            </>
        )
    }
}
export default Dashboard;
