import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// • Un clique sur un bouton permet de choisir une image
// • Une fois la photo prise, la liste des utilisateurs enregistrés doit apparaître.
// • Vous devez sélectionner la personne à qui envoyer l’image, et choisir la durée

export class AddPictures extends Component {

  //constructeur: pour récuperer les inputs
  constructor(){
    super()
    // const tabb = JSON.parse(localStorage.getItem('tab'));
    // console.log(tabb);
    this.state = {
      picture: null,
      list: null,
      tab: []

      // redirect:false
  };
  }

  //componentdimount: récuperer les destinataire. fetch
  componentDidMount() {
   const token = localStorage.getItem('token');
   console.log("token = " + token)
    fetch('http://localhost:6088/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': token,
          'access-control-allow-origin': '*'
        }
   }).then(res => res.json())
   .then(
     data => {
      console.log("DATA = ", data)
      localStorage.setItem('tab', JSON.stringify(data.data));
      this.setState({tab : JSON.parse(localStorage.getItem('tab'))});      
    } )       
   .catch(err => console.log(err))
  }
    
  change = e => {
          this.setState({
              [e.target.id]: e.target.value
          })
      }

  submit = e => {
      e.preventDefault();
    }

  //render 
  render() {
      if (this.state.redirect)
          return <Redirect to='/AddPictures' /> 
      return(
            <div className="container">
              <form onSubmit={this.submit}
              encType="multipart/form-data">
              <input name="profile_picture" type="file" id="picture"/>
              <div className="form_show">
                  <select name="contact" id="list">
                  <option value="">--Choisissez un contact--</option>
                  {this.state.tab.length > 0 ?
                   this.state.tab.map((key, value) =>
                    <option key={value} value={key.email}>{key.email}</option>
                  ) : ""
                }
                </select> 
              </div>
              </form>
            </div>
      );
  }
}

export default AddPictures;