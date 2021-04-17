import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";

const Sidebar = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5050/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="sidebar">
      <h3 className="pl-2 pt-3">
        <Link to="/">City Electric</Link>
      </h3>
      <ul>
        {isAdmin ? (
          <>
          <li>
              <Link to="/ordersList">
                <FontAwesomeIcon icon={faList} /> Order List
              </Link>
            </li>
            <li>
              <Link to="/manageServices">
                <FontAwesomeIcon icon={faList} /> Manage Services
              </Link>
            </li>
            <li>
              <Link to="/addService">
                <FontAwesomeIcon icon={faPlus} /> Add Service
              </Link>
            </li>
            <li>
              <Link to="/addAdmin">
                <FontAwesomeIcon icon={faPlus} /> Add Admin
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/orders">
                <FontAwesomeIcon icon={faList} /> Orders
              </Link>
            </li>
            <li>
              <Link to="/addReview">
                <FontAwesomeIcon icon={faPlus} /> Review
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
