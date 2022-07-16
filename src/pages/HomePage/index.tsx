import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage: FC<any> = (): ReactElement => {
    return (
        <div className="homepage">
            Contains these modules:
            <ul>
                <li><NavLink to="/todos">Todos</NavLink></li>
                <li><NavLink to="/rehook">Hooks</NavLink></li>
            </ul>
        </div>
    )
}

export default HomePage;
