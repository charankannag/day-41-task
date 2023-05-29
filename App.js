import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateStudent from './Journey/StudentJourney/CreateStudent';
import ManageStudent from './Journey/StudentJourney/ManageStudent';
import StudentJourney from './Journey/StudentJourney/Main';
import MentorMain from './Journey/MentorJourney/MentorMain';
import CreateMentor from './Journey/MentorJourney/CreateMentor';
import ManageMentor from './Journey/MentorJourney/ManageMentor';
import SessionMain from './Journey/SessionJourney/SessionMain';
import CreateSession from './Journey/SessionJourney/CreateSession';
import ManageSession from './Journey/SessionJourney/ManageSession';
function App() {
  return (
    <div id="zen-landing-page-container" className="app-container">
      <div id="zen-header-bar" className="zen-header">
          <img 
          className="brand-logo" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s" 
          alt="Zen-class-logo"
          />
          Zen Classes
          </div>
          <div id="zen-content-area-container" 
          className="zen-content-area-container"
          >
            <div id="zen-sidebar" className="zen-sidebar">
              <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
                <ul>
                  <li>
                    <Link to="/students"></Link>Student Journey</li>
                  <li>
                    <Link to="/mentor"></Link>Mentor Journey</li>
                  <li>
                    <Link to="/session"></Link>Session Journey</li>
                </ul>
              </nav>
            </div>
            <div id="zen-content-area" className="zen-content-area">
              
              <Routes>
                <Route path="students" Component={StudentJourney}>
                   <Route path="create" Component={CreateStudent} />
                   <Route path="manage" Component={ManageStudent} />
                 </Route>  
              </Routes>
              <Routes>
                <Route path="mentor" Component={MentorMain}>
                   <Route path="create" Component={CreateMentor} />
                   <Route path="manage" Component={ManageMentor} /> 
                </Route>
              </Routes>
              <Routes>
                <Route path="session" Component={SessionMain}>
                    <Route path="create" Component={CreateSession} />
                    <Route path="manage" Component={ManageSession} />
                </Route>
              </Routes>
              </div>
          </div>
    </div>
  );
}

export default App;
