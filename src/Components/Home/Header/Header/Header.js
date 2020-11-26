import React from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import HeaderTop from '../HeaderTop/HeaderTop';
import './Header.css';

const Header = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <hr/>
            <HeaderBottom></HeaderBottom>
        </div>
    );
};

export default Header;