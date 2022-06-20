import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./offers.css"
import axios from 'axios';
import swal from 'sweetalert';


import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';


class AddOffers extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            fields: {},
            formErorrs: {}
        }
    }


    handleFormFieldsChange = event => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });  
        console.log(fields['offerTitle'])
        console.log(fields['offerDescription'])   
    }

    formValidate(){
        let fields = this.state.fields;
        let erorrs = {};
        let formIsValid = true;
    
        if (!fields["offerTitle"]) {
            formIsValid = false;
            erorrs["offerTitleErr"]  = 'Title Cannot be empty';
        } else {
            formIsValid = true;
            erorrs["offerTitleErr"]  = '';
        }

        if (!fields["offerDescription"]) {
            console.log('first')
            formIsValid = false;
            erorrs["offerDescriptionErr"] = 'Description Cannot be empty';
        } else {
            console.log('last')
            formIsValid = true;
            erorrs["offerDescriptionErr"] = '';
        }       
        
        this.setState({ formErorrs : erorrs });
        return formIsValid; 
    }
    
    handleSubmit = event =>{
        event.preventDefault();
        if(this.formValidate()) {            
            let title = this.state.fields['offerTitle'];
            let link = this.state.fields['offerLink'];
            
            const apiUrl =  'http://localhost:5000/api/curd/saveDoc';
            const formData = {
                "collection" : "offers",
                "data": {        
                        "title": title,
                        "link": link,
                        "description": ""
                },
                "meta" : {
                    "duplicate" : []
                }
            };                
            const token = sessionStorage.getItem("userToken");

            axios.post(apiUrl, formData, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
              }).then(response => {
                console.log('response', response);
                swal("Thank you!", "Offer added successfully!!!", "success");
                //console.log(document.querySelectorAll('.swal-button--confirm')[0]);
                const swalOkBtn = document.querySelectorAll('.swal-button--confirm')[0];
                swalOkBtn.addEventListener('click', function(){
                    window.location.href = "/offers";
                });
        
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
                                        <input type="text" className="form-control" name="offerTitle" id="offerTitle"
                                            placeholder="Title" onChange={this.handleFormFieldsChange} />
                                        {offerTitleErr && <span className='errorMsg'>{offerTitleErr}</span>}
                                    </div>

                                    <div className='mb-4'>
                                        <label htmlFor="offerDescription" className="form-label"> Description </label>
                                        <textarea rows={6} className="form-control" name="offerDescription"
                                            id="offerDescription" placeholder="Offer Description" 
                                            onChange={this.handleFormFieldsChange} />
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


export default AddOffers;