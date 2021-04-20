import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';
import Search from './Search';

const App = () => {
    return (
        <>

            <Switch>
                <Route exact path='/' component={Search} />
                <Route component={Error} />
            </Switch>


        </>
    )
}

export default App
