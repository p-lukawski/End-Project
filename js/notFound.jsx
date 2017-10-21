import React from 'react';
import { Router,
    Link,
} from 'react-router';

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <div className={'container-404'}>
                    <h1>Nic tu nie ma(404)</h1>
                </div>
                <div className={'return-link'}>
                    <Link to={'/'}>Powrót</Link>
                </div>
            </div>
        )
    }
}
