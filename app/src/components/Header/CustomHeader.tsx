import React from 'react';
import Logo from '../../assets/logo/leniolabs-logo.png';
import Searchbox from '../Filters/SearchBox';

function CustomHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container logo">
                <a className="navbar-brand" href="/">
                    <img 
                        src={Logo} 
                        className="d-inline-block align-top" 
                        alt="leniolabs logo" 
                    />
                </a>
            </div>
            <div className="container searchbox">
                <Searchbox />
            </div>
        </nav>
    )
}

export default CustomHeader;