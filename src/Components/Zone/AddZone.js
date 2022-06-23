import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';

export default class AddZone extends Component {
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
        console.log(fields['zoneA'])
        console.log(fields['zoneB'])   
        console.log(fields['zoneC'])
        console.log(fields['zoneD'])
        console.log(fields['zoneE'])
    }

    formValidate(){
        let fields = this.state.fields;
        let Errors = {};
        let formIsValid = true;
    
        if (!fields["zoneA"]) {
            formIsValid = false;
            Errors["zoneAError"]  = 'Zone A cannot be empty';
        } else {
            formIsValid = true;
            Errors["zoneAError"]  = '';
        }

        if (!fields["zoneB"]) {
            formIsValid = false;
            Errors["zoneBError"]  = 'Zone B cannot be empty';
        } else {
            formIsValid = true;
            Errors["zoneBError"]  = '';
        }   
        
        if (!fields["zoneC"]) {
            formIsValid = false;
            Errors["zoneCError"]  = 'Zone C cannot be empty';
        } else {
            formIsValid = true;
            Errors["zoneCError"]  = '';
        } 

        if (!fields["zoneD"]) {
            formIsValid = false;
            Errors["zoneDError"]  = 'Zone D cannot be empty';
        } else {
            formIsValid = true;
            Errors["zoneDError"]  = '';
        } 

        if (!fields["zoneE"]) {
            formIsValid = false;
            Errors["zoneEError"]  = 'Zone E cannot be empty';
        } else {
            formIsValid = true;
            Errors["zoneEError"]  = '';
        } 
        
        this.setState({ formErrors : Errors });
        return formIsValid; 
    }

    handleSubmit = event =>{
        event.preventDefault();
        if(this.formValidate()) {            
            let {zoneA, zoneB, zoneC, zoneD, zoneE} = this.state.fields;
            
            const apiUrl =  'http://localhost:5000/api/curd/doc';
            const formData = {
                "collection" : "zones",
                "data": {
                        "zoneA": zoneA,
                        "zoneB": zoneB,
                        "zoneC": zoneC,
                        "zoneD": zoneD,
                        "zoneE": zoneE
                },
                "meta" : {
                    "duplicate" : [],
                    "multiInsert": false
                }
            };                
            const token = sessionStorage.getItem("userToken");

            axios.post(apiUrl, formData, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
                }).then(response => {
                console.log('response', response);
                swal("Thank you!", "Zones added successfully!!!", "success");
                const swalOkBtn = document.querySelectorAll('.swal-button--confirm')[0];
                swalOkBtn.addEventListener('click', function(){
                    window.location.href = "/zones";
                });
        
              }).catch(error => {
                console.log("error", error)
              });

            swal("Thank you!", "Zones added successfully!!!", "success");

          } else {
            console.log("Form Validation Error");
          }        
    }


    render() {
        const { zoneAError, zoneBError, zoneCError, zoneDError, zoneEError }  = this.state.formErrors;
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
                                            <form method='post' onSubmit={this.handleSubmit}>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="zoneA" className="form-label">Zone A</label>
                                                            <input type="text" className="form-control" name="zoneA"
                                                                id="zoneA" placeholder="Zone A" onChange={this.handleFormFieldsChange} />
                                                            {zoneAError && <span className='errorMsg'>{zoneAError}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="zoneB" className="form-label">Zone B</label>
                                                            <input type="text" className="form-control" name="zoneB"
                                                                id="zoneB" placeholder="Zone B" onChange={this.handleFormFieldsChange} />
                                                            {zoneBError && <span className='errorMsg'>{zoneBError}</span>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="zoneC" className="form-label">Zone C</label>
                                                            <input type="text" className="form-control" name="zoneC"
                                                                id="zoneC" placeholder="Zone C" onChange={this.handleFormFieldsChange} />
                                                            {zoneCError && <span className='errorMsg'>{zoneCError}</span>}
                                                        </div>
                                                    </div>


                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="zoneD" className="form-label">Zone D</label>
                                                            <input type="text" className="form-control" name="zoneD"
                                                                id="zoneD" placeholder="Zone D" onChange={this.handleFormFieldsChange} />
                                                            {zoneDError && <span className='errorMsg'>{zoneDError}</span>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label htmlFor="zoneE" className="form-label">Zone E</label>
                                                            <input type="text" className="form-control" name="zoneE"
                                                                id="zoneE" placeholder="Zone E" onChange={this.handleFormFieldsChange} />
                                                            {zoneEError && <span className='errorMsg'>{zoneEError}</span>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='text-end'><button className="btn btn-primary btn-sm">Submit</button></div>
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
