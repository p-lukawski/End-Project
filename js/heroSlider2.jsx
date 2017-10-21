import React from 'react';
import { Router,
    Link,
} from 'react-router';
import HeroButton from './heroButton.jsx'

export default class HeroSlider2 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            images: [
                {img:'./images/22.jpg', href:'/workinprogress'},
                {img:'./images/20.jpg', href:'/workinprogress'},
                {img:'./images/21.jpg', href:'/workinprogress'},
                {img:'./images/23.jpg', href:'/workinprogress'}
            ],


        }
    }

    handleClickForward = () =>{
        if(this.state.index < this.state.images.length-3) {
            this.setState({
                index: this.state.index + 1,
            })
        }
    }

    handleClickPrevious = () =>   {
        if(this.state.index > 0) {
            this.setState({
                index: this.state.index - 1,


            })
        }
    }
    render(){
        const arr= [];
        for(let i =this.state.index; i<this.state.index+3; i++){
            arr.push(<HeroButton img={this.state.images[i].img} href={this.state.images[i].href}/>)
        }
        return(
            <div>
                <div className={'hero-header'}>
                    <h1>Wybierz bohatera, którego historię chcesz poznać.</h1>
                </div>
                <div className={'container-slider'}>
                    <button onClick={this.handleClickPrevious}>wstecz</button>
                    {arr}
                    <button onClick={this.handleClickForward}>dalej</button>
                </div>
                <div className={'slider-return'}>
                    <Link to='/'>Powrót</Link>
                </div>
            </div>
        )
    }

}
