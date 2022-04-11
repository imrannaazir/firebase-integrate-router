import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Nav = () => {
    const { user, handleLogOut } = useFirebase()
    return (
        <div
            className='shadow-md text-lg py-2'>
            <nav
                className=' flex justify-between w-[90%] mx-auto py-4 '>
                <h1>LOGO</h1>
                <div
                    className='flex gap-4'>
                    <Link className=' hover:text-green-400' to='/'>Home</Link>
                    <Link className=' hover:text-green-400' to='/products'>Products</Link>
                    <Link className=' hover:text-green-400' to='/order'>Order</Link>
                    <Link className=' hover:text-green-400' to='/about'>About</Link>
                    <Link className=' hover:text-green-400' to='/contacts' >Contacts</Link>
                </div>
                {
                    user?.uid ? <div className=' flex gap-3 items-center'>
                        <img className=' rounded-full w-14' src={user.photoURL} alt="" />
                        <button
                            className='flex gap-3 items-center border-green-400 border-2 px-4 py-1 rounded-full text-green-400 hover:text-white  hover:bg-green-400'
                            onClick={handleLogOut}>
                            <FontAwesomeIcon icon={faRightFromBracket} />Logout
                        </button>
                    </div>
                        :
                        <div >
                            <Link
                                className='mr-4 border-2 rounded-full px-6 py-2 border-green-400 ' to='/login'>Sign in
                            </Link>
                            <Link
                                className=' bg-green-400 py-2 px-6 rounded-full text-white hover:bg-[#fafafa] hover:text-green-400 border-green-400 border-2'
                                to='signup'>Sign up
                            </Link>
                        </div>

                }
            </nav>

        </div>
    );
};

export default Nav;