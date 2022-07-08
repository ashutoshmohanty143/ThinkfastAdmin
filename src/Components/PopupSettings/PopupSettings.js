import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import ApiServices from '../Common/ApiServices';
import CommonMethods from '../Common/CommonMethods';
import { WithRouter } from '../Common/WithRouter';

class PopupSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupSettingsLists: [],
      isModoalShow:false,
      fields: {},
      formErrors: {}
    }
  }

  componentDidMount() {
    const collectionName = "popupsettings";
    ApiServices.GetAllRecords(collectionName).then(response => {
      this.setState({ popupSettingsLists: response.data.data });
    }).catch(error => {
      console.log("error", error)
    });
  }

  handleFormFieldsChange = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
}

  handleEditRecord = (event, id) => {
    const collectionName = "popupsettings";
      event.preventDefault();
      ApiServices.GetSingleRecordById(id, collectionName)
      .then((response) => {
          this.setState({ fields: response.data.data });
      })
      .catch((error) => {
          console.log("error", error);
      });
  }

  formValidate(){
    let fields = this.state.fields;
    let erorrs = {};
    let formIsValid = true;

    if (!fields['popupTime']) {
        formIsValid = false;
        erorrs["popupTimeErr"] = 'Popup Time Cannot be empty';
    }   
    
    if (!fields['popupButtonColor']) {
        formIsValid = false;
        erorrs["popupButtonColorErr"] = 'Please Choose Popup Button Color';
    }
    
    this.setState({ formErrors : erorrs });
    return formIsValid; 
}

popupTimeInputHandler = e => {
  if (!CommonMethods.numberValidation(e)) {
      this.state.formErrors["popupTimeErr"] = "Please Give Only Numbers";
  } else {
      this.state.formErrors["popupTimeErr"] = "";
  }
}


handleUpdate = (event, id) => {
  event.preventDefault();
  if (this.formValidate()) {
    let { popupTime, popupButtonColor } = this.state.fields; 
      const formData = {
          "collection": "popupsettings",
          "id": id,
          "data": {
              "popupTime": popupTime,
              "popupButtonColor": popupButtonColor
          },
          "meta": {
              "duplicate": []
          }
      };

      ApiServices.UpdateRecord(formData).then((response) => {
          if (response.status === 200 && response.data.status === "success") {
              swal({
                  title: "Thank you!",
                  text: `Popup Settings Updated successfully!!!`,
                  icon: "success",
              }).then((value) => {
                if (value) {
                  const index = this.state.popupSettingsLists
                    .map((object) => object._id)
                    .indexOf(id);
                  this.state.popupSettingsLists[index] = response.data.data;
                  this.setState({ popupSettingsLists: this.state.popupSettingsLists });
                }
              });
          }
      })
          .catch((error) => {
              console.log("error", error);
          });
  } else {
      console.log("Form Validation Error");
  }
}


  handleStatusChange = (e, id, status) => {
    e.preventDefault();
    const formData = {
      collection: "popupsettings",
      id: id,
      data: {
        isEnabled: status ? false : true,
      },
      meta: {
        duplicate: [],
        multiInsert: false,
      },
    };
    ApiServices.UpdateRecord(formData)
      .then((response) => {
        if (response.status == 200 && response.data.status == "success") {
          swal({
            title: "Thank you!",
            text: `Popup Settings ${status ? "Disabled" : "Enabled"} successfully!!!`,
            type: "success",
          }).then((value) => {
            if (value) {
              const index = this.state.popupSettingsLists
                .map((object) => object._id)
                .indexOf(id);
              this.state.popupSettingsLists[index] = response.data.data;
              this.setState({ popupSettingsLists: this.state.popupSettingsLists });
            }
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  handleDeleteRecord = (event, id) => {
    event.preventDefault();
    const collectionName = "popupsettings";

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Popup Settings",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        ApiServices.DeleteRecord(id, collectionName)
          .then((response) => {
            if (response.status === 200 && response.data.status === "success") {
              swal("This Popup Settings has been deleted!", {
                icon: "success",
              }).then((value) => {
                if (value) {
                  const index = this.state.popupSettingsLists
                    .map((object) => object._id)
                    .indexOf(id);
                  this.state.popupSettingsLists.splice(index, 1);
                  this.setState({ popupSettingsLists: this.state.popupSettingsLists });
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

  render() {
    const { popupSettingsLists } = this.state;
    const { popupTimeErr, popupButtonColorErr }  = this.state.formErrors;
    const { _id, popupTime, popupButtonColor } = this.state.fields;
    return (
      <>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center mb-3">
            <div className="col-md mb-2 mb-md-0">
              <h1 className="page-header-title">Popup Settings </h1>
            </div>
            <div className="col-md-auto">
              <Link className="btn btn-primary" to="/addpopupsettings">Add Popup Settings</Link>
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
                  <th>Popup Status</th>
                  <th>Popup Time (In ms)</th>
                  <th>Popup Button Color</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>
                {popupSettingsLists ? popupSettingsLists.map((item, i) =>
                  <tr key={item._id}>
                    <td className="table-column-pe-0">
                      {i + 1}
                    </td>
                    <td >{ item.isEnabled ? "Enabled" : "Disabled" }</td>
                    <td>{item.popupTime}</td>
                    <td><span style={{ borderRadius:50+'%', padding:10+'px '+ 18+'px', backgroundColor: item.popupButtonColor}}></span></td>
                    <td>
                      <div className="btn-group" role="group">
            
                            <button data-bs-toggle="modal" data-bs-target="#whmodal"
                              className="dropdown-item"
                              onClick={(event) => this.handleEditRecord(event, item._id)}>
                              <i className="bi-pencil-fill dropdown-item-icon">
                                {" "}
                              </i>{" "}
                              Edit
                            </button>

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

                            <button
                                  className="dropdown-item"
                                  href=""
                                  onClick={
                                    (e) => this.handleStatusChange(
                                      e,
                                      item._id,
                                      item.isEnabled
                                    )
                                  }
                                >
                                  <i className="bi-trash dropdown-item-icon">
                                    {" "}
                                  </i>{" "}
                                  { item.isEnabled
                                    ? "Disable"
                                    : "Enable" }
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
                <h5 className="modal-title" id="whModalLabel">Popup Settings Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                        
                  <div className='col-md-6 mb-4 ms-2'>
                    <label htmlFor="popupTime" className="form-label"> Time To Popup </label>
                    <input type="text" className='form-control' name="popupTime" id='popupTime'
                      onInput={this.popupTimeInputHandler} onChange={this.handleFormFieldsChange}
                      value={popupTime} />
                    {popupTimeErr && <span className='errorMsg'>{popupTimeErr}</span>}
                  </div>

                  <div className='col-md-6 mb-4 ms-2'>
                    <label htmlFor="popupButtonColor" className="form-label"> Popup Button Color </label>
                    <input type="color" className='form-control' style={{ height: 50 + 'px' }} name="popupButtonColor"
                      id='popupButtonColor' onChange={this.handleFormFieldsChange}
                      value={popupButtonColor} />
                    {popupButtonColorErr && <span className='errorMsg'>{popupButtonColorErr}</span>}
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => this.handleUpdate(e, _id)}>Update</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>                  
    </>
    )
  }
}

export default WithRouter(PopupSettings);