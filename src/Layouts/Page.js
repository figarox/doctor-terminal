import React from "react";
import { Route } from "react-router-dom";
import PageMain from "../Page/Terminal";
import PageSetting from "../Page/Settings";

const Page = () => {
    return ( 
        <>
            <switch>
                <Route path="/" exact component={PageMain}/>
                <Route path="/settings" exact component={PageSetting}/>
            </switch>
        </>
     );
}
 
export default Page;