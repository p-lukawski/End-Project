import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import Template from './template.jsx';
import Main from './Main.jsx';
import HeroSlider from './heroSlider.jsx';
import HeroSlider2 from './heroSlider2.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import StoryEster from './storyEster.jsx';
import WorkInProgress from './workInProgress.jsx';
import NotFound from './notFound.jsx';

document.addEventListener('DOMContentLoaded', function () {






    class App extends React.Component{
        render(){
            return(
                <div>
                    <Router history={hashHistory}>
                        <Route path='/' component={Template}>
                        <IndexRoute component={Main}/>
                        <Route path='/jeden' component={HeroSlider}/>
                        <Route path='/test' component={HeroSlider2}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/storyester' component={StoryEster}/>
                        <Route path='/workinprogress' component={WorkInProgress}/>
                        <Route path='*' component={NotFound}/>
                        </Route>
                    </Router>
                </div>

            )
        }
    }







    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});