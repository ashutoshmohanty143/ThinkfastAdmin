import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';


class Dashboard extends Component {
    render() {
        return (
            <div className='has-navbar-vertical-aside navbar-vertical-aside-show-xl'>
                <Header />
                <BrowserRouter>
                    <SideNav />
                    <main id="content" role="main" className="main">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<AboutUs />} />
                    </Routes>
                    </main>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}
export default Dashboard;
