import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h3>Sub page menu</h3>
            <ol>
                <li>
                    <Link to={'todos'}>todosPage</Link>
                </li>
                <li>
                    <Link to={'albums'}>albumsPage</Link>
                </li>
                <li>
                    <Link to={'comments'}>comments page</Link>
                </li>
            </ol>

            <div>
                <h3>sub view</h3>

            </div>
        </div>
    );
};

export default Layout;