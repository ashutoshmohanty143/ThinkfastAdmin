import React from 'react'

import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';

export default function AddUser() {
    return (
        <>
            {sessionStorage.getItem('userToken') ?
                <div>
                    <Header />
                    <SideNav />
                    <main id="content" role="main" className="main">

                        <div className="content container-fluid">
                            <div className="page-header">
                                <div className="row align-items-center">
                                    <div className="col-sm mb-2 mb-sm-0">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-no-gutter">
                                                <li className="breadcrumb-item"><a className="breadcrumb-link" href="./ecommerce-products.html">Users</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add User</li>
                                            </ol>
                                        </nav>

                                        <h1 className="page-header-title">Add Users</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mb-3 mb-lg-0'>
                                    <div className="card mb-3 mb-lg-5">

                                        <div className="card-header">
                                            <h4 className="card-header-title">Product information</h4>
                                        </div>



                                        <div className="card-body">

                                            <div className="mb-4">
                                                <label for="productNameLabel" className="form-label">Name </label>

                                                <input type="text" className="form-control" name="productName" id="productNameLabel" placeholder="Name" />
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-6">

                                                    <div className="mb-4">
                                                        <label for="email" className="form-label">Email ID</label>

                                                        <input type="text" className="form-control" name="email" id="email" placeholder="Email ID" />
                                                    </div>

                                                </div>


                                                <div className="col-sm-6">

                                                    <div className="mb-4">
                                                        <label for="phone" className="form-label">Phone No.</label>

                                                        <div className="input-group">
                                                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone No." />


                                                        </div>


                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </main>
                    <Footer />
                </div> : window.location.href= "/" }
        </>
    )
}
