import { Button } from 'bootstrap';
import React from 'react';
import Clock from './Clock.js'


function Header() {
    
    return (

        <header>
            
            <div className="navbar navbar-light bg-dark shadow-sm py-3">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong className='text-warning'>Todo List</strong> 
                                   
                    </a>
                    <div className='clock text-center text-light'>
             <Clock></Clock>
         </div>
                    <button type="button" className="btn btn-success btn-sm mr-1" >Login</button>
                    
                    
                    
                </div>
            </div>
        </header>
    )
}


export default Header;