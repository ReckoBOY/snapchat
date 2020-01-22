import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


export class Register extends Component {
    
    state = {
        email: null,
        password: null 
    };
    
    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentDidMount() {
        const tok = localStorage.getItem('token');
      }
    
    submit = e => {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:6088/inscription', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
           body: JSON.stringify( {
               email :this.state.email,
               password: this.state.password
            })
        }).then(res => res.json())
        .then(data => 
            {
                console.log(data)
                if(data.code === "E_USER_ALREADY_EXIST") {
                    alert('Cet utilisateur existe déja')
                }else if(data.code === "E_MISSING_FIELD") {
                    alert('Veuillez bien remplir les champs indiqué')
                }else if(data.code === "S_REGISTERED") {
                    this.setState({registed:true})
                }
            })
            .catch(err => console.log(err)
            )}
            
            render() {
                if (this.state.redirect === true){
                    return <Redirect to='/' />
                }
                if (this.state.registed === true){
                    console.log('oui monsieur')
                    return  <Redirect to='/login' />
                }
            return(
                <div>
                <form onSubmit={this.submit}>
                    <div className="container">
                        <div className="ali">
                            <h2>Inscription</h2>
                            
                            <div className="lilogo"><img src="images/lilogo.png" alt="logo" /></div>
                        </div>
                        <br/>
                        <label htmlFor ="email">Email:</label>
                        <input type="text" id="email" onChange={this.change}/>
                        <br/>
                        <label htmlFor ="password">password:</label>
                        <input type="password" id="password" onChange={this.change}/>
                        <br/>
                        <button className="btn cercle rounded-circle btn-primary btn-lg shadow mt-3 float-right" onClick={this._onPressButton}>Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;