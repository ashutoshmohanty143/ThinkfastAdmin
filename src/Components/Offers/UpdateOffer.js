import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./offers.css"
import axios from 'axios';
import swal from 'sweetalert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import Header from '../Common/Header';
import SideNav from '../Common/SideNav';
import Footer from '../Common/Footer';


class UpdateOffer extends Component {
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
        let fields = {};
        let path = window.location.pathname;
        let id = path.split('/')[2];
        const apiUrl = `http://localhost:5000/api/curd/doc/${id}/?collection=offers`;
        const token = sessionStorage.getItem("userToken");
        axios.get(apiUrl, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        }).then(response => {
            this.state.offerTitle = response.data.data.title;
            this.state.offerDescription = response.data.data.description;
            this.setState({ fields : fields });
        }).catch(error => {

            console.log("error", error)

        });
    }

    handleofferTitleFieldsChange = (event, editor) => {
        this.setState({ offerTitle : editor.getData() });
        // console.log(this.state.offerTitle)
    }

    handleofferDescriptionFieldsChange = (event, editor) => {
        this.setState({ offerDescription : editor.getData() });
        // console.log(this.state.offerDescription)
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
   
            let title = this.state.offerTitle;
            let description = this.state.offerDescription;
            let path = window.location.pathname;
            let id = path.split('/')[2];
            
            const apiUrl =  'http://localhost:5000/api/curd/doc';
            const formData = {
                "collection" : "offers",
                "id": `${id}`,
                "data": {        
                        "title": title,
                        "description": description
                },
                "meta" : {
                    "duplicate" : []
                }
            };                
            const token = sessionStorage.getItem("userToken");

            axios.put(apiUrl, formData, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
                }).then(response => {
                swal("Thank you!", "Offer updated successfully!!!", "success");
                //console.log(document.querySelectorAll('.swal-button--confirm')[0]);
                const swalOkBtn = document.querySelectorAll('.swal-button--confirm')[0];
                swalOkBtn.addEventListener('click', function(){
                    window.location.href = "/offers";
                });
        
              }).catch(error => {
                console.log("error", error)
              });
               
    }
    

render() {
    
    const { offerTitle, offerDescription } =  this.state;
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
                                        {/* <input type="text" className="form-control" name="offerTitle" 
                                            id="offerTitle"  value={offerTitle} 
                                            placeholder="Title" onChange={this.handleFormFieldsChange} /> */}
                                        <CKEditor
                                                name="offerTitle" id="offerTitle" 
                                                editor={ ClassicEditor }
                                                data={offerTitle}
                                                onChange={this.handleofferTitleFieldsChange}
                                                height={200+"px"}
                                        />
                                        {offerTitleErr && <span className='errorMsg'>{offerTitleErr}</span>}
                                    </div>

                                    <div className='mb-4'>
                                        <label htmlFor="offerDescription" className="form-label"> Description </label>
                                        {/* <textarea rows={6} className="form-control" name="offerDescription"
                                            id="offerDescription" placeholder="Offer Description" 
                                            value={offerDescription} onChange={this.handleFormFieldsChange} /> */}
                                        <CKEditor
                                                name="offerDescription" id="offerDescription"
                                                editor={ ClassicEditor }
                                                data={offerDescription}
                                                onChange={this.handleofferDescriptionFieldsChange}
                                                rows={5}
                                        />
                                        {offerDescriptionErr && <span className='errorMsg'>{offerDescriptionErr}</span>}
                                    </div>

                                    <div className='text-end mt-5'><button className="btn btn-primary btn-sm">Save Data</button></div>
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


export default UpdateOffer;