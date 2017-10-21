import React from 'react';
import { Router,
    Link,
} from 'react-router';

export default class WorkInProgress extends React.Component{
    render(){
        return(
            <div>
                <div className={'container-work'}>
                    <h1>Treść w przygotowaniu, będzie jak się pojawi.</h1>
                </div>
                <div className={'return-link'}>
                    <Link to={'/'}>Powrót</Link>
                </div>
            </div>
        )
    }
}
