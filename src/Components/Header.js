import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function Header(props) {
    return (
        <div className='header'id='header'>
           <h1 style={{color: "#13AD89", marginBottom:30}}>My Todo</h1>
        </div>
    );
}

export default Header;