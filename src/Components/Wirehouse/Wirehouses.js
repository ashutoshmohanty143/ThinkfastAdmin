import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import ApiServices from '../Common/ApiServices';
import { WithRouter } from '../Common/WithRouter';

class Wirehouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wirehouseLists: [],
      singleFetchRecord: {}
    }
  }

  componentDidMount() {
    const collectionName = "wirehouses";
    ApiServices.GetAllRecords(collectionName).then(response => {
      this.setState({ wirehouseLists: response.data.data });
    }).catch(error => {
      console.log("error", error)
    });
  }

  handleEditRecord = (event, id) => {
    event.preventDefault();
    this.props.navigate(`/updatewirehouse/${id}`);
  }

  handleDeleteRecord = (event, id) => {
    event.preventDefault();
    const collectionName = "wirehouses";

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this wirehouse",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        ApiServices.DeleteRecord(id, collectionName)
          .then((response) => {
            if (response.status === 200 && response.data.status === "success") {
              swal("This wirehouse has been deleted!", {
                icon: "success",
              }).then((value) => {
                if (value) {
                  const index = this.state.wirehouseLists
                    .map((object) => object._id)
                    .indexOf(id);
                  this.state.wirehouseLists.splice(index, 1);
                  this.setState({ wirehouseLists: this.state.wirehouseLists });
                }
              });
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    });
  }

  handleViewRecord = (event, id) => {
      event.preventDefault();
      const collectionName = "wirehouses";
      event.preventDefault();
      ApiServices.GetSingleRecordById(id, collectionName)
            .then((response) => {
                this.setState({ singleFetchRecord: response.data.data });
            })
            .catch((error) => {
                console.log("error", error);
            });
  }


  render() {

    const { wirehouseLists, singleFetchRecord } = this.state;
  
    return (
      <>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center mb-3">
              <div className="col-md mb-2 mb-md-0">
                <h1 className="page-header-title">Wirehouses </h1>
              </div>
              <div className="col-md-auto">
                <Link className="btn btn-primary" to="/addwirehouse">Add Wirehouse</Link>
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
                      SL No.#
                    </th>
                    <th>Location Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>
                  {wirehouseLists ? wirehouseLists.map((item, i) =>
                    <tr key={item._id}>
                      <td className="table-column-pe-0">
                        {i + 1}
                      </td>
                      <td >{item.locationName}</td>
                      <td>{item.address1 + ' , ' + item.address2}</td>
                      <td>{item.phone}</td>
                      <td>
                        <div className="btn-group" role="group">
                          <a data-bs-toggle="modal" data-bs-target="#whmodal"
                            className="btn btn-white btn-sm" href='#'
                            onClick={(event) => this.handleViewRecord(event, item._id)}
                          >
                            {" "}
                            <i className="bi-pencil-fill me-1">
                              {" "}
                              View
                            </i>{" "}
                          </a>

                              {/* <button
                                className="dropdown-item" data-bs-toggle="modal" data-bs-target="#whmodal"
                                onClick={(event) => this.handleViewRecord(event, item._id)}>
                                <i className="bi-pencil-fill dropdown-item-icon">
                                  {" "}
                                </i>{" "}
                                View
                              </button> */}

                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty"
                              id="productsEditDropdown1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></button>

                            <div
                              className="dropdown-menu dropdown-menu-end mt-1"
                              aria-labelledby="productsEditDropdown1"
                            >
                              {/* <button className="dropdown-item">
                              <Link
                                
                                to={`/updatewirehouse/${item._id}`}
                              >
                                {" "}
                                <i className="bi-pencil-fill me-1">
                                  {" "}
                                  Edit
                                </i>{" "}
                              </Link>
                              </button> */}
                                 

                              <button
                                className="dropdown-item"
                                onClick={(event) => this.handleEditRecord(event, item._id)}>
                                <i className="bi-pencil-fill dropdown-item-icon">
                                  {" "}
                                </i>{" "}
                                Edit
                              </button>

                              <button
                                className="dropdown-item"
               
                                onClick={(event) =>
                                  this.handleDeleteRecord(
                                    event,
                                    item._id
                                  )
                                }
                              >
                                <i className="bi-trash dropdown-item-icon">
                                  {" "}
                                </i>{" "}
                                Delete
                              </button>

                            </div>
                          </div>
                          
                        </div>
                      </td>

                    </tr>
                  ) : "Data Not Found"
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

        <div className="modal fade" id="whmodal" tabIndex="-1" aria-labelledby="whModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="whModalLabel">Wirehouse Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>Location Name</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["locationName"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>Country</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["countryRegion"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>Address</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["address1"] + ", " + singleFetchRecord["address2"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>City</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["city"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>State</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["state"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>Pincode</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["pincode"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>Phone</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["phone"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item w-50"><b>Map Slot</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["mapSlot"]}</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>                  
      </>
    )
  }
}

export default WithRouter(Wirehouses);