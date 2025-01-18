import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    if (this.context.token === '') {
      return (
        <div className="align-valign-center">
        <h2 className="text-center">ADMIN LOGIN</h2>
        <form>
        <table className="align-center">
        <tbody>
        <tr>
        <td>Username</td>
        <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this
      .setState({ txtUsername: e.target.value }) }} /></td>
 25 </tr>
 26 <tr>
 27 <td>Password</td>
 28 <td><input type="password" value={this.state.txtPassword} onChange={(e) => {
 this.setState({ txtPassword: e.target.value }) }} /></td>
 29 </tr>
 30 <tr>
 31 <td></td>
 32 <td><input type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)}
 /></td>
 33 </tr>
 34 </tbody>
 35 </table>
 36 </form>
 37 </div>
 38 );
 39 }
 40 return (<div />);
 41 }
 42 // event-handlers
 43 btnLoginClick(e) {
 44 e.preventDefault();
 45 const username = this.state.txtUsername;
 46 const password = this.state.txtPassword;
 47 if (username && password) {
 48 const account = { username: username, password: password };
 49 this.apiLogin(account);
 50 } else {
 51 alert('Please input username and password');
 52 }
 53 }
 54 // apis
 55 apiLogin(account) {
 56 axios.post('/api/admin/login', account).then((res) => {
 57 const result = res.data;
 58 if (result.success === true) {
 59 this.context.setToken(result.token);
 60 this.context.setUsername(account.username);
 61 } else {
 62 alert(result.message);
 63 }
 64 });
 65 }
 66 }
 67 export default Login;
