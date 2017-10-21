import React from 'react';
import { Router,
    Link,
} from 'react-router';
import Menu from './menu.jsx';


    export default class UpperBar extends React.Component{
        render(){
            return(
                <div className={'header'}>
                    <div className={'container'}>
                        <h1><Link to='/'>Rozstaje</Link></h1>
                        <Menu/>
                    </div>
                </div>
            )
        }
    }
