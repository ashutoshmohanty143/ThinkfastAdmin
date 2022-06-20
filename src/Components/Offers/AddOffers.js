import React, { Component } from 'react'


import { Link } from 'react-router-dom'
import "./offers.css"

//import RichTextEditor from 'react-rte';
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
            formErrors: {},
            typeSelected: true,
            //rtevalue: RichTextEditor.createEmptyValue()
        }
    }

    
    
    rteValueChange = (rtevalue) => {
        this.setState({rtevalue});
        if(this.props.rteValueChange){
            this.props.rteValueChange(rtevalue.toString('html'));
        }
    }

    handleFormFieldsChange = event => {
        let fields = this.state.fields;
        //console.log(event.target.name);
        if(event.target.name == "offerTitle"){
            fields[event.target.name] = event.target.value;
            this.setState({ fields });
        } else if (document.getElementById('link').checked) {
            //console.log(this.state.fields);
            //console.log(event.target.value);
            fields[event.target.name] = event.target.value;
            this.setState({ fields });
        } else if (document.getElementById('description').checked) {
            //console.log(this.state.fields);
            //console.log(event.target.value);
            fields[event.target.name] = event.target.value;
            this.setState({ fields });
        }
        
    }

    formValidate(){
        //console.log(1)
        //return true;
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Title
        if (!fields["offerTitle"]) {
          formIsValid = false;
          errors["offerTitleErr"] = "Title Cannot be empty";
        } else {
          errors["offerTitleErr"] = "";
        }

        if (document.getElementById('link').checked) {
            errors["offerDescriptionErr"] = "";
            if (!fields["offerLink"]) {
                formIsValid = false;
                errors["offerLinkErr"] = "Link Cannot be empty";
            } else {
                errors["offerLinkErr"] = "";
            }
        } else if (document.getElementById('description').checked) {
            errors["offerLinkErr"] = "";
            if (!fields["offerDescription"]) {
                formIsValid = false;
                errors["offerDescriptionErr"] = "Link Cannot be empty";
            } else {
                errors["offerDescriptionErr"] = "";
            }
        }        
        
        this.setState({ formErrors : errors  });
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
                //this.setState({start:false})
              });
            
          } else {
            //console.log(2)
            //alert("Form has errors.");
          }        
    }

    handleRadioClick() {
        const offerLinkDiv          = document.getElementById("offerLink");
        const offerDescriptionDiv   = document.getElementById("offerDescriptionDiv");
   

        if (document.getElementById('link').checked) {
            
            //document.getElementById("descriptionValue").value = '';
            offerLinkDiv.style.display = "block";            
            offerDescriptionDiv.style.display = "none";
        } else if (document.getElementById('description').checked) {
            this.state.formErrors["offerLinkErr"] = "";
            offerLinkDiv.value = '';
            document.getElementById('description').setAttribute("checked", "true");
            offerLinkDiv.style.display = "none";
            offerDescriptionDiv.style.display = "block";
        }
      }    

    componentDidMount(){
        document.getElementById('link').setAttribute("checked", "true");
        document.getElementById("offerDescriptionDiv").style.display = "none";
        const radioButtons = document.querySelectorAll('input[name="offerType"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('click', this.handleRadioClick);
        });        
    }

render() {
    console.log(this.state.fields);
    const { offerTitleErr, offerLinkErr, offerDescriptionErr  } = this.state.formErrors;
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
                                    <input type="text" className="form-control" name="offerTitle" id="offerTitle" placeholder="Title" onChange={this.handleFormFieldsChange} />
                                    {offerTitleErr && <span className='errorMsg'>{offerTitleErr}</span>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="title" className="form-label"> Type </label><br/>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="offerType" value="link" id="link" readOnly />
                                        <label className="form-check-label">Link</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="offerType" value="description" id="description" />
                                        <label className="form-check-label">Description</label>
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <input type="text" className="form-control" name="offerLink" id="offerLink" placeholder="Offer Link"  onChange={this.handleFormFieldsChange}/>
                                    {offerLinkErr && <span className='errorMsg'>{offerLinkErr}</span>}
                                </div>


                                <div id="offerDescriptionDiv">
                                
                                <textarea rows={8} className="form-control" name="offerDescription" id="offerDescription" placeholder="Offer Description" />
                                {/* <RichTextEditor name="offerDescription" id="descriptionValue" value={this.state.rtevalue} onChange={this.rteValueChange}/> */}
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