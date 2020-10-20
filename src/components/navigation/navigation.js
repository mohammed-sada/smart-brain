import React from 'react';
import '../navigation/navigation.css';

const Navigation = ({ onChangeRoute, signedin }) => {
    if (signedin) {
        return <div className="signIn">
            <p onClick={() => onChangeRoute('signin')} className="link dib f3 black pa3 pointer ma2 grow ">Sign out</p>
        </div>
    } else return <nav className="signIn">
        <p onClick={() => onChangeRoute('signin')} className="link dib f3 black pa3 pointer ma2 grow ">Sign in</p>
        <p onClick={() => onChangeRoute('register')} className="link dib f3 black pa3 pointer ma2 grow ">Register</p>
    </nav>

}

export default Navigation;