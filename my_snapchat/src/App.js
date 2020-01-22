import React from 'react';
import {Register} from './components/Register';
import {Login} from './components/Login';
import {Home} from './components/home';
import {AddPictures} from './components/AddPictures';
import logo from './logo.svg';
import './App.css';
import { register } from './serviceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() { 
  return (
    <BrowserRouter>
        {/* <div className="main-route-place"> */}
          <Route exact path="/" component={Home} />
          <Route path="/inscription" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/AddPictures" component={AddPictures} />

          {/* <hr />
        </div> */}
      </BrowserRouter>
  );
}

// class Home extends React.Component {
 
//   render()  {
//     return (
//       <div className="center">
//         <div className="container">
//           <h2>Snapchat</h2>
//           <img src="images/logo.png" alt="Logo snapchat" />
//           <div className="align">
//             <div className="btn cercle2 rounded-circle btn-primary btn-lg shadow m-3">
//               <Link to="/inscription">Inscription</Link>
//             </div>
//             <br/>
//             <div className="btn cercle2 rounded-circle btn-primary btn-lg shadow m-3">
//               <Link to="/login">Connexion</Link>
//             </div>
//           </div>  
//           </div>
//       </div>
//       );
//     }
//   }

     
export default App;
