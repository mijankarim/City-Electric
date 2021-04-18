import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaList, FaPlus } from 'react-icons/fa';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiChatQuoteLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { UserContext } from "../../App";
import './Sidebar.css';

const Sidebar = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://glacial-headland-56185.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="sidebar">
      <h3 className="pl-2  mb-5">
        <Link to="/" className="site-title">City Electric</Link>
      </h3>
      <ul className="sidebar-links">
        {isAdmin ? (
          <>
          <li>
              <Link to="/ordersList">
                <FaList /> Order List
              </Link>
            </li>
            <li>
              <Link to="/addService">
                <FaPlus /> Add Service
              </Link>
            </li>
            
            <li>
              <Link to="/addAdmin">
                <BsFillPersonPlusFill /> Make Admin
              </Link>
            </li>
            <li>
              <Link to="/manageServices">
                <FaTasks /> Manage Services
              </Link>
            </li>
          </>
        ) : (
          <>
          <li>
              <Link to="/orders">
                <FiShoppingCart /> Book
              </Link>
            </li>

            <li>
              <Link to="/orders">
                <FaList /> Booking List
              </Link>
            </li>
            <li>
              <Link to="/addReview">
                <RiChatQuoteLine /> Review
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
