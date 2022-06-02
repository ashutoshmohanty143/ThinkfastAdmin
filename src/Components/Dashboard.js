import React, { Component } from 'react'
import Header from './Header';

class Dashboard extends Component {
    render() {
        return (
            <div className="has-navbar-vertical-aside navbar-vertical-aside-show-xl footer-offset">
    <Header />                

<aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white  ">
    <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset">
            
            <a className="navbar-brand" href="./index.html" aria-label="Front">
                <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
                <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
                <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
                <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" />
            </a>
            
            <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
            <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
            <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
            </button>
            
            
            <div className="navbar-vertical-content">
                <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                    
                    <div className="nav-item">
                        <a className="nav-link dropdown-toggle active" href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded="true" aria-controls="navbarVerticalMenuDashboards">
                            <i className="bi-house-door nav-icon"></i>
                            <span className="nav-link-title">Dashboards</span>
                        </a>
                        <div id="navbarVerticalMenuDashboards" className="nav-collapse collapse show" data-bs-parent="#navbarVerticalMenu">
                            <a className="nav-link active" href="./index.html">Default</a>
                            <a className="nav-link " href="./dashboard-alternative.html">Alternative</a>
                        </div>
                    </div>
                    
                    <span className="dropdown-header mt-4">Pages</span>
                    <small className="bi-three-dots nav-subtitle-replacer"></small>
                    
                    <div className="navbar-nav nav-compact">
                    </div>
                    <div id="navbarVerticalMenuPagesMenu">
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesUsersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUsersMenu">
                                <i className="bi-people nav-icon"></i>
                                <span className="nav-link-title">Users</span>
                            </a>
                            <div id="navbarVerticalMenuPagesUsersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                                <a className="nav-link " href="./users.html">Overview</a>
                                <a className="nav-link " href="./users-leaderboard.html">Leaderboard</a>
                                <a className="nav-link " href="./users-add-user.html">Add User <span className="badge bg-info rounded-pill ms-1">Hot</span></a>
                            </div>
                        </div>
                        
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesUserProfileMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUserProfileMenu">
                                <i className="bi-person nav-icon"></i>
                                <span className="nav-link-title">User Profile <span className="badge bg-primary rounded-pill ms-1">5</span></span>
                            </a>
                            <div id="navbarVerticalMenuPagesUserProfileMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                                <a className="nav-link " href="./user-profile.html">Profile</a>
                                <a className="nav-link " href="./user-profile-teams.html">Teams</a>
                                <a className="nav-link " href="./user-profile-projects.html">Projects</a>
                                <a className="nav-link " href="./user-profile-connections.html">Connections</a>
                                <a className="nav-link " href="./user-profile-my-profile.html">My Profile</a>
                            </div>
                        </div>
                        
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesAccountMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesAccountMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesAccountMenu">
                                <i className="bi-person-badge nav-icon"></i>
                                <span className="nav-link-title">Account</span>
                            </a>
                            <div id="navbarVerticalMenuPagesAccountMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                                <a className="nav-link " href="./account-settings.html">Settings</a>
                                <a className="nav-link " href="./account-billing.html">Billing</a>
                                <a className="nav-link " href="./account-invoice.html">Invoice</a>
                            </div>
                        </div>
                        
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesEcommerceMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceMenu">
                                <i className="bi-basket nav-icon"></i>
                                <span className="nav-link-title">E-commerce</span>
                            </a>
                            <div id="navbarVerticalMenuPagesEcommerceMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                                <a className="nav-link " href="./ecommerce.html">Overview</a>
                                <div id="navbarVerticalMenuPagesMenuEcommerce">
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceProductsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu">
                                            Products
                                        </a>
                                        <div id="navbarVerticalMenuPagesEcommerceProductsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                            <a className="nav-link " href="./ecommerce-products.html">Products</a>
                                            <a className="nav-link " href="./ecommerce-product-details.html">Product Details</a>
                                            <a className="nav-link " href="./ecommerce-add-product.html">Add Product</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceOrdersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu">
                                            Orders
                                        </a>
                                        <div id="navbarVerticalMenuPagesEcommerceOrdersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                            <a className="nav-link " href="./ecommerce-orders.html">Orders</a>
                                            <a className="nav-link " href="./ecommerce-order-details.html">Order Details</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceCustomersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu">
                                            Customers
                                        </a>
                                        <div id="navbarVerticalMenuPagesEcommerceCustomersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                            <a className="nav-link " href="./ecommerce-customers.html">Customers</a>
                                            <a className="nav-link " href="./ecommerce-customer-details.html">Customer Details</a>
                                            <a className="nav-link " href="./ecommerce-add-customers.html">Add Customers</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                <a className="nav-link " href="./ecommerce-referrals.html">Referrals</a>
                                <a className="nav-link " href="./ecommerce-manage-reviews.html">Manage Reviews</a>
                                <a className="nav-link " href="./ecommerce-checkout.html">Checkout</a>
                            </div>
                        </div>
                        
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesProjectsMenu">
                                <i className="bi-stickies nav-icon"></i>
                                <span className="nav-link-title">Projects</span>
                            </a>
                            <div id="navbarVerticalMenuPagesProjectsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                                <a className="nav-link " href="./projects.html">Overview</a>
                                <a className="nav-link " href="./projects-timeline.html">Timeline</a>
                            </div>
                        </div>
                        
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesProjectMenu">
                                <i className="bi-briefcase nav-icon"></i>
                                <span className="nav-link-title">Project</span>
                            </a>
                            <div id="navbarVerticalMenuPagesProjectMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                                <a className="nav-link " href="./project.html">Overview</a>
                                <a className="nav-link " href="./project-files.html">Files</a>
                                <a className="nav-link " href="./project-activity.html">Activity</a>
                                <a className="nav-link " href="./project-teams.html">Teams</a>
                                <a className="nav-link " href="./project-settings.html">Settings</a>
                            </div>
                        </div>
                        
                        
                        <div className="nav-item">
                            <a className="nav-link dropdown-toggle  collapsed" href="#" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication">
                                <i className="bi-shield-lock nav-icon"></i>
                                <span className="nav-link-title">Authentication</span>
                            </a>
                            <div id="navbarVerticalMenuAuthentication" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenu">
                                <div id="navbarVerticalMenuAuthenticationMenu">
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationLoginMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationLoginMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationLoginMenu">
                                            Log In
                                        </a>
                                        <div id="navbarVerticalMenuAuthenticationLoginMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                            <a className="nav-link " href="./authentication-login-basic.html">Basic</a>
                                            <a className="nav-link " href="./authentication-login-cover.html">Cover</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationSignupMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationSignupMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationSignupMenu">
                                            Sign Up
                                        </a>
                                        <div id="navbarVerticalMenuAuthenticationSignupMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                            <a className="nav-link " href="./authentication-signup-basic.html">Basic</a>
                                            <a className="nav-link " href="./authentication-signup-cover.html">Cover</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationResetPasswordMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationResetPasswordMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationResetPasswordMenu">
                                            Reset Password
                                        </a>
                                        <div id="navbarVerticalMenuAuthenticationResetPasswordMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                            <a className="nav-link " href="./authentication-reset-password-basic.html">Basic</a>
                                            <a className="nav-link " href="./authentication-reset-password-cover.html">Cover</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationEmailVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationEmailVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationEmailVerificationMenu">
                                            Email Verification
                                        </a>
                                        <div id="navbarVerticalMenuAuthenticationEmailVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                            <a className="nav-link " href="./authentication-email-verification-basic.html">Basic</a>
                                            <a className="nav-link " href="./authentication-email-verification-cover.html">Cover</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="nav-item">
                                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthentication2StepVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication2StepVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication2StepVerificationMenu">
                                            2-step Verification
                                        </a>
                                        <div id="navbarVerticalMenuAuthentication2StepVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                            <a className="nav-link " href="./authentication-2-step-verification-basic.html">Basic</a>
                                            <a className="nav-link " href="./authentication-2-step-verification-cover.html">Cover</a>
                                        </div>
                                    </div>
                                    
                                    <a className="nav-link" href="" data-bs-toggle="modal" data-bs-target="#welcomeMessageModal">Welcome Message</a>
                                    <a className="nav-link " href="./error-404.html">Error 404</a>
                                    <a className="nav-link " href="./error-500.html">Error 500</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="nav-item">
                            <a className="nav-link " href="./api-keys.html" data-placement="left">
                                <i className="bi-key nav-icon"></i>
                                <span className="nav-link-title">API Keys</span>
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link " href="./welcome-page.html" data-placement="left">
                                <i className="bi-eye nav-icon"></i>
                                <span className="nav-link-title">Welcome Page</span>
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link " href="./landing.html" data-placement="left">
                                <i className="bi-box-seam nav-icon"></i>
                                <span className="nav-link-title">Landing Page <span className="badge bg-info rounded-pill ms-1">New</span></span>
                            </a>
                        </div>
                    </div>
                    
                    <span className="dropdown-header mt-4">Apps</span>
                    <small className="bi-three-dots nav-subtitle-replacer"></small>
                    <div className="nav-item">
                        <a className="nav-link " href="./apps-kanban.html" data-placement="left">
                            <i className="bi-kanban nav-icon"></i>
                            <span className="nav-link-title">Kanban</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link " href="./apps-calendar.html" data-placement="left">
                            <i className="bi-calendar-week nav-icon"></i>
                            <span className="nav-link-title">Calendar</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link " href="./apps-invoice-generator.html" data-placement="left">
                            <i className="bi-receipt nav-icon"></i>
                            <span className="nav-link-title">Invoice Generator</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link " href="./apps-file-manager.html" data-placement="left">
                            <i className="bi-folder2-open nav-icon"></i>
                            <span className="nav-link-title">File Manager</span>
                        </a>
                    </div>
                    <span className="dropdown-header mt-4">Layouts</span>
                    <small className="bi-three-dots nav-subtitle-replacer"></small>
                    <div className="nav-item">
                        <a className="nav-link " href="./layouts/index.html" data-placement="left">
                            <i className="bi-grid-1x2 nav-icon"></i>
                            <span className="nav-link-title">Layouts</span>
                        </a>
                    </div>
                    <span className="dropdown-header mt-4">Documentation</span>
                    <small className="bi-three-dots nav-subtitle-replacer"></small>
                    <div className="nav-item">
                        <a className="nav-link " href="./documentation/index.html" data-placement="left">
                            <i className="bi-book nav-icon"></i>
                            <span className="nav-link-title">Documentation <span className="badge bg-primary rounded-pill ms-1">v2.0</span></span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link " href="./documentation/typography.html" data-placement="left">
                            <i className="bi-layers nav-icon"></i>
                            <span className="nav-link-title">Components</span>
                        </a>
                    </div>
                </div>
            </div>
  
        </div>
    </div>
</aside>

<main id="content" role="main" className="main">
    
    <div className="content container-fluid">
        
        <div className="page-header">
            <div className="row align-items-center">
                <div className="col">
                    <h1 className="page-header-title">Dashboard</h1>
                </div>
                
                <div className="col-auto">
                    <a className="btn btn-primary" href="" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                        <i className="bi-person-plus-fill me-1"></i> Invite users
                    </a>
                </div>
                
            </div>
            
        </div>
        
        <div className="row">
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                
                <a className="card card-hover-shadow h-100" href="#">
                    <div className="card-body">
                        <h6 className="card-subtitle">Total Users</h6>
                        <div className="row align-items-center gx-2 mb-1">
                            <div className="col-6">
                                <h2 className="card-title text-inherit">72,540</h2>
                            </div>
                            
                            <div className="col-6">
                                
                                <div className="chartjs-custom" style={{height: '3rem'}}>
                                    <canvas className="js-chart" data-hs-chartjs-options='{
                                    "type": "line",
                                    "data": {
                                    "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                    "datasets": [{
                                    "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                    "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                    "borderColor": "#377dff",
                                    "borderWidth": 2,
                                    "pointRadius": 0,
                                    "pointHoverRadius": 0
                                    }]
                                    },
                                    "options": {
                                    "scales": {
                                    "yAxes": [{
                                    "display": false
                                    }],
                                    "xAxes": [{
                                    "display": false
                                    }]
                                    },
                                    "hover": {
                                    "mode": "nearest",
                                    "intersect": false
                                    },
                                    "tooltips": {
                                    "postfix": "k",
                                    "hasIndicator": true,
                                    "intersect": false
                                    }
                                    }
                                    }'>
                                    </canvas>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <span className="badge bg-soft-success text-success">
                            <i className="bi-graph-up"></i> 12.5%
                        </span>
                        <span className="text-body fs-6 ms-1">from 70,104</span>
                    </div>
                </a>
                
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                
                <a className="card card-hover-shadow h-100" href="#">
                    <div className="card-body">
                        <h6 className="card-subtitle">Sessions</h6>
                        <div className="row align-items-center gx-2 mb-1">
                            <div className="col-6">
                                <h2 className="card-title text-inherit">29.4%</h2>
                            </div>
                            
                            <div className="col-6">
                                
                                <div className="chartjs-custom" style={{height: '3rem'}}>
                                    <canvas className="js-chart" data-hs-chartjs-options='{
                                    "type": "line",
                                    "data": {
                                    "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                    "datasets": [{
                                    "data": [21,20,24,20,18,17,15,17,30,30,35,25,18,30,31,35,35,90,90,90,85,100,120,120,120,100,90,75,75,75,90],
                                    "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                    "borderColor": "#377dff",
                                    "borderWidth": 2,
                                    "pointRadius": 0,
                                    "pointHoverRadius": 0
                                    }]
                                    },
                                    "options": {
                                    "scales": {
                                    "yAxes": [{
                                    "display": false
                                    }],
                                    "xAxes": [{
                                    "display": false
                                    }]
                                    },
                                    "hover": {
                                    "mode": "nearest",
                                    "intersect": false
                                    },
                                    "tooltips": {
                                    "postfix": "%",
                                    "hasIndicator": true,
                                    "intersect": false
                                    }
                                    }
                                    }'>
                                    </canvas>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <span className="badge bg-soft-success text-success">
                            <i className="bi-graph-up"></i> 1.7%
                        </span>
                        <span className="text-body fs-6 ms-1">from 29.1%</span>
                    </div>
                </a>
                
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                
                <a className="card card-hover-shadow h-100" href="#">
                    <div className="card-body">
                        <h6 className="card-subtitle">Avg. Click Rate</h6>
                        <div className="row align-items-center gx-2 mb-1">
                            <div className="col-6">
                                <h2 className="card-title text-inherit">56.8%</h2>
                            </div>
                            
                            <div className="col-6">
                                
                                <div className="chartjs-custom" style={{height: '3rem'}}>
                                    <canvas className="js-chart" data-hs-chartjs-options='{
                                    "type": "line",
                                    "data": {
                                    "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                    "datasets": [{
                                    "data": [25,18,30,31,35,35,60,60,60,75,21,20,24,20,18,17,15,17,30,120,120,120,100,90,75,90,90,90,75,70,60],
                                    "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                    "borderColor": "#377dff",
                                    "borderWidth": 2,
                                    "pointRadius": 0,
                                    "pointHoverRadius": 0
                                    }]
                                    },
                                    "options": {
                                    "scales": {
                                    "yAxes": [{
                                    "display": false
                                    }],
                                    "xAxes": [{
                                    "display": false
                                    }]
                                    },
                                    "hover": {
                                    "mode": "nearest",
                                    "intersect": false
                                    },
                                    "tooltips": {
                                    "postfix": "%",
                                    "hasIndicator": true,
                                    "intersect": false
                                    }
                                    }
                                    }'>
                                    </canvas>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <span className="badge bg-soft-danger text-danger">
                            <i className="bi-graph-down"></i> 4.4%
                        </span>
                        <span className="text-body fs-6 ms-1">from 61.2%</span>
                    </div>
                </a>
                
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                
                <a className="card card-hover-shadow h-100" href="#">
                    <div className="card-body">
                        <h6 className="card-subtitle">Pageviews</h6>
                        <div className="row align-items-center gx-2 mb-1">
                            <div className="col-6">
                                <h2 className="card-title text-inherit">92,913</h2>
                            </div>
                            
                            <div className="col-6">
                                
                                <div className="chartjs-custom" style={{height: '3rem'}}>
                                    <canvas className="js-chart" data-hs-chartjs-options='{
                                    "type": "line",
                                    "data": {
                                    "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                    "datasets": [{
                                    "data": [21,20,24,15,17,30,30,35,35,35,40,60,12,90,90,85,70,75,43,75,90,22,120,120,90,85,100,92,92,92,92],
                                    "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                    "borderColor": "#377dff",
                                    "borderWidth": 2,
                                    "pointRadius": 0,
                                    "pointHoverRadius": 0
                                    }]
                                    },
                                    "options": {
                                    "scales": {
                                    "yAxes": [{
                                    "display": false
                                    }],
                                    "xAxes": [{
                                    "display": false
                                    }]
                                    },
                                    "hover": {
                                    "mode": "nearest",
                                    "intersect": false
                                    },
                                    "tooltips": {
                                    "postfix": "k",
                                    "hasIndicator": true,
                                    "intersect": false
                                    }
                                    }
                                    }'>
                                    </canvas>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <span className="badge bg-soft-secondary text-body">0.0%</span>
                        <span className="text-body fs-6 ms-1">from 2,913</span>
                    </div>
                </a>
                
            </div>
        </div>
        


        
        <div className="card mb-3 mb-lg-5">
            
            <div className="card-header">
                <div className="row justify-content-between align-items-center flex-grow-1">
                    <div className="col-md">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="card-header-title">Users</h4>
                            
                            <div id="datatableCounterInfo" style={{display: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-6 me-3">
                                        <span id="datatableCounter">0</span>
                                        Selected
                                    </span>
                                    <a className="btn btn-outline-danger btn-sm" href="">
                                        <i className="tio-delete-outlined"></i> Delete
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-auto">
                        
                        <div className="row align-items-sm-center">
                            <div className="col-sm-auto">
                                <div className="row align-items-center gx-0">
                                    <div className="col">
                                        <span className="text-secondary me-2">Status:</span>
                                    </div>
                                    
                                    <div className="col-auto">
                                        
                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index="2" data-target-table="datatable"  data-hs-tom-select-options='{
                                                "searchInDropdown": false,
                                                "hideSearch": true,
                                                "dropdownWidth": "10rem"
                                                }'>
                                                <option value="null" selected>All</option>
                                                <option value="successful">Successful</option>
                                                <option value="overdue">Overdue</option>
                                                <option value="pending">Pending</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                            <div className="col-sm-auto">
                                <div className="row align-items-center gx-0">
                                    <div className="col">
                                        <span className="text-secondary me-2">Signed up:</span>
                                    </div>
                                    
                                    <div className="col-auto">
                                        
                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index="5" data-target-table="datatable"  data-hs-tom-select-options='{
                                                "searchInDropdown": false,
                                                "hideSearch": true,
                                                "dropdownWidth": "10rem"
                                                }'>
                                                <option value="null" selected>All</option>
                                                <option value="1 year ago">1 year ago</option>
                                                <option value="6 months ago">6 months ago</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                            <div className="col-md">
                                <form>
                                    
                                    <div className="input-group input-group-merge input-group-flush">
                                        <div className="input-group-prepend input-group-text">
                                            <i className="bi-search"></i>
                                        </div>
                                        <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
            
            <div className="table-responsive datatable-custom">
                <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options='{
                    "columnDefs": [{
                    "targets": [0, 1, 4],
                    "orderable": false
                    }],
                    "order": [],
                    "info": {
                    "totalQty": "#datatableWithPaginationInfoTotalQty"
                    },
                    "search": "#datatableSearch",
                    "entries": "#datatableEntries",
                    "pageLength": 8,
                    "isResponsive": false,
                    "isShowPaging": false,
                    "pagination": "datatablePagination"
                    }'>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="datatableCheckAll" />
                                    <label className="form-check-label"></label>
                                </div>
                            </th>
                            <th className="table-column-ps-0">Full name</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Signed up</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck2" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i></h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Unassigned</td>
                            <td>amanda@site.com</td>
                            <td>1 year ago</td>
                            <td>67989</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck3" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                                            <span className="avatar-initials">A</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Anne Richard</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Subscription</td>
                            <td>anne@site.com</td>
                            <td>6 months ago</td>
                            <td>67326</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck4" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">David Harrison</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-danger"></span>Overdue
                            </td>
                            <td>Non-subscription</td>
                            <td>david@site.com</td>
                            <td>6 months ago</td>
                            <td>55821</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck5" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Finch Hoot</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Subscription</td>
                            <td>finch@site.com</td>
                            <td>1 year ago</td>
                            <td>85214</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck6" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                            <span className="avatar-initials">B</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Bob Dean</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Subscription</td>
                            <td>bob@site.com</td>
                            <td>6 months ago</td>
                            <td>75470</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck7" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i></h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Subscription</td>
                            <td>Ella@site.com</td>
                            <td>1 year ago</td>
                            <td>37534</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck8" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Sam Kart</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Non-subscription</td>
                            <td>sam@site.com</td>
                            <td>1 year ago</td>
                            <td>57300</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck9" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Costa Quinn</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-danger"></span>Overdue
                            </td>
                            <td>Unassigned</td>
                            <td>costa@site.com</td>
                            <td>1 year ago</td>
                            <td>71288</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck10" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                                            <span className="avatar-initials">R</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Rachel Doe</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Unassigned</td>
                            <td>rachel@site.com</td>
                            <td>6 months ago</td>
                            <td>95211</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck11" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                            <span className="avatar-initials">B</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Brian Halligan</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Subscription</td>
                            <td>brian@site.com</td>
                            <td>1 year ago</td>
                            <td>58643</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck12" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Linda Bates</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Subscription</td>
                            <td>linda@site.com</td>
                            <td>1 year ago</td>
                            <td>44414</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck13" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                                            <span className="avatar-initials">C</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Chris Mathew <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i></h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Non-subscription</td>
                            <td>chris@site.com</td>
                            <td>1 year ago</td>
                            <td>12569</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck14" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                            <span className="avatar-initials">L</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Lewis Clarke</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-danger"></span>Overdue
                            </td>
                            <td>Non-subscription</td>
                            <td>lewis@site.com</td>
                            <td>1 year ago</td>
                            <td>54621</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck15" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Clarice Boone <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i></h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Non-subscription</td>
                            <td>clarice@site.com</td>
                            <td>6 months ago</td>
                            <td>23485</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck16" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-danger avatar-circle">
                                            <span className="avatar-initials">M</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Mark Colbert</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-success"></span>Successful
                            </td>
                            <td>Subscription</td>
                            <td>mark@site.com</td>
                            <td>6 months ago</td>
                            <td>78463</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck17" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                                            <span className="avatar-initials">J</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Johnny Appleseed</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Subscription</td>
                            <td>johnny@site.com</td>
                            <td>1 year ago</td>
                            <td>23564</td>
                        </tr>
                        <tr>
                            <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="usersDataCheck18" />
                                    <label className="form-check-label"></label>
                                </div>
                            </td>
                            <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="./user-profile.html">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                                            <span className="avatar-initials">P</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-inherit mb-0">Phileas Fogg</h5>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span className="legend-indicator bg-warning"></span>Pending
                            </td>
                            <td>Subscription</td>
                            <td>phileas@site.com</td>
                            <td>6 months ago</td>
                            <td>39199</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            
            <div className="card-footer">
                
                <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                    <div className="col-sm mb-2 mb-sm-0">
                        <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                            <span className="me-2">Showing:</span>
                            
                            <div className="tom-select-custom">
                                <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto"  data-hs-tom-select-options='{
                                    "searchInDropdown": false,
                                    "hideSearch": true
                                    }'>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8" selected>8</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            
                            <span className="text-secondary me-2">of</span>
                            
                            <span id="datatableWithPaginationInfoTotalQty"></span>
                        </div>
                    </div>
                    
                    <div className="col-sm-auto">
                        <div className="d-flex justify-content-center justify-content-sm-end">
                            
                        <nav id="datatablePagination" aria-label="Activity pagination"></nav>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
    
</div>


<div className="footer">
    <div className="row justify-content-between align-items-center">
        <div className="col">
            <p className="fs-6 mb-0">&copy; Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
        </div>
        
        <div className="col-auto">
            <div className="d-flex justify-content-end">
                
                <ul className="list-inline list-separator">
                    <li className="list-inline-item">
                        <a className="list-separator-link" href="#">FAQ</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="list-separator-link" href="#">License</a>
                    </li>
                    <li className="list-inline-item">
                        
                        <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                        <i className="bi-command"></i>
                        </button>
                        
                    </li>
                </ul>
                
            </div>
        </div>
        
    </div>
    
</div>

</main>



<div className="modal fade" id="welcomeMessageModal" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        
        <div className="modal-close">
            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm" data-bs-dismiss="modal" aria-label="Close">
            <i className="bi-x-lg"></i>
            </button>
        </div>
        
        
        <div className="modal-body p-sm-5">
            <div className="text-center">
                <div className="w-75 w-sm-50 mx-auto mb-4">
                    <img className="img-fluid" src="./assets/svg/illustrations/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="default" />
                    <img className="img-fluid" src="./assets/svg/illustrations-light/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>
                <h4 className="h1">Welcome to Front</h4>
                <p>We're happy to see you in our community.</p>
            </div>
        </div>
        
        
        <div className="modal-footer d-block text-center py-sm-5">
            <small className="text-cap text-muted">Trusted by the world's best teams</small>
            <div className="w-85 mx-auto">
                <div className="row justify-content-between">
                    <div className="col">
                        <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Image Description" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
</div>


<div className="modal fade" id="inviteUserModal" aria-labelledby="inviteUserModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title" id="inviteUserModalLabel">Invite users</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div className="modal-body">
            
            <div className="mb-4">
                <div className="input-group mb-2 mb-sm-0">
                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                    <div className="input-group-append input-group-append-last-sm-down-none">
                        
                        <div className="tom-select-custom tom-select-custom-end">
                            <select className="js-select form-select"  data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true,
                                "dropdownWidth": "11rem"
                                }'>
                                <option value="guest" selected>Guest</option>
                                <option value="can edit">Can edit</option>
                                <option value="can comment">Can comment</option>
                                <option value="full access">Full access</option>
                            </select>
                        </div>
                        
                        <a className="btn btn-primary d-none d-sm-inline-block" href="">Invite</a>
                    </div>
                </div>
                <a className="btn btn-primary w-100 d-sm-none" href="">Invite</a>
            </div>
            
            <div className="row">
                <h5 className="col modal-title">Invite users</h5>
                <div className="col-auto">
                    <a className="d-flex align-items-center small text-body" href="#">
                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/gmail-icon.svg" alt="Image Description" />
                        Import contacts
                    </a>
                </div>
            </div>
            <hr className="mt-2" />
            <ul className="list-unstyled list-py-2 mb-0">
                
                <li>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avatar avatar-sm avatar-circle">
                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <div className="row align-items-center">
                                <div className="col-sm">
                                    <h5 className="mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                    <span className="d-block small">amanda@site.com</span>
                                </div>
                                <div className="col-sm-auto">
                                    
                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0"  data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                            <option value="guest" selected>Guest</option>
                                            <option value="can edit">Can edit</option>
                                            <option value="can comment">Can comment</option>
                                            <option value="full access">Full access</option>
                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                        </select>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                
                
                <li>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avatar avatar-sm avatar-circle">
                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <div className="row align-items-center">
                                <div className="col-sm">
                                    <h5 className="mb-0">David Harrison</h5>
                                    <span className="d-block small">david@site.com</span>
                                </div>
                                <div className="col-sm-auto">
                                    
                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0"  data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                            <option value="guest" selected>Guest</option>
                                            <option value="can edit">Can edit</option>
                                            <option value="can comment">Can comment</option>
                                            <option value="full access">Full access</option>
                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                        </select>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                
                
                <li>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avatar avatar-sm avatar-circle">
                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <div className="row align-items-center">
                                <div className="col-sm">
                                    <h5 className="mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                    <span className="d-block small">Markvt@site.com</span>
                                </div>
                                <div className="col-sm-auto">
                                    
                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0"  data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                            <option value="guest" selected>Guest</option>
                                            <option value="can edit">Can edit</option>
                                            <option value="can comment">Can comment</option>
                                            <option value="full access">Full access</option>
                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                        </select>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                
                
                <li>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                <span className="avatar-initials">B</span>
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <div className="row align-items-center">
                                <div className="col-sm">
                                    <h5 className="mb-0">Bob Dean</h5>
                                    <span className="d-block small">bob@site.com</span>
                                </div>
                                <div className="col-sm-auto">
                                    
                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0"  data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                            <option value="guest" selected>Guest</option>
                                            <option value="can edit">Can edit</option>
                                            <option value="can comment">Can comment</option>
                                            <option value="full access">Full access</option>
                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                        </select>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
        
        
        <div className="modal-footer">
            <div className="row align-items-center flex-grow-1 mx-n2">
                <div className="col-sm-9 mb-2 mb-sm-0">
                    <input type="hidden" id="inviteUserPublicClipboard" value="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                    <p className="modal-footer-text">The public share <a href="#">link settings</a>
                    <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features."></i>
                </p>
            </div>
            <div className="col-sm-3 text-sm-end">
                <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options='{
                    "type": "tooltip",
                    "successText": "Copied!",
                    "contentTarget": "#inviteUserPublicClipboard",
                    "container": "#inviteUserModal"
                    }'>
                <i className="bi-link-45deg me-1"></i> Copy link</a>
            </div>
        </div>
    </div>
    
</div>
</div>
</div>

            </div>
    )
  }
}
export default Dashboard;
