import React, { Component } from 'react';
import './register.css';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onName = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    onPassword = (event) => {
        this.setState({ password: event.target.value })
    }

    onButtonSubmit = () => {
        fetch('https://tranquil-mountain-83090.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    this.props.loadUser(data);
                    this.props.onChangeRoute('home')
                }
            })
            .catch(console.log)
    }



    render() {
        const { onChangeRoute } = this.props;
        return (
            <article className="br3 ba b--black-20 mv4 w-100 w-50-m w-25-l mw7 center shadow-5" >

                <main className="pa4 black-80 ">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5 star" htmlFor="name">Name</label>
                                <input onChange={this.onName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5 star" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5 star" htmlFor="password">Password</label>
                                <input onChange={this.onPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onChangeRoute('signin')} className="f6 link dim black db pointer">already have an account ?<br></br>sign in </p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;