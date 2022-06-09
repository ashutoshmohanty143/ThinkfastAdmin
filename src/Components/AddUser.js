import React from 'react'

export default function AddUser() {
  return (

    <main id="content" role="main" className="main">
      <div className="content container-fluid pb-5">
        
          <h1 className='text-center'>Add Users</h1>

          <div className="row justify-content-center">

              <div className="col-lg-8">

                  <div className="card">

                      <div className="card-body">
                          <div className="row">
                              <div className="col-sm-6">

                                  <div className="mb-4">
                                      <label htmlFor="firstNameLabel" className="form-label">First name</label>
                                      <input type="text" className="form-control" name="firstName" id="firstNameLabel" 
                                                placeholder="Clarice" aria-label="Clarice" />
                                  </div>

                              </div>


                              <div className="col-sm-6">

                                  <div className="mb-4">
                                      <label htmlFor="lastNameLabel" className="form-label">Last name</label>
                                      <input type="text" className="form-control" name="lastName" id="lastNameLabel" placeholder="Boone" aria-label="Boone" />
                                  </div>

                              </div>

                          </div>



                          <div className="mb-4">
                              <label htmlFor="emailLabel" className="form-label">Email</label>
                              <input type="email" className="form-control" name="email" id="emailLabel" placeholder="clarice@site.com" aria-label="clarice@site.com" />
                          </div>



                          <div className="js-add-field mb-4" data-hs-add-field-options='{
                                                                            "template": "#addPhoneFieldTemplate",
                                                                            "container": "#addPhoneFieldContainer",
                                                                            "defaultCreated": 0 }'>
                              <label htmlFor="phoneLabel" className="form-label">Phone</label>

                              <div className="input-group">
                                  <input type="text" className="js-input-mask form-control" name="phone" 
                                            id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" 
                                            data-hs-mask-options='{"mask": "+0(000)000-00-00" }' />

                                  <div className="input-group-append">

                                      <div className="tom-select-custom tom-select-custom-end">
                                          <select className="js-select form-select"  name="phoneSelect" 
                                                    data-hs-tom-select-options='{"searchInDropdown": false,
                                                                                "hideSearch": true,
                                                                                "dropdownWidth": "8rem"}'>
                                              <option value="Mobile" >Mobile</option>
                                              <option value="Home">Home</option>
                                              <option value="Work">Work</option>
                                              <option value="Fax">Fax</option>
                                              <option value="Direct">Direct</option>
                                          </select>

                                      </div>
                                  </div>
                              </div>


                              <div id="addPhoneFieldContainer"></div>

                              <a href="" className="js-create-field form-link">
                                  <i className="bi-plus"></i> Add phone
                              </a>
                          </div>

                          <div className="d-flex justify-content-end gap-3">
                              <button type="button" className="btn btn-white">Discard</button>
                              <button type="button" className="btn btn-primary">Save</button>
                          </div>
                      </div>

                  </div>

              </div>
          </div>
    </div>
    </main>
  )
}
