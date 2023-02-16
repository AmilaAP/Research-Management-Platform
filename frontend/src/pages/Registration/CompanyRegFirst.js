import React, { useEffect, useRef, useState } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

export const RegCompanyFirstPage = (props) => {
    return (
        <div className='bggray'>
            <div className='my-3 py-5'>
                <h2 className='text-center font-h2'>Company Profile Registration Form</h2>
                <h5 className='text-center font-h2'>Page 1</h5>
                <div class="container cform">
                    <div className='mb-5' style={{ marginLeft: '0%', marginRight: '0%', marginTop: '5%' }}>
                        <div className='border-left border-top border-success shadow rounded-3 bg-light'>
                            <form className='px-1 mx-3 mt-5 mb-5'>
                                <h2 className='text-center mb-4 font-form-head-2'>Company Informations</h2>
                                <div class="form-group">
                                    <h6 className="form-font">Company Name</h6>
                                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Company Name" required/>
                                </div>
                                <div class="form-group">
                                    <h6 className="form-font">Industry</h6>
                                    <input type="text" class="form-control" placeholder="Enter the Industry" required/>
                                </div>
                                <div class="form-group">
                                    <h6 className="form-font">Business Registration No</h6>
                                    <input type="text" class="form-control" placeholder="Enter Surname" required/>
                                </div>
                                <div class="form-group">
                                    <h6 className="form-font">Organization Scale</h6>
                                    <select id="Gender" input type="select" class="form-control organization-scale">
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div align="center">
                                    <button type="submit" class="btn btn-primary mt-2 mb-4 form-signin-button"><a className='button-anchor' href='/reg-company-secondpage'>Next Page</a></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

}