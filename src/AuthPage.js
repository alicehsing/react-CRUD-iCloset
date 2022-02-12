import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage(props) {
    //track form state of email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    //sign the user in using the form state
    const user = await signIn(email, password);
    //set the user in App.js state using the correct prop callback. 
    props.setUser(user);
  }

  async function handleSignUp() {
    const user = await signUp(email, password);
    props.setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>iCloset - Your entire wardrobe at your finger tip!</em></h1>
      <form onSubmit={handleSignIn}>
        <label> Email
          <input value={email} required type="email" name="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label> Password
          <input value={password} required type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="button" onClick={handleSignIn}>Sign In</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
