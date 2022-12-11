import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    error: '',
  }

  clickToChangeName = event => {
    if (event.target.value === '') {
      this.setState({error: 'plz userName provide'})
    }
    this.setState({userName: event.target.value})
  }

  clickToChangePassword = event => {
    if (event.target.value === '') {
      this.setState({error: 'plz provide password'})
    }
    this.setState({password: event.target.value})
  }

  clickToSubmit = async event => {
    event.preventDefault()
    const {history} = this.props
    const {userName, password} = this.state
    const userDetails = (userName, password)
    // console.log(userName, password)
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const fetchedData = await fetch(url, option)
    const data = await fetchedData.json()
    console.log(data.statusCode)
    if (fetchedData.ok === true) {
      history.replace('/')
    }
  }

  render() {
    const {error} = this.state
    console.log(error)
    return (
      <>
        <div className="form-img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="img"
          />
          <form className="form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-img img-form"
            />
            <div className="container">
              <div className="user-pass">
                <label htmlFor="userName">USERNAME</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Username"
                  onChange={this.clickToChangeName}
                />
              </div>
              <div className="user-pass">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.clickToChangePassword}
                />
              </div>
            </div>
            <div className="button">
              <button
                type="submit"
                className="button1"
                onClick={this.clickToSubmit}
              >
                Login
              </button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      </>
    )
  }
}
export default LoginForm
