import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function MentorMain() {
    return (
        <div>
            <div id="zen-header-bar" className="zen-header">
            <h4>MentorJourney</h4>
        <div className="zen-sub-journey-container">
        <Link to="/mentor/create"><p className="zen-sub-journey-link">CreateMentor</p></Link>
        <Link to="/mentor/manage"><p className="zen-sub-journey-link">ManageMentor</p></Link>
        </div>
        </div>
        <Outlet />
        </div>
    )
}