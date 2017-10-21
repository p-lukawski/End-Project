import React from 'react';
import { Router,
    Link,
} from 'react-router';

    export default class Menu extends React.Component{
        render(){
            return(
                <ul className={'nav'}>
                    <li><Link to='/about'>O mnie</Link></li>
                    <li><Link to='/contact'>Kontakt</Link></li>
                    <li><a href="https://patronite.pl">Patronite</a></li>
                </ul>
            )
        }
    }

