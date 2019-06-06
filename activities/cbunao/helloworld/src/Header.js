import React from 'react';
import Home from './Home.js';
import MenuItem from './MenuItem.js';
import Search from './Search.js';
class Header extends React.Component{
    render(){
        
        return (
            <header className="myHeader">
                <div className="div1">
                    <div className="div2">
                        <Home siteName="MySite"/>
                        <nav className="menuList">
                            <MenuItem label="Docs"/>
                            <MenuItem label="Tutorial"/>
                            <MenuItem label="Blog"/>
                            <MenuItem label="Community"/>
                        </nav>
                        <Search/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;