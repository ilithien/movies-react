import React, { Component } from 'react'
import './LoginForm.sass';

interface LoginFormState {
  username: string | null
  password: string
  error: string | null
  logged: boolean
}

export default class LoginForm extends Component<any, LoginFormState> {
  state = {
    username: '',
    password: '',
    error: null,
    logged: false
  }

  componentDidMount() {
    if (!!sessionStorage.getItem('user')) {
      this.setState({ logged: true, username: sessionStorage.getItem('user') })
    }
  }

  /**
   * Mock function to check if a username is valid
   */
  signIn = () => {
    const { username, password } = this.state;
    const validUsers = ['Dirty', 'Yoda', 'Frodo']
    const validPasswords = ['movies']

    if (validUsers.indexOf(username) === -1 || validPasswords.indexOf(password) === -1) {
      this.setState({ error: "Invalid username or password" })
    } else {
      sessionStorage.setItem('user', this.state.username);
      this.setState({ logged: true, error: null, password: '' })
    }

  }

  logout = () => {
    this.setState({ logged: false }, () => {
      sessionStorage.removeItem('user')
    })
  }

  onUserNameChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: value })
  }

  onPasswordChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: value })
  }

  render() {
    const { error, username, password, logged } = this.state;

    if (logged) {
      return <div className="status-logged">Welcome {username} !<button onClick={this.logout}>Log-out</button></div>
    }

    return (
      <div>
        <span>{error}</span>
        <div className="LoginForm">
          <input type="text" placeholder="Username" onChange={this.onUserNameChange} value={username} />
          <input type="password" placeholder="Password" onChange={this.onPasswordChange} value={password} />
          <button onClick={this.signIn}>Sign-in</button>
        </div>
      </div>
    )
  }
}

