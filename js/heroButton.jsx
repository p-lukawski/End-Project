import React from 'react';
import { Router,
    Link,
} from 'react-router';


export default class HeroButton extends React.Component{
    render(){
        const style = {
            height: 550,
            width:  250,
            display: 'inline-block',
            background: 'url('+this.props.img+') no-repeat center/contain',
        }
        return(
            <Link  className={'slider-item'} to={this.props.href} style={style}>

            </Link>
        )
    }
}
