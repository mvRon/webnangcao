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
                  <td><input type="text" value={this.state.txtUsername} onChange={(e) => {
                    this.setState({ txtUsername: e.target.value })
                  }}/></td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <input type="password" value={this.state.txtPassword} onChange={(e) => {
                    this.setState({ txtPassword: e.target.value })
                  }}/>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {/* <input type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)}/> */}
                    <button type='submit' value="LOGIN" onClick={(e) => this.btnLoginClick(e)}>LOGIN</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      );
    }
    return (<div/>);
  }

  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      console.log("Sending account: ", account);
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('http://localhost:3000/api/admin/login', account)
    .then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
        alert(result.message);
      } else {
        alert(result.message);
      }
    })
    .catch((error) => {
      // In chi tiết lỗi
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your username and password.');
    });
  }
}
export default Login;