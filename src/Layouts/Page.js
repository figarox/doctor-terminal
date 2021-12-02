import React from "react";
import { Route } from "react-router-dom";
import PageMain from "../Page/Terminal";
import PageSetting from "../Page/Settings";
import PagePatient from "../Page/Patients";

const Page = () => {
    return ( 
        <>
            <switch>
                <Route path="/" exact component={PageMain}/>
                <Route path="/patient" exact component={PagePatient}/>
                <Route path="/settings" exact component={PageSetting}/>
            </switch>
        </>
     );
}
 
export default Page;