import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from "./Components/Home";
import ThemaProg from "./Components/ThemaProg";
import Indicateur from "./Components/indicateur";
import Contact from "./Components/Contact";
import ViewMachine from "./Components/viewMachine";


const BaseRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/thematique" exact component={ThemaProg}/>
            {/*<Route path="/thematique/projet/:ID" exact component={Project} />*/}
            <Route path="/indicateur" exact component={Indicateur}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/machine" exact component={ViewMachine}/>
            <Route path="/" component={() => <div
                style={{border: '1px solid black', height: '500px', marginTop: "100px", textAlign: 'center'}}>Erreur 404
                - page non trouvé </div>}/>
        </Switch>
    )

};

export default BaseRouter