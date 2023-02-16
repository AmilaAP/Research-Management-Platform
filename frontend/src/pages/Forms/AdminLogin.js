import React, { useEffect, useRef, useState } from 'react';
import { ReactDOM } from 'react';
import './Welcomelogin.css';

export const AdminLogin = () => {

return(
    <div className='bggray'>
        <div className='my-3 py-5'>
            <h2 className='text-center font-h2'>Admin Login</h2>

            <div class="container cform">
                <div className='mb-5' style={{ marginLeft: '0%', marginRight: '0%', marginTop: '5%' }}>
                    <div className='border-left border-top border-success shadow rounded-3 bg-light'>
                        <form className='px-1 mx-3 mt-5 mb-5'>
                            <div class="form-group">
                                <label for="exampleInputEmail1">User Name</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div align="center">
                                <button type="submit" class="btn btn-primary mt-2 mb-4 form-signin-button">Sign in</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>



)

}