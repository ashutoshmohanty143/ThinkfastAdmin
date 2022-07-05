import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';

import swal from 'sweetalert';
import { WithRouter } from '../Common/WithRouter';
import ApiServices from '../Common/ApiServices';

class AddSlot extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            fields: {},
            formErrors: {}
        }
    }

    handleFormFieldsChange = event => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });     
    }

    formValidate(){
        let Errors = {};
        let formIsValid = true;

        var slotName = document.getElementById('slotName');
        var slotNameValue = slotName.options[slotName.selectedIndex].value;
        if (slotNameValue == 0) {
            formIsValid = false;
            Errors["slotNameError"]  = 'Please Select Slot';
        } else {
            formIsValid = true;
            Errors["slotNameError"]  = '';
        }
        
        var slotTime = document.getElementById('slotTime');
        var slotTimeValue = slotTime.options[slotTime.selectedIndex].value;
        if (slotTimeValue == 0) {
            formIsValid = false;
            Errors["slotTimeError"]  = 'Please Select Slot Time';
        } else {
            formIsValid = true;
            Errors["slotTimeError"]  = '';
        }

        this.setState({ formErrors : Errors });
        return formIsValid;
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.formValidate()) {   
            let { slotName, slotTime } = this.state.fields;
            const formData = {
                "collection" : "slots",
                "data": {
                        "slotName": slotName,
                        "slotTime": slotTime,
                },
                "meta" : {
                    "duplicate" : [],
                    "multiInsert": false
                }
            };   
            ApiServices.AddRecord(formData).then(response => {    
                if(response.status == 200 && response.data.status){
                    swal("Thank you!", "Slot added successfully!!!", "success").then((value) => {
                        if(value){
                            this.props.navigate('/slots');
                        }
                    });
                }           
            }).catch(error => {
                console.log(error);
            });; 
          } else {
            console.log("Form Validation Error");
          } 
    }

  render() {
    const { slotNameError, slotTimeError }  = this.state.formErrors;
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
                                        <Link className="breadcrumb-link" to="/slots">Slots</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Slot</li>
                                </ol>
                            </nav>

                            <h1 className="page-header-title">Add Slots</h1>
                        </div>
                        <div className="col-md-auto">
                            <Link className="btn btn-primary" to="/slots">Back</Link>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-12 mb-3 mb-lg-0'>
                        <div className="card mb-3 mb-lg-5">

                            <div className="card-header">
                                <h4 className="card-header-title">Slot Information</h4>
                            </div>



                            <div className="card-body">
                                <form method='post' onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlFor="slotName" className="form-label">Select Slot</label>
                                                <div className="tom-select-custom">
                                                    <select className="js-select form-select tomselected" 
                                                    name="slotName" id="slotName" onChange={this.handleFormFieldsChange}>
                                                        <option value="0">Select slot</option>
                                                        <option value="Slot 1">Slot 1</option>
                                                        <option value="Slot 2">Slot 2</option>
                                                        <option value="Slot 3">Slot 3</option>
                                                        <option value="Slot 4">Slot 4</option>
                                                        <option value="Slot 5">Slot 5</option>
                                                    </select>
                                                </div>
                                                {slotNameError && <span className='errorMsg'>{slotNameError}</span>}
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label htmlFor="slotTime" className="form-label">Select Slot Time</label>

                                                <div className="tom-select-custom">
                                                    <select className="js-select form-select tomselected" name="slotTime" 
                                                    id="slotTime" onChange={this.handleFormFieldsChange}>
                                                        <option value="0">Select Slot Time</option>
                                                        <option value="9 AM - 11 AM">9 AM - 11 AM</option>
                                                        <option value="11 AM - 1 PM">11 AM - 1 PM</option>
                                                        <option value="1 PM - 3 PM">1 PM - 3 PM</option>
                                                        <option value="3 PM - 5 PM">3 PM - 5 PM</option>
                                                        <option value="5 PM - 7 PM">5 PM - 7 PM</option>
                                                    </select>
                                                </div>
                                                {slotTimeError && <span className='errorMsg'>{slotTimeError}</span>}
                                            </div>
                                        </div>

                                    </div>
                                    <div className='text-end'><button className="btn btn-primary btn-sm">Add</button></div>
                                </form>
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

export default WithRouter(AddSlot);