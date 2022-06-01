import React, { Component } from 'react'

class Login extends Component {
  render() {
    const mystyle = {
        height: '33rem', 
        backgroundImage: "url('./assets/img/card-6.svg')"
      };
    return (
      <div>

<main id="content" role="main" className="main">
    
<div className="position-fixed top-0 end-0 start-0 bg-img-start" style={mystyle}>
      
      <div className="shape shape-bottom zi-1">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
          <polygon fill="#fff" points="0,273 1921,273 1921,0 "></polygon>
        </svg>
      </div>
    </div>
    
    <div className="container py-5 py-sm-7">
      <a className="d-flex justify-content-center mb-5" href="./index.html">
          <h1 style={{zIndex: 9999}}>ThinkFast</h1>
        {/* <img className="zi-2" src="./assets/svg/logos/logo.svg" alt="Image Description" /> */}
      </a>

      <div className="mx-auto" style={{maxWidth: '30rem'}}>
        <div className="card card-lg mb-5">
          <div className="card-body">
            <form className="js-validate needs-validation">
              <div className="text-center">
                <div className="mb-5">
                  <h1 className="display-5">Sign in</h1>
                  <p>Don't have an account yet? <a className="link" href="./authentication-signup-basic.html">Sign up here</a></p>
                </div>

                <div className="d-grid mb-4">
                  <a className="btn btn-white btn-lg" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <img className="avatar avatar-xss me-2" src="./assets/img/google-icon.svg" alt="Image Description"/>
                      Sign in with Google
                    </span>
                  </a>
                </div>

                <span className="divider-center text-muted mb-4">OR</span>
              </div>

              
              <div className="mb-4">
                <label className="form-label">Your email</label>
                <input type="email" className="form-control form-control-lg" name="email" id="signinSrEmail" placeholder="email@address.com" aria-label="email@address.com" required />
                <span className="invalid-feedback">Please enter a valid email address.</span>
              </div>
              

              
              <div className="mb-4">
                <label className="form-label w-100">
                  <span className="d-flex justify-content-between align-items-center">
                    <span>Password</span>
                    <a className="form-label-link mb-0" href="./authentication-reset-password-basic.html">Forgot Password?</a>
                  </span>
                </label>

                <div className="input-group input-group-merge">
                  <input type="password" className="form-control form-control-lg" name="password" id="" placeholder="8+ characters required" aria-label="8+ characters required" required length="8"/>
                  {/* <a id="changePassTarget" className="input-group-append input-group-text">
                    <i id="changePassIcon" className="bi-eye-slash"></i>
                  </a> */}
                </div>

                <span className="invalid-feedback">Please enter a valid password.</span>
              </div>              

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
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
