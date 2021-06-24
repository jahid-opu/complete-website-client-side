import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { faCog, faSignOutAlt, faCalendar, faPlusSquare, faHome, faGripHorizontal, faUserPlus,faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://limitless-stream-90752.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>
                </li>


                { !isAdmin &&
                    <li>
                        <Link to="/review" className="text-white" >
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                }

                {isAdmin && <div>
                    <li>
                        <Link to="/addservices" className="text-white">
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>

                </div>}
            </ul>
            <div>

            </div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faUser} /> <span>{loggedInUser.userName}</span></Link>
            <div>
                <Link to="" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;