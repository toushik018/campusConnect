import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import noDp from '../../assets/noDP.png'
import { Link, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
    const { userId } = useParams();
    const { user, logOut, userData } = useContext(AuthContext);
    console.log(userData);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const handleEdit = () => {
        console.log("edit");
    }

    return (
        <div className="container mx-auto py-8 h-screen">
            <div className="flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden object-cover ring ring-blue-700 ring-offset-blue-900 ring-offset-2 mr-4">
                    <img src={user?.photoURL || noDp} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <Link to='/edit-profile'> <FaEdit className='ml-2' size={40} /></Link>
            </div>
            <h2 className="text-2xl font-semibold text-center mt-4">{userData?.name}</h2>
            <p className="text-center mt-2 text-lg">{userData?.university}</p>
            <p className="text-center mt-2 text-lg">{userData?.address}</p>
            <div className='flex justify-center'>
                <p className="text-center mt-2 badge badge-info mx-auto">{user?.email}</p>
            </div>
            <div className="flex justify-center mt-4">


                {user ? (
                    <>
                        <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Log Out
                        </button>
                    </>
                ) :
                    (<Link to='/login' className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" >Login</Link>)
                }
            </div>
        </div>
    );
};

export default Profile;
