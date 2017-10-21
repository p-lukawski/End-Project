import React from 'react';
import UpperBar from './upperBar.jsx';
import Footer from './footer.jsx';

export default class Template extends React.Component{
    render(){
        return(
            <div>
                <UpperBar/>
                    <section className={'container-temp'}>
                        {this.props.children}
                    </section>
                <Footer/>
            </div>
        )
    }
}