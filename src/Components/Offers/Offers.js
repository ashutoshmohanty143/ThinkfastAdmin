import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';

export default class Offers extends Component {
  constructor(){
    super();
    this.state = {
        offerLists: []
    }
  }
  
  handleDeleteRecord = () =>{
    alert("Record Deleted Successfully");
  }

  fetchOffers(){
    const apiUrl = "http://localhost:5000/api/curd/fetchDoc/?collection=offers";
    const token = sessionStorage.getItem("userToken");
    axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }).then(response => {
      //console.log('response', response.data.data);
      this.setState({ offerLists : response.data.data }); 
      // console.log('response1', response.data.data.accessToken);
      //sessionStorage.setItem("userToken", response.data.data.accessToken);
      //sessionStorage.setItem("userData", JSON.stringify(response.data.data));

      

      //user details & jwt token needs to be set in session storage

    }).catch(error => {
      console.log("error", error)
      //this.setState({start:false})
    }) 
  }

  componentDidMount(){
    this.fetchOffers();
  }
  render() {
    const { offerLists } = this.state;
    return (
        <>
        {sessionStorage.getItem('userToken') ?
          <div>
            <Header />
            <SideNav />
            <main id="content" role="main" className="main">
              <div class="content container-fluid">
                <div className="page-header">
                  <div className="row align-items-center mb-3">
                    <div className="col-md mb-2 mb-md-0">
                      <h1 className="page-header-title">Offers </h1>
                    </div>
                    <div className="col-md-auto">
                      <Link className="btn btn-primary" to="/addoffer">Add Offers</Link>
                    </div>
  
                  </div>
  
  
  
                  <div className="js-nav-scroller hs-nav-scroller-horizontal">
                    <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
                      <a className="hs-nav-scroller-arrow-link" href="">
                        <i className="bi-chevron-left"></i>
                      </a>
                    </span>
  
                    <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
                      <a className="hs-nav-scroller-arrow-link" href="">
                        <i className="bi-chevron-right"></i>
                      </a>
                    </span>
  
                  </div>
  
                </div>

                <div className="card">
  
                  <div className="card-header card-header-content-sm-between">
                    <div className="mb-2 mb-sm-0">
                      <form>
  
                        <div className="input-group input-group-merge input-group-flush">
                          <div className="input-group-prepend input-group-text">
                            <i className="bi-search"></i>
                          </div>
                          <input id="datatableSearch" type="search" className="form-control" placeholder="Search orders" aria-label="Search orders" />
                        </div>
  
                      </form>
                    </div>
  
                    <div className="d-grid d-sm-flex justify-content-sm-end align-items-sm-center gap-2">
  
                      <div id="datatableCounterInfo" style={{ display: 'none' }}>
                        <div className="d-flex align-items-center">
                          <span className="fs-5 me-3">
                            <span id="datatableCounter">0</span>
                            Selected
                          </span>
                          <a className="btn btn-outline-danger btn-sm" href="">
                            <i className="bi-trash"></i> Delete
                          </a>
                        </div>
                      </div>
  
  
                      <div className="dropdown">
                        <button type="button" className="btn btn-white w-100" id="showHideDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                          <i className="bi-table me-1"></i> Columns <span className="badge bg-soft-dark text-dark rounded-circle ms-1">5</span>
                        </button>
  
                        <div className="dropdown-menu dropdown-menu-end dropdown-card" aria-labelledby="showHideDropdown" style={{ width: 15 + 'rem' }}>
                          <div className="card card-sm">
                            <div className="card-body">
                              <div className="d-grid gap-3">
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_name">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Name</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_name" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_email">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">E-mail</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_email" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_phone">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Phone</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_phone" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_country">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Country</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_country" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_account_status">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Account status</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_account_status" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_orders">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Orders</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_orders" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_total_spent">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Total spent</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_total_spent" />
                                  </span>
                                </label>
  
  
  
                                <label className="row form-check form-switch" htmlFor="toggleColumn_last_activity">
                                  <span className="col-8 col-sm-9 ms-0">
                                    <span className="me-2">Last activity</span>
                                  </span>
                                  <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="toggleColumn_last_activity" />
                                  </span>
                                </label>
  
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  
                    </div>
                  </div>
  
  
  
                  <div className="table-responsive datatable-custom">
                  <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options='{
                "columnDefs": [{
                    "targets": [0],
                    "orderable": false
                  }],
                "order": [],
                "info": {
                  "totalQty": "#datatableWithPaginationInfoTotalQty"
                },
                "search": "#datatableSearch",
                "entries": "#datatableEntries",
                "pageLength": 15,
                "isResponsive": false,
                "isShowPaging": false,
                "pagination": "datatablePagination"
              }'>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="table-column-pe-0">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="datatableCheckAll" />
                            <label className="form-check-label" htmlFor="datatableCheckAll"></label>
                          </div>
                        </th>
                        <th className="table-column-ps-0">Offer Title</th>
                        <th>Offer Link</th>
                        <th>Offer Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>                   
                      { offerLists ?
                            offerLists.map((item,i)=>    
                            <tr key={item._id}>
                              <td className="table-column-pe-0">
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input" id="usersDataCheck3" />
                                  <label className="form-check-label" htmlFor="usersDataCheck3"></label>
                                </div>
                              </td>
                              <td className="table-column-ps-0">{item.title} </td>
                              <td>{item.link}</td>
                              <td>{item.description}</td>
                              <td>
                                <a href='javascript:void(0)'><i className="bi bi-pencil-square text-success"> Edit</i></a>
                                <span> / </span>
                                <a href='javascript:void(0)' onClick={this.handleDeleteRecord}><i className="bi bi-trash text-danger"> Delete</i></a>
                              </td>

                            </tr>
                     ): "Data Not Found"
                    }
                    </tbody>
                  </table>
                </div>
  
  
  
                  <div className="card-footer">
                    <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                      <div className="col-sm mb-2 mb-sm-0">
                        <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                          <span className="me-2">Showing:</span>
  
  
                          <div className="tom-select-custom">
                            <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options='{
                            "searchInDropdown": false,
                            "hideSearch": true
                          }'>
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="20">20</option>
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
            </main>
            <Footer />
          </div>
          : window.location.href= "/"}
      </>
    )
  }
}
