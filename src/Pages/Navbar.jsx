import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AuthContext } from '../Providers/AuthProvider';
import noDp from '../assets/noDP.png'
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const { user, logOut, userData } = useContext(AuthContext);
    const [isAdmin] = useAdmin();



    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="text-white font-bold text-xl">
                    <Link to="/" className="navbar-logo">
                        CampusConnect
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <NavItem to="/" active={location.pathname === '/'}>
                            Home
                        </NavItem>
                        <NavItem to="/colleges" active={location.pathname === '/colleges'}>
                            Colleges
                        </NavItem>
                        <NavItem to="/admission" active={location.pathname === '/admission'}>
                            Admission
                        </NavItem>
                        <NavItem to="/mycollege" active={location.pathname === '/mycollege'}>
                            My College
                        </NavItem>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full ring ring-white ring-offset-sky-500 ring-offset-2">
                                <img

                                    src={user?.photoURL || noDp}

                                />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Name
                                    <span className="badge">{userData?.name}</span>
                                </a>
                            </li>
                            <li>
                                <Link to='/profile'>Go to Profile</Link>

                            </li>
                            <li>
                                {user ? (
                                    <>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </>
                                ) :
                                    (<Link to='/login'>Login/Sign Up</Link>)
                                }
                            </li>

                            {isAdmin && (
                                <>
                                    <li>
                                        <Link to='dashboard'>Dashboard</Link>
                                    </li>
                                </>
                            )

                            }
                        </ul>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <div className="text-white">
                        <button onClick={handleToggleMenu}>
                            <FiMenu className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {showMenu && (
                <div className="md:hidden">
                    <ul className="bg-gray-800 text-white">
                        <NavItem to="/" active={location.pathname === '/'} onClick={handleToggleMenu}>
                            Home
                        </NavItem>
                        <NavItem to="/colleges" active={location.pathname === '/colleges'} onClick={handleToggleMenu}>
                            Colleges
                        </NavItem>
                        <NavItem to="/admission" active={location.pathname === '/admission'} onClick={handleToggleMenu}>
                            Admission
                        </NavItem>
                        <NavItem to="/mycollege" active={location.pathname === '/mycollege'} onClick={handleToggleMenu}>
                            My College
                        </NavItem>
                    </ul>
                </div>
            )}
        </nav>
    );
};

// Custom NavItem component to handle active route indicator
const NavItem = ({ to, active, onClick, children }) => (
    <li className={`${active ? 'border-b-2 border-white' : ''}`}>
        <Link
            to={to}
            className={`block px-4 py-2 text-white ${active ? 'font-semibold' : 'hover:underline'}`}
            onClick={onClick}
        >
            {children}
        </Link>
    </li>
);

export default Navbar;
