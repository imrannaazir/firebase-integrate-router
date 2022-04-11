import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase()
    return (
        <div>
            <p>Products</p>
            <p>Name:{user ? user.displayName : ''}</p>


        </div>
    );
};

export default Products;