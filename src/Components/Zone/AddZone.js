import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import swal from 'sweetalert';
import { WithRouter } from '../Common/WithRouter';
import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';

import CommonMethods from '../Common/CommonMethods';
import ApiServices from '../Common/ApiServices';


class AddZone extends Component {
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

        if (event.target.value == "Free") {
            fields['deliveryCharge'] = "";
        } else if(event.target.value == "Paid"){
            fields['deliveryCharge'] = "";
        }

        this.setState({ fields });  
        //console.log(fields);
    }

    formValidate(){
        let fields = this.state.fields;
        let Errors = {};
        let formIsValid = true;

        var selectZone = document.getElementById('selectZone');
        var selectZoneValue = selectZone.options[selectZone.selectedIndex].value;

        if (selectZoneValue == 0) {
            formIsValid = false;
            Errors["zoneError"]  = 'Please Select Zone';
        } else {
            formIsValid = true;
            Errors["zoneError"]  = '';
        }
    
        if (!fields["shippingTime"]) {
            formIsValid = false;
            Errors["shippingTimeError"]  = 'Shipping Time cannot be empty';
        } else {
            formIsValid = true;
            Errors["shippingTimeError"]  = '';
        }

        // if (!fields["zoneDescription"]) {
        //     formIsValid = false;
        //     Errors["zoneDescriptionError"]  = 'Description cannot be empty';
        // } else {
        //     formIsValid = true;
        //     Errors["zoneDescriptionError"]  = '';
        // }   
        
        var selectPaymentStaus = document.getElementById('paymentStaus');
        var selectPaymentStausValue = selectPaymentStaus.options[selectPaymentStaus.selectedIndex].value;
        //console.log(selectPaymentStausValue);

        if (selectPaymentStausValue == 0) {
            formIsValid = false;
            Errors["paymentStausError"]  = 'Please Select Payment Status';
        }

        if (!fields['deliveryCharge']) {
            formIsValid = false;
            Errors["deliveryChargeError"]  = 'Delivery Charge cannot be empty';
        }

        this.setState({ formErrors : Errors });
        return formIsValid;
    }

    deliveryChargeNumberValidate = event => {
        CommonMethods.numberValidation(event);
        
    }

    handleSubmit = event =>{
        event.preventDefault();
        if(this.formValidate()) {   
            
            let {selectZone, shippingTime, zoneDescription, paymentStaus, deliveryCharge} = this.state.fields;
            
            const formData = {
                "collection" : "zones",
                "data": {
                        "zoneName": selectZone,
                        "shippingTime": shippingTime,
                        // "zoneDescription": zoneDescription,
                        "paymentStaus": paymentStaus,
                        "deliveryCharge": deliveryCharge
                },
                "meta" : {
                    "duplicate" : ['selectZone'],
                    "multiInsert": false
                }
            };   

            ApiServices.AddRecord(formData).then(response => {    
                //console.log(response.data.data);            
                if(response.status == 200 && response.data.status){
                    swal("Thank you!", "Zone added successfully!!!", "success").then((value) => {
                        if(value){
                            this.props.navigate('/zones');
                        }
                    });
                    
                }           
            }).catch(error => {
                //return error;
                console.log(error);
            });; 

            

          } else {
            console.log("Form Validation Error");
          }        
    }

    onConfirm = () =>{
        window.location.href = "/zones"
    }


    render() {
        const { zoneError, shippingTimeError, zoneDescriptionError, paymentStausError,deliveryChargeError }  = this.state.formErrors;
        const { paymentStaus } = this.state.fields;
        //var test = "d-none";
        if(paymentStaus == undefined || paymentStaus == 0) {
            var test = "d-none";
        } else{
            var test = "";
        }
        //console.log(paymentStaus);
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
                                <div class="col-md-auto">
                                    <Link class="btn btn-primary" to="/zones">Back</Link>
                                </div>
                            </div>

                        </div>

                            <div className='row'>
                                <div className='col-lg-12 mb-3 mb-lg-0'>
                                    <div className="card mb-3 mb-lg-5">

                                        <div className="card-header">
                                            <h4 className="card-header-title">Enter Zone Information</h4>
                                        </div>
                                        
                                        <div className="card-body">
                                            <form method='post' onSubmit={this.handleSubmit}>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="selectZone" className="form-label">Select Zone</label>
                
                                                            <div className="tom-select-custom">
                                                                <select className="js-select form-select tomselected" name="selectZone" id="selectZone" onChange={this.handleFormFieldsChange}>
                                                                    <option value="0">Select your zone</option>
                                                                    <option value="Zone A">Zone A</option>
                                                                    <option value="Zone B">Zone B</option>
                                                                    <option value="Zone C">Zone C</option>
                                                                    <option value="Zone D">Zone D</option>
                                                                    <option value="Zone E">Zone E</option>
                                                                </select>
                                                            </div>
                                                            {zoneError && <span className='errorMsg'>{zoneError}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="shippingTime" className="form-label">Shipping Time</label>

                                                            <input type="text" className="form-control" name="shippingTime" id="shippingTime" placeholder="Shipping Time" onChange={this.handleFormFieldsChange} />

                                                            {shippingTimeError && <span className='errorMsg'>{shippingTimeError}</span>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    {/* <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="zoneDescription" className="form-label">Zone Description</label>
                                                            <input type="text" className="form-control" name="zoneDescription" id="zoneDescription" placeholder="Zone Description" onChange={this.handleFormFieldsChange} />
                                                            {zoneDescriptionError && <span className='errorMsg'>{zoneDescriptionError}</span>}
                                                        </div>
                                                    </div> */}


                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="paymentStaus" className="form-label">Select Payment Mode</label>
                
                                                            <div className="tom-select-custom">
                                                                <select className="js-select form-select tomselected" name="paymentStaus" id="paymentStaus" onChange={this.handleFormFieldsChange}>
                                                                    <option value="0">Select your payment mode</option>
                                                                    <option value="Free">Free</option>
                                                                    <option value="Paid">Paid</option>
                                                                </select>
                                                            </div>
                                                            {paymentStausError && <span className='errorMsg'>{paymentStausError}</span>}

                                                        </div>
                                                    </div>
                                                    
                                                    <div className={`col-sm-6 ${test}`}>
                                                    {/* ${paymentStaus==0 || undefined ? "d-none" : '' }`} */}
                                                        <div className="mb-4">
                                                            <label htmlFor="deliveryCharge" className="form-label">Delivery Charge</label>
                                                            <input type="text" className="form-control" name="deliveryCharge" id="deliveryCharge" placeholder="Delivery Charge" onChange={this.handleFormFieldsChange} onInput={ this.deliveryChargeNumberValidate} />
                                                            {deliveryChargeError && <span className='errorMsg'>{deliveryChargeError}</span>}
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

export default WithRouter(AddZone);