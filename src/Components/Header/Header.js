import React from 'react';
import { Link } from 'react-router-dom';

const homePage = { text: "User CRUD App", link: "/" };
const usersPage = { text: "Users", link: "users" };

function Header() {
    return (<nav className="navbar navbar-expand-xl navbar-dark bg-primary">
            <a className="navbar-brand" href={homePage.link}>{homePage.text}</a>
            <button className="navbar-toggler"
                    type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active"><Link className="nav-link" to={homePage.link}>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={usersPage.link}>{usersPage.text}</Link></li>
                </ul>
            </div>
        </nav>);
}

export default Header;