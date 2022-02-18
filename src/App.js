import React from "react";

import Header from "./Header";
import Footer from './Footer.js'
import Main from "./Main";

function App(){
    return(
        <React.Fragment>
            <Header name="Rocky Bhai" title="page"/>
            <Main/>
            <Footer />
        </React.Fragment>
    );
}

export default App;