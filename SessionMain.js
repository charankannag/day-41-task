import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function SessionMain () {
    return (
        <div><div id="zen-header-bar" className="zen-header">
        <h4>SessionJourney</h4>
    <div className="zen-sub-journey-container">
    <Link to="/session/create"><p className="zen-sub-journey-link">CreateSession</p></Link>
    <Link to="/session/manage"><p className="zen-sub-journey-link">ManageSession</p></Link>
    </div>
    </div>
    <Outlet /></div>
    )
}