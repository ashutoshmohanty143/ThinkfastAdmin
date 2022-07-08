import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <p className="fs-6 mb-0">&copy; 2022 Copyrights Protected. <span className="d-none d-sm-inline-block">Think Fast.</span></p>
                    </div>

                    <div className="col-auto">
                        <div className="d-flex justify-content-end">

                            <ul className="list-inline list-separator">
                                <li className="list-inline-item">
                                    <a className="list-separator-link" href="#">FAQ</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="list-separator-link" href="#">License</a>
                                </li>
                                <li className="list-inline-item">

                                <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button">
                                    <i className="bi-command"></i>
                                </button>

                                </li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
