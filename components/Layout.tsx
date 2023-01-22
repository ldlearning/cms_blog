import React from "react";
import {Header, NavBar} from "./index";

function Layout({children} : any) {
    return (
        <div>
            <Header/>
            {/*<NavBar/>*/}
            {children}
        </div>
    );
};


export default Layout;