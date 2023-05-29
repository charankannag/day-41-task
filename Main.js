import React from "react";
import { Outlet,Link } from "react-router-dom";

export default function Main() {
    return (
    <div>
        <div id="zen-header-bar" className="zen-header">
            <h4>StudentJourney</h4>
        <div className="zen-sub-journey-container">
        <Link to="/students/create"><p className="zen-sub-journey-link">CreateStudent</p></Link>
        <Link to="/students/manage"><p className="zen-sub-journey-link">ManageStudent</p></Link>
        </div>
        </div>
        <Outlet />
    </div>
    )
}