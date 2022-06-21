import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';

export default class AddZone extends Component {
  render() {
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
                                            <li className="breadcrumb-item">
                                                <Link className="breadcrumb-link" to="/zones">Zones</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Add Zone</li>
                                        </ol>
                                    </nav>

                                    <h1 className="page-header-title">Add Zones</h1>
                                </div>

                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-lg-12 mb-3 mb-lg-0'>
                                <div className="card mb-3 mb-lg-5">

                                    <div className="card-header">
                                        <h4 className="card-header-title">Zone Information</h4>
                                    </div>



                                    <div className="card-body">

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlhtmlFor="zonea" className="form-label">Zone A</label>
                                                <input type="text" className="form-control" name="zonea" id="zonea" placeholder="Zone A" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlhtmlFor="zonec" className="form-label">Zone C</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name="zonec" id="zonec" placeholder="Zone C" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlhtmlFor="zoneb" className="form-label">Zone B</label>
                                                <input type="text" className="form-control" name="zoneb" id="zoneb" placeholder="Zone B" />
                                            </div>
                                        </div>


                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlhtmlFor="zonec" className="form-label">Zone C</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name="zonec" id="zonec" placeholder="Zone C" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlhtmlFor="zoneb" className="form-label">Zone B</label>
                                                <input type="text" className="form-control" name="zoneb" id="zoneb" placeholder="Zone B" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className='text-end'><a className="btn btn-primary btn-sm" href="#.">Submit</a></div>
                                </div>

                                </div>
                            </div>
                            
                        </div>
                        

                    </div>


                </main>
                <Footer />
            </div> : window.location.href = "/"}
    </>
    )
  }
}
