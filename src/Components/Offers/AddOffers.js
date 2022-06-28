import React, { Component } from 'react'
import { Link, Redirect, Navigate } from 'react-router-dom'
import "./offers.css"
import swal from 'sweetalert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ApiServices from '../Common/ApiServices';
import { WithRouter } from '../Common/WithRouter';

import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';

//import { withRouter } from "react-router";


class AddOffers extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            fields: {},
            formErorrs: {},
            offerTitle: "",
            offerDescription: ""
        }
    }

    componentDidMount(){
        // let id = this.props.match.params.id;
        // console.log(id);
    }

    handleofferTitleFieldsChange = (event, editor) => {
        this.setState({ offerTitle : editor.getData() });
    }

    handleofferDescriptionFieldsChange = (event, editor) => {
        this.setState({ offerDescription : editor.getData() });
    }

    formValidate(){
        let offerTitle = this.state.offerTitle;
        let offerDescription = this.state.offerDescription;
        let erorrs = {};
        let formIsValid = true;
    
        if (!offerTitle) {
            formIsValid = false;
            erorrs["offerTitleErr"]  = 'Title Cannot be empty';
        } else {
            formIsValid = true;
            erorrs["offerTitleErr"]  = '';
        }

        if (!offerDescription) {
            formIsValid = false;
            erorrs["offerDescriptionErr"] = 'Description Cannot be empty';
        } else {
            formIsValid = true;
            erorrs["offerDescriptionErr"] = '';
        }       
        
        this.setState({ formErorrs : erorrs });
        return formIsValid; 
    }
    
    handleSubmit = event =>{
        event.preventDefault();
        if(this.formValidate()) {            
            let title = this.state.offerTitle;
            let description = this.state.offerDescription;
            
            const formData = {
                "collection" : "offers",
                "data": {
                        "title": title,
                        "description": description,
                        "isEnabled": true
                },
                "meta" : {
                    "duplicate" : [],
                    "multiInsert": false
                }
            };

            ApiServices.AddRecord(formData).then(response => {
                //console.log(response);
                if(response.status == 200 && response.data.status == "success"){
                    swal("Thank you!", "Offer added successfully!!!", "success").then((value) => {
                        if(value){
                            this.props.navigate('/offers');
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
    

render() {
    
    const { offerTitleErr, offerDescriptionErr }  = this.state.formErorrs;
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
                                        <Link className="breadcrumb-link" to="/offers">Offers</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Offer</li>
                                </ol>
                            </nav>

                            <h1 className="page-header-title">Add Offers</h1>
                        </div>
                        <div className="col-md-auto">
                            <Link className="btn btn-primary" to="/offers">Back</Link>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-12 mb-3 mb-lg-0'>
                        <div className="card mb-3 mb-lg-5">

                            <div className="card-header">
                                <h4 className="card-header-title">Offers Information</h4>
                            </div>



                            <div className="card-body">
                                <form method='post' onSubmit={this.handleSubmit}>

                                    <div className="mb-4">
                                        <label htmlFor="offerTitle" className="form-label"> Title </label>
                                        {/* <input type="text" className="form-control" name="offerTitle" id="offerTitle"
                                            placeholder="Title" onChange={this.handleFormFieldsChange} /> */}
                                        <CKEditor
                                                name="offerTitle" id="offerTitle" 
                                                editor={ ClassicEditor }
                                                data=""
                                                onChange={this.handleofferTitleFieldsChange}
                                                height={400+"px"}
                                        />
                                        {offerTitleErr && <span className='errorMsg'>{offerTitleErr}</span>}
                                    </div>

                                    <div className='mb-4'>
                                        <label htmlFor="offerDescription" className="form-label"> Description </label>
                                        {/* <textarea rows={6} className="form-control" name="offerDescription"
                                            id="offerDescription" placeholder="Offer Description" 
                                            onChange={this.handleFormFieldsChange} /> */}
                                        <CKEditor
                                                name="offerDescription" id="offerDescription"
                                                editor={ ClassicEditor }
                                                data=""
                                                onChange={this.handleofferDescriptionFieldsChange}
                                                rows={10}
                                        />
                                        {offerDescriptionErr && <span className='errorMsg'>{offerDescriptionErr}</span>}
                                    </div>
                                    <div className='text-end mt-5'><button className="btn btn-primary btn-sm">Submit</button></div>
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


export default WithRouter(AddOffers);
//export default AddOffers;