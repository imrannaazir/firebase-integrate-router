import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import useFirebase from '../../hooks/useFirebase';


const Home = () => {
    const { user } = useFirebase()
    return (
        <div>
            <p>Home <FontAwesomeIcon icon={faHome} /></p>
            <p>Name: {user ? user.displayName : 'Not found'}</p>
            <p>{user ? user.email : ''}</p>

        </div>
    );
};

export default Home;