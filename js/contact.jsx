import React from 'react';

export default class Contact extends React.Component{

    render(){
        return(
            <div className={'container'}>
                <h1>Napisz mi wiadomość</h1>
                <div>
                    <p>Imię:</p>
                    <input type="text"/>
                </div>
                <div>
                    <p>E-mail:</p>
                    <input type="email"/>
                </div>
                <div>
                    <p>Wiadomość:</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Wyślij</button>
            </div>
        )
    }
}