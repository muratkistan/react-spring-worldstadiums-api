import React from 'react';

import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Header = () => {

    return (
        <div className="container mb-3 ">
            <header>
           
                <div class=" inverted ui large menu">
                    <Link className="active item " to="/"><Icon name='home' />World Stadiums</Link>
                    <div class="right menu">   
                        <div className="item">
                            <Link className="ui inverted green button" to="/create-stadium"><Icon  name='save' />Add Stadium</Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;