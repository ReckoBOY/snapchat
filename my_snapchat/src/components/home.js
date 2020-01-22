import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


export class Home extends Component {

  componentDidMount() {
    const tok = localStorage.removeItem('token');
  }

    render()  {
      // localStorage.setItem('token', null);
      // const i = localStorage.getItem('token');
      // console.log(i)
      return (
        <div className="center">
          <div className="container2">
            <h2>Snapchat</h2>
            <img src="images/logo.png" alt="Logo snapchat" />
            <div className="align">
              <div className="btn cercle2 rounded-circle btn-primary btn-lg shadow m-3">
                <Link to="/inscription">Inscription</Link>
              </div>
              <br/>
              <div className="btn cercle3 rounded-circle btn-primary btn-lg shadow m-3">
                <Link to="/login">Connexion</Link>
              </div>
            </div>  
            </div>
        </div>
        );
      }
    }

export default Home;