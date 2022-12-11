import {Component} from 'react'
import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-page-container">
          <div className="h1-p">
            <h1>Clothes That Get YOU Noticed</h1>
            <p className="para">
              Fashion is part of the daily air and it does not quite that help
              that it change all the time cloths have always been an marker of
              the era and we are in a revolution.your fashion makes you be seen
              and heared that the way you are,so celebrate seasons new and
              exciting fashion in your own way
            </p>
            <div className="home-button">
              <button type="button">shop now</button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="cloths-img"
          />
        </div>
      </>
    )
  }
}
export default Home
