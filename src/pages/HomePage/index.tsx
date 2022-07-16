import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

const HomePage: FC<any> = (): ReactElement => {
    return (
        <div className="home-page">
            Contains these modules:
            <ul>
                <li><NavLink to="/todos">Todos</NavLink></li>
            </ul>
        </div>
    )
}

export default HomePage;
