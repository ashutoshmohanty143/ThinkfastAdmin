import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiServices from "../Common/ApiServices";
import { WithRouter } from '../Common/WithRouter';

class ViewWirehouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
    }

    componentDidMount() {
        const collectionName = "wirehouses";
        const path = window.location.pathname;
        const id = path.split('/')[2];
        ApiServices.GetSingleRecordById(id, collectionName)
            .then((response) => {
                this.setState({ fields: response.data.data });
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    render() {
        let { locationName, countryRegion, address1, address2, city, state, pincode, phone, mapSlot } = this.state.fields;
        let multiOptionSlots = this.state.multiOptionSlots;
        const { locationNameError, countryRegionError, address1Error,
            address2Error, cityError, stateError, pincodeError, phoneError, mapSlotError } = this.state.formErrors;
        return (
            <>
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-no-gutter">
                                        <li className="breadcrumb-item">
                                            <Link className="breadcrumb-link" to="/wirehouses">Wirehouse</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Update Wirehouse</li>
                                    </ol>
                                </nav>

                                <h1 className="page-header-title">Update Wirehouse</h1>
                            </div>
                            <div className="col-md-auto">
                                <Link className="btn btn-primary" to="/wirehouses">Back</Link>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-lg-12 mb-3 mb-lg-0'>
                            <div className="card mb-3 mb-lg-5">

                                <div className="card-header">
                                    <h4 className="card-header-title">Enter Wirehouse Information</h4>
                                </div>

                                <div className="card-body">
                                    <form method='post' onSubmit={this.handleSubmit}>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="locationName" className="form-label">Location / Wirehouse Name</label>
                                                    <input type="text" className="form-control" name="locationName"
                                                        id="locationName" placeholder="Location Name"
                                                        onChange={this.handleFormFieldsChange} value={locationName} />
                                                    {locationNameError && <span className='errorMsg'>{locationNameError}</span>}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="phone" className="form-label">Phone</label>
                                                    <input type="text" className="form-control" name="phone" id="phone" maxLength={12}
                                                        placeholder="Phone" onChange={this.handleFormFieldsChange}
                                                        onInput={this.phoneInputHandler} value={phone} />
                                                    {phoneError && <span className='errorMsg'>{phoneError}</span>}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="address1" className="form-label">Address 1</label>
                                                    <textarea rows={3} className="form-control" name="address1" id="address1"
                                                        placeholder="Address 1" onChange={this.handleFormFieldsChange}
                                                        value={address1} ></textarea>
                                                    {address1Error && <span className='errorMsg'>{address1Error}</span>}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="address2" className="form-label">Address 2</label>
                                                    <textarea rows={3} className="form-control" name="address2" id="address2"
                                                        placeholder="Address 2" onChange={this.handleFormFieldsChange}
                                                        value={address2} ></textarea>
                                                    {address2Error && <span className='errorMsg'>{address2Error}</span>}
                                                </div>
                                            </div>


                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="countryRegion" className="form-label">Country/region</label>
                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select tomselected" name="countryRegion"
                                                            id="countryRegion" onChange={this.handleFormFieldsChange}
                                                            value={countryRegion} >
                                                            <option value='0'>Select Country</option>
                                                            <option value='India'>India</option>
                                                        </select>
                                                    </div>
                                                    {countryRegionError && <span className='errorMsg'>{countryRegionError}</span>}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="state" className="form-label">Select State</label>
                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select tomselected" name="state"
                                                            id="state" onChange={this.handleFormFieldsChange} value={state} >
                                                            <option value='0'>Select State</option>
                                                            <option value='Andaman and Nicobar Islands'>Andaman and Nicobar Islands</option>
                                                            <option value='Andhra Pradesh'>Andhra Pradesh</option>
                                                            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                                                            <option value='Assam'>Assam</option>
                                                            <option value='Bihar'>Bihar</option>
                                                            <option value='Chandigarh'>Chandigarh</option>
                                                            <option value='Chhattisgarh'>Chhattisgarh</option>
                                                            <option value='Dadra and Nagar Haveli'>Dadra and Nagar Haveli</option>
                                                            <option value='Daman and Diu'>Daman and Diu</option>
                                                            <option value='Delhi'>Delhi</option>
                                                            <option value='Goa'>Goa</option>
                                                            <option value='Gujarat'>Gujarat</option>
                                                            <option value='Haryana'>Haryana</option>
                                                            <option value='Himachal Pradesh'>Himachal Pradesh</option>
                                                            <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
                                                            <option value='Jharkhand'>Jharkhand</option>
                                                            <option value='Karnataka'>Karnataka</option>
                                                            <option value='Kerala'>Kerala</option>
                                                            <option value='Lakshadweep'>Lakshadweep</option>
                                                            <option value='Madhya Pradesh'>Madhya Pradesh</option>
                                                            <option value='Maharashtra'>Maharashtra</option>
                                                            <option value='Manipur'>Manipur</option>
                                                            <option value='Meghalaya'>Meghalaya</option>
                                                            <option value='Mizoram'>Mizoram</option>
                                                            <option value='Nagaland'>Nagaland</option>
                                                            <option value='Odisha'>Odisha</option>
                                                            <option value='Puducherry'>Puducherry</option>
                                                            <option value='Punjab'>Punjab</option>
                                                            <option value='Rajasthan'>Rajasthan</option>
                                                            <option value='Sikkim'>Sikkim</option>
                                                            <option value='Tamil Nadu'>Tamil Nadu</option>
                                                            <option value='Telengana'>Telengana</option>
                                                            <option value='Tripura'>Tripura</option>
                                                            <option value='Uttar Pradesh'>Uttar Pradesh</option>
                                                            <option value='Uttarakhand'>Uttarakhand</option>
                                                            <option value='West Bengal'>West Bengal</option>
                                                        </select>
                                                    </div>
                                                    {stateError && <span className='errorMsg'>{stateError}</span>}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="city" className="form-label">City</label>
                                                    <input type="text" className="form-control" name="city" id="city"
                                                        placeholder="City" onChange={this.handleFormFieldsChange} value={city} />
                                                    {cityError && <span className='errorMsg'>{cityError}</span>}
                                                </div>
                                            </div>



                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="pincode" className="form-label">Pincode</label>
                                                    <input type="text" className="form-control" name="pincode" id="pincode"
                                                        placeholder="Pincode" onChange={this.handleFormFieldsChange} maxLength={6}
                                                        onInput={this.pincodeInputHandler} value={pincode} />
                                                    {pincodeError && <span className='errorMsg'>{pincodeError}</span>}
                                                </div>
                                            </div>


                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <label htmlFor="mapSlot" className="form-label">Map Slot</label>
                                                    <div className="tom-select-custom tom-select-custom-with-tags">
                                                        <select className="js-select form-select" autoComplete="off" multiple
                                                            onChange={this.handleMultiSelectFieldsChange} name="mapSlot" id="mapSlot"
                                                            data-hs-tom-select-options='{"placeholder": "Select a slot..."}'
                                                            value={multiOptionSlots}>
                                                            <option value="9 AM - 11 AM">9 AM - 11 AM</option>
                                                            <option value="11 AM - 1 PM">11 AM - 1 PM</option>
                                                            <option value="1 PM - 3 PM">1 PM - 3 PM</option>
                                                            <option value="3 PM - 5 PM">3 PM - 5 PM</option>
                                                            <option value="5 PM - 7 PM">5 PM - 7 PM</option>
                                                        </select>
                                                    </div>
                                                    {mapSlotError && <span className='errorMsg'>{mapSlotError}</span>}
                                                </div>
                                            </div>
                                            <div className='text-end mt-5'>
                                                <Link className="btn btn-primary btn-sm me-2" to="/wirehouses">Cancel</Link>
                                                <button className="btn btn-primary btn-sm">Update</button>
                                            </div>
                                        </div>
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

export default WithRouter(ViewWirehouse);