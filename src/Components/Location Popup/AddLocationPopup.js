import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import ApiServices from '../Common/ApiServices';
import CommonMethods from '../Common/CommonMethods';
import { WithRouter } from '../Common/WithRouter';

class AddPopupSettings extends Component {
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
        let fields = this.state.fields;
        let erorrs = {};
        let formIsValid = true;
    
        // if (!fields['popupStatus']) {
        //     formIsValid = false;
        //     erorrs["popupStatusErr"]  = 'Please Choose Popup Status';
        // }

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
    
    handleSubmit = event =>{
        event.preventDefault();
        if(this.formValidate()) {  
           
            // let { popupStatus, popupTime, popupButtonColor } = this.state.fields;  
            // var isEnabled = false;
             // if(popupStatus == "Enable"){
            //     isEnabled = true;
            // } else {
            //     isEnabled = false;
            // }    
            let { popupTime, popupButtonColor } = this.state.fields;
            const formData = {
                "collection" : "popupsettings",
                "data": {
                        "popupTime": popupTime*1000,
                        "popupButtonColor": popupButtonColor,
                        "isEnabled":true
                },
                "meta" : {
                    "duplicate" : [],
                    "multiInsert": false
                }
            };

            ApiServices.AddRecord(formData).then(response => {
                if(response.status == 200 && response.data.status == "success"){
                    swal("Thank you!", "Popup Settings added successfully!!!", "success").then((value) => {
                        if(value){
                            this.props.navigate('/locationpopup');
                        }
                    });
                }
              }).catch(error => {
                console.log("error", error)
              });
          } else {
            console.log("Error");
          }        
    }

    popupTimeInputHandler = e => {
        if (!CommonMethods.numberValidation(e)) {
            this.state.formErrors["popupTimeErr"] = "Please Give Only Numbers";
        } else {
            this.state.formErrors["popupTimeErr"] = "";
        }
    }
    

render() {
    // const { popupStatusErr, popupTimeErr, popupButtonColorErr }  = this.state.formErrors;
    const { popupTimeErr, popupButtonColorErr }  = this.state.formErrors;
    return (
        <>
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item">
                                        <Link className="breadcrumb-link" to="/locationpopup">Location Popup</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Location Popup</li>
                                </ol>
                            </nav>

                            <h1 className="page-header-title">Add Location Popup</h1>
                        </div>
                        <div className="col-md-auto">
                            <Link className="btn btn-primary" to="/locationpopup">Back</Link>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-12 mb-3 mb-lg-0'>
                        <div className="card mb-3 mb-lg-5">

                            <div className="card-header">
                                <h4 className="card-header-title">Popup Settings Information</h4>
                            </div>

                            <div className="card-body">
                                <form method='post' onSubmit={this.handleSubmit}>

                                    {/* <div className="mb-4">
                                        <label htmlFor="popupStatus" className="form-label mb-3"> Popup Settings Status </label>
                                        <div className="row">
                                            <div className="col-sm-4 mb-2 mb-sm-0">
                                                <label className="form-control" htmlFor="formControlRadioEg1">
                                                    <span className="form-check">
                                                        <input type="radio" className="form-check-input" name="popupStatus" 
                                                             value="Enable" onChange={this.handleFormFieldsChange} />
                                                        <span className="form-check-label">Enable</span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="col-sm-4 mb-2 mb-sm-0">
                                                <label className="form-control" htmlFor="formControlRadioEg2">
                                                    <span className="form-check">
                                                        <input type="radio" className="form-check-input" name="popupStatus" 
                                                             value="Disable" onChange={this.handleFormFieldsChange} />
                                                        <span className="form-check-label">Disable</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        {popupStatusErr && <span className='errorMsg'>{popupStatusErr}</span>}
                                    </div> */}

                                    <div className='col-md-6 mb-4'>
                                        <label htmlFor="popupTime" className="form-label"> Time To Popup (In Sec.) </label>
                                        <input type="text" className='form-control' name="popupTime" id='popupTime' 
                                           onInput={this.popupTimeInputHandler} onChange={this.handleFormFieldsChange} />
                                        {popupTimeErr && <span className='errorMsg'>{popupTimeErr}</span>}
                                    </div>

                                    <div className='col-md-3 mb-4'>
                                        <label htmlFor="popupButtonColor" className="form-label"> Popup Button Color </label>
                                        <input type="color" className='form-control' style={{height:50+'px', width:100+'px'}} name="popupButtonColor" 
                                            id='popupButtonColor' onChange={this.handleFormFieldsChange} />
                                        {popupButtonColorErr && <span className='errorMsg'>{popupButtonColorErr}</span>}
                                    </div>

                                    <div className='text-end mt-5'><button className="btn btn-primary btn-sm">Submit</button></div>
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


export default WithRouter(AddPopupSettings);