import { UserList } from "./Components/UserList";
import { UserForm } from "./Components/AddUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./Components/About";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            KNILA IT SOLUTION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/adduser">
                  Add User
                </a>
              </li>{" "}
              <li className="nav-item active">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4 flex-grow-1">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/adduser" element={<UserForm />} />
              <Route path="/edituser/:id" element={<UserForm />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </div>

      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p>&copy; 2023 KNILA IT SOLUTION. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
