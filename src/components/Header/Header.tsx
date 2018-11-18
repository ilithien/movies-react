import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import './Header.sass';

export default function Header() {
  return (
    <div className="Header">
      <h1><Link to='/'>Movie finder</Link></h1>
      <LoginForm />
    </div>
  )
}
