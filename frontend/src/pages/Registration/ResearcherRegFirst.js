import React, { useEffect, useRef, useState } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

export const RegistrationFirstPage = (props) => {
    return (
        <div className='bggray'>
            <div className='my-3 py-5'>
                <h2 className='text-center font-h2'>Researcher Profile Registration Form</h2>
                <h5 className='text-center font-h2'>Page 1</h5>
                <div class="container cform">
                    <div className='mb-5' style={{ marginLeft: '0%', marginRight: '0%', marginTop: '5%' }}>
                        <div className='border-left border-top border-success shadow rounded-3 bg-light'>
                            <form className='px-1 mx-3 mt-5 mb-5'>
                                <h2 className='text-center mb-4 font-form-head-2'>Personal Informations</h2>
                                <div class="form-group">
                                    <h6 className="form-font">First Name</h6>
                                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter First Name" required/>
                                </div>
                                <div class="form-group">
                                    <h6 className="form-font">Last Name</h6>
                                    <input type="text" class="form-control" placeholder="Enter Last Name" required/>
                                </div>
                                <div class="form-group">
                                    <h6 className="form-font">Surname Name</h6>
                                    <input type="text" class="form-control" placeholder="Enter Surname" required/>
                                </div>
                                <div class="form-group">
                                    <h6 className="form-font">Gender</h6>
                                    <select id="Gender" input type="select" class="form-control">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <h6 className="exampleInputEmail1 form-font dob">Date of Birth</h6>
                                    <input type="date" class="form-control" />
                                </div>
                                <div align="center">
                                    <button type="submit" class="btn btn-primary mt-2 mb-4 form-signin-button"><a className='button-anchor' href='/reg-researcher-secondpage'>Next Page</a></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

}