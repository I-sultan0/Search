import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';


const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    return (
        <>
            <h1>Hi, i am a user, {fname} {lname}</h1>
            <p>My Current Location is {location.pathname}</p>
            {location.pathname === '/user/Sultan/Akhter' ? (
                <button onClick={() => history.goBack()}>Click Me</button>) : null
            }
        </>
    )
}

export default User
