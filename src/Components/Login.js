import React, { Component, useState } from 'react'

import '../App.css';

class Login extends Component {

  constructor(){
    super();

    this.state = {
      fields: {},
      errors: {},
      inpass: "password",
      eye: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.handlepassword = this.handlepassword.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitLoginForm(e) {
    e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["email"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }
  }

  validateForm() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      this.setState({
        errors: errors
      });

      return formIsValid;

  }


    handlepassword(){
      if(this.inpass === "password"){
        this.setState({
          inpass: "password",
          eye:false
        })
        return;
        } 
        this.setState({
          inpass: "text",
          eye:true
        })

    }

  


  render() {
    return (
      <div className="d-flex align-items-center min-h-100">

      
      <main id="content" role="main" className="main pt-0" style={{paddingLeft: 0}}>

        <div className="container-fluid px-3">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">

              <div className="position-absolute top-0 start-0 end-0 mt-3 mx-3">
                <div className="d-none d-lg-flex justify-content-between">
                  <a href="">
                    <img className="w-100" src="./assets/svg/logos/logo.svg" alt="Image Description" 
                          data-hs-theme-appearance="default" style={{minWidth: 7+'rem', maxWidth: 7+'rem'}} />
                      </a>
                    </div>
                </div>


                <div style={{maxWidth: 23+'rem'}}>
                  <div className="text-center mb-5">
                    <img className="img-fluid" src="./assets/svg/illustrations/oc-chatting.svg" alt="Image Description" style={{width: '12rem'}} data-hs-theme-appearance="default" />
                      </div>

                      <div className="mb-5">
                        <h2 className="display-5">Build digital products with:</h2>
                      </div>


                      <ul className="list-checked list-checked-lg list-checked-primary list-py-2">
                        <li className="list-checked-item">
                          <span className="d-block fw-semi-bold mb-1">All-in-one tool</span>
                          Build, run, and scale your apps - end to end
                        </li>

                        <li className="list-checked-item">
                          <span className="d-block fw-semi-bold mb-1">Easily add &amp; manage your services</span>
                          It brings together your tasks, projects, timelines, files and more
                        </li>
                      </ul>


                      <div className="row justify-content-between mt-5 gx-3">
                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Logo" />
                        </div>


                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Logo" />
                        </div>


                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Logo" />
                        </div>


                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Logo" />
                        </div>

                      </div>

                  </div>
                </div>


                <div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
                  <div className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1" style={{maxWidth: '25rem'}}>

                    <form>
                      <div className="text-center">
                        <div className="mb-5">
                          <h1 className="display-5">Sign in</h1>
                          <p>Don't have an account yet? <a className="link" href="./authentication-signup-cover.html">Sign up here</a></p>
                        </div>

                        <div className="d-grid mb-4">
                          <a className="btn btn-white btn-lg" href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                                Sign in with Google
                            </span>
                          </a>
                        </div>

                        <span className="divider-center text-muted mb-4">OR</span>
                      </div>


                      <div className="mb-4 text-start">
                        <label className="form-label" htmlFor="signinSrEmail">Your email</label>
                        <input type="email" className="form-control form-control-lg" 
                          name="email" id="signinSrEmail" 
                          tabIndex="1" placeholder="email@address.com" 
                          aria-label="email@address.com" required  
                          value={this.state.fields.email} onChange={this.handleChange} />
                          <span className="invalid-feedback">Please enter a valid email address.</span>
                          <span className="errorMsg">{this.state.errors.email}</span>
                      </div>


                      <div className="mb-4 text-start">
                        <label className="form-label w-100" htmlFor="signupSrPassword" tabIndex="0">
                          <span className="d-flex justify-content-between align-items-center">
                            <span>Password</span>
                            <a className="form-label-link mb-0" href="">
                                Forgot Password?</a>
                          </span>
                        </label>

                        <div className="input-group input-group-merge">
                          <input type={this.state.eye ? "text" : "password"} className="{warning} js-toggle-password form-control form-control-lg" 
                          name="password" id="signupSrPassword" placeholder="8+ characters required" 
                          aria-label="8+ characters required" required minLength="8" 
                          value={this.state.fields.password} onChange={this.handleChange}/>
                            <a className="input-group-append input-group-text">
                              {/* <i className={`${this.state.eye ? "bi-eye" : "bi-eye-slash"}`} 
                                onClick={this.handlepassword}></i> */}
                                <i className={`${this.state.eye ? "bi-eye" : "bi-eye-slash"}`} 
                                onClick={this.setState({eye: false})}></i>
                            </a>
                        </div>
                        <span className="invalid-feedback">Please enter a valid password.</span>
                        <span className="errorMsg">{this.state.errors.password}</span>
                      </div>



                      <div className="form-check mb-4 text-start">
                        <input className="form-check-input" type="checkbox" value="" id="termsCheckbox" />
                          <label className="form-check-label">
                            Remember me
                          </label>
                      </div>


                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg" 
                                      onClick={this.submitLoginForm}>Sign in</button>
                      </div>

                    </form>

                  </div>
                </div>

              </div>

            </div>

          </main>
          </div>
          )
  }
}

export default Login;
