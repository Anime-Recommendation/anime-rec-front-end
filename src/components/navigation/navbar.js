import React, { Component } from "react";
import './css/navbar.css';

class Navbar extends Component {
    //render is needed BECAUSE it extends from Component
    // render inside the parenthesis you write javascript logic to decide what to show
    render(){
        return(
            <nav className="navbar navbar-dark bg-pink">
                <div className="container">
                    {/* href= is for specifying the url pages*/}
                    <a className="navbar-brand" href="/"><b>Anime Recommendation</b></a>

                    {/* Mobile support
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    */}


                </div>
            </nav>
        );
    }
}

export default Navbar;