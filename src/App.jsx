import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import User from './User'
import Services from './Services';
import Search from './Search';

const App = () => {
    return (
        <>

            {/* Usage of render is better */}
            <Navbar />
            <Switch>
                <Route exact path='/' component={() => <About name='About' />} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/contact' render={Contact} />
                <Route exact path='/user/:fname/:lname' component={User} />
                <Route exact path='/services' render={() => <Services name='Services' />} />
                <Route component={Error} />
            </Switch>


        </>
    )
}

export default App
