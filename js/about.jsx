import React from 'react';
import { Router,
    Link,
} from 'react-router';

export default class About extends React.Component{
    render(){
        const style = {
            height: 100,
            width:  100,
            display: 'inline-block',
            background: 'url(./images/44.png) no-repeat center/cover',
        }
        return(
            <div className={'container-about'}>
                <div style={style}></div>
                <h1>Coś o mnie</h1>
                <p>Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla
                    Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla Bla bla  bla</p>
                <Link to='/'>Powrót</Link>
            </div>
        )
    }
}