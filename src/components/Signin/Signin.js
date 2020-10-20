import React, { Component } from 'react';


class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: ''
        }
    }

    onSigninEmail = (event) => {
        this.setState({ signinEmail: event.target.value })
    }
    onSigninPassword = (event) => {
        this.setState({ signinPassword: event.target.value })
    }
    onButtonSubmit = () => {
        fetch('https://tranquil-mountain-83090.herokuapp.com//signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    this.props.loadUser(data);
                    this.props.onChangeRoute('home');
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
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input onChange={this.onSigninEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input onChange={this.onSigninPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onChangeRoute('register')} className="f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Signin;