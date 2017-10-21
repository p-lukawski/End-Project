import React from 'react';
import { Router,
    Link,
} from 'react-router';


export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {

            value: '/jeden',
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    render(){
        const names = [ 'jeden', 'test'];
        const urls = ['/jeden', '/test'];
        const desc = ['Amon anwar argonui balan bucca of the marish captivity of melkor chief shirriff derndingle diggle edain of the north elf of the wand fall of gil-galad faramir son of ondoher fell winter of the third age gasping dust hithaeglir holy mountain: meneltarma old winyards ring of the enemy snowmane stock-brook tol-in-gaurhoth twilight meres wingfoot. Camellia sackville dead marshes derndingle elf-speech enerdhil first deep folcred frerin front gate high king of arda hobbits of the shire inlands isembard took isumbras took iii king of doriath kuduk lake mithrim lightfoot (horse) magnificent marish morgai moria-silver pippin gamgee rose snowmane tombs west-gate of moria. Aranuir blackroot borlad captain of despair culumalda eagle of the star eastlands of middle-earth elentirmo falastur farmer maggot fords of poros frodo gardner hornrock idril celebrindal iron hills land of gift men of harad mrs. maggot parth galen periain potatoes swordsman of the sky tale of the ring tol fuin unnumbered tears vingilot.', 'Cows elves of middle-earth hall of fire moon mountains of lune nameless pass sleep of yavanna southfarthing of the shire wain. Amanyar black easterling celebros desolation of smaug goldenbed lissuin will whitfoot yews. Bereg celebdil east wall of rohan haleth daughter of haldad harad road hildifons took huggins isengrim took iii king of arnor king of the north-kingdom mordor-orcs outer gate of gondolin palarran ranugad third marshal tobacco west of the world wheat. Ardamir argonui asgon bald hill haysend highdei lord of waters malinorni middle peoples north ithilien shadow of morgoth tarciryan thalos the tale of aragorn and arwen three hunters tower of anor tuckborough warden of the houses of healing white tree of valinor wild men wolf-sauron.'];


        const options = names.map((v, i) => <option value={urls[i]}>{v}</option>);
        const name = desc[urls.indexOf(this.state.value)];
        return(
            <div className={'container-main'}>
                <select value={this.state.value} onChange={this.handleChange}>
                    {options}
                </select>
                <div className={'slider-item'}>{name}</div>
                <button><Link to={this.state.value}>Wybierz</Link></button>
            </div>
        )
    }
}