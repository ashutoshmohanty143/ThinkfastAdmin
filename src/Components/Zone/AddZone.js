import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { WithRouter } from '../Common/WithRouter';
import CommonMethods from '../Common/CommonMethods';
import ApiServices from '../Common/ApiServices';


class AddZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            formErrors: {},
            prev: false
        }
    }

    handleFormFieldsChange = event => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });

        var selectPaymentStaus = document.getElementById('paymentStaus');
        var selectPaymentStausValue = selectPaymentStaus.options[selectPaymentStaus.selectedIndex].value;
        if (selectPaymentStausValue == "Free") {
            document.getElementById('strikeDC').style.textDecoration = "line-through";
        } else {
            document.getElementById('strikeDC').style.textDecoration = "none";
        }
    }

    formValidate() {
        let fields = this.state.fields;
        let Errors = {};
        let formIsValid = true;

        var zoneName = document.getElementById('zoneName');
        var zoneNameValue = zoneName.options[zoneName.selectedIndex].value;
        if (zoneNameValue == 0) {
            formIsValid = false;
            Errors["zoneNameError"] = 'Please Select Zone';
        } else {
            formIsValid = true;
            Errors["zoneNameError"] = '';
        }

        if (!fields["shippingTime"]) {
            formIsValid = false;
            Errors["shippingTimeError"] = 'Shipping Time cannot be empty';
        } else {
            formIsValid = true;
            Errors["shippingTimeError"] = '';
        }

        var selectPaymentStaus = document.getElementById('paymentStaus');
        var selectPaymentStausValue = selectPaymentStaus.options[selectPaymentStaus.selectedIndex].value;
        if (selectPaymentStausValue == 0) {
            formIsValid = false;
            Errors["paymentStausError"] = 'Please Select Payment Status';
        } else {
            formIsValid = true;
            Errors["paymentStausError"] = '';
        }


        if (!fields['deliveryCharge']) {
            formIsValid = false;
            Errors["deliveryChargeError"] = 'Delivery Charge cannot be empty';
        } else {
            formIsValid = true;
            Errors["deliveryChargeError"] = '';
        }

        this.setState({ formErrors: Errors });
        return formIsValid;
    }

    deliveryChargeNumberValidate = (event) => {
        CommonMethods.numberValidation(event);
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.formValidate()) {
            let { zoneName, shippingTime, paymentStaus, deliveryCharge } = this.state.fields;
            const formData = {
                "collection": "zones",
                "data": {
                    "zoneName": zoneName,
                    "shippingTime": shippingTime,
                    "paymentStaus": paymentStaus,
                    "deliveryCharge": deliveryCharge
                },
                "meta": {
                    "duplicate": ['selectZone'],
                    "multiInsert": false
                }
            };
            ApiServices.AddRecord(formData).then(response => {
                if (response.status == 200 && response.data.status) {
                    swal("Thank you!", "Zone added successfully!!!", "success").then((value) => {
                        if (value) {
                            this.props.navigate('/zones');
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

    showPrev = e => {
        e.preventDefault();
        this.setState({ prev: true });
        var { paymentStaus } = this.state.fields;
        if (paymentStaus == 'Free') {
            document.getElementById('strikeDC').style.textDecoration = "line-through";
        }
        if (paymentStaus == 'Paid') {
            document.getElementById('strikeDC').style.textDecoration = "none";
        }
    }

    render() {
        const { zoneNameError, shippingTimeError, paymentStausError, deliveryChargeError } = this.state.formErrors;
        var { paymentStaus, deliveryCharge } = this.state.fields;
        if (paymentStaus == undefined || paymentStaus == 0) {
            var test = "d-none";
        } else {
            var test = "";
        }

        return (
            <>
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
                            <div className="col-md-auto">
                                <Link className="btn btn-primary" to="/zones">Back</Link>
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
                                                    <label htmlFor="zoneName" className="form-label">Select Zone</label>

                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select tomselected" name="zoneName" id="zoneName" onChange={this.handleFormFieldsChange} >
                                                            <option value="0">Select your zone</option>
                                                            <option value="Zone A">Zone A ( Within the city )</option>
                                                            <option value="Zone B">Zone B ( Within the state )</option>
                                                            <option value="Zone C">Zone C ( Metro 2 Metro )</option>
                                                            <option value="Zone D">Zone D ( Rest of India )</option>
                                                            <option value="Zone E">Zone E ( J&K Northeast )</option>
                                                        </select>
                                                    </div>
                                                    {zoneNameError && <span className='errorMsg'>{zoneNameError}</span>}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="shippingTime" className="form-label">Shipping Time (In hrs)</label>

                                                    {/* <input type="text" className="form-control" name="shippingTime" id="shippingTime" 
                                                            placeholder="Shipping Time" onChange={this.handleFormFieldsChange} /> */}
                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select tomselected" name="shippingTime" id="shippingTime"
                                                            onChange={this.handleFormFieldsChange} >
                                                            <option value="0">Select shipping time</option>
                                                            <option value="0-24">0-24</option>
                                                            <option value="24-48">24-48</option>
                                                            <option value="48-72">48-72</option>
                                                            <option value="72-120">72-120</option>
                                                            <option value="120-148">120-148</option>
                                                        </select>
                                                    </div>
                                                    {shippingTimeError && <span className='errorMsg'>{shippingTimeError}</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

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
                                                <div className="mb-2">
                                                    <label htmlFor="deliveryCharge" className="form-label">Delivery Charge</label>
                                                    <input type="text" className="form-control" name="deliveryCharge"
                                                        id="deliveryCharge" placeholder="Delivery Charge"
                                                        onChange={this.handleFormFieldsChange} onInput={this.deliveryChargeNumberValidate} />
                                                    {deliveryChargeError && <span className='errorMsg'>{deliveryChargeError}</span>}
                                                </div>
                                                <a href='' className='float-start mb-2' onClick={this.showPrev}>Preview</a>
                                                <span className={`float-end ${this.state.prev ? "" : "d-none"}`}><b>{paymentStaus + ' '}</b><span id='strikeDC'>{`Rs ${deliveryCharge}`}</span></span>
                                            </div>
                                        </div>
                                        <div className='text-end mt-4'><button className="btn btn-primary btn-sm">Add</button></div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default WithRouter(AddZone);