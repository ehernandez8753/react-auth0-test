import React, {Component} from 'react';
import TvShows from "./components/TvShows.js";
import Movies from "./components/Movies.js";
import auth from "./auth/service";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  componentDidUpdate(){
    let isLoggedIn = localStorage.isLoggedIn;
    this.setState({loggedIn: isLoggedIn});
  }

  loggedIn = () => {
    this.setState({
      loggedIn: true
    });
  }

  loggedOut = () => {
    this.setState({
      loggedIn: false
    });
  }

  render(){
    return(
      <div>
        {this.state.loggedIn ? <Movies /> : <TvShows />}
        {this.state.loggedIn ? (
          <button onClick={() => auth.logout()} className="log-in">
            Log Out
          </button>
        ) : (
          <button onClick={() => auth.login()} className="log-in">
            Log In
          </button>
        )}
        <button onClick={() => auth.logout()} className="log-in">
            Log Out
          </button>
      </div>
    )
  }
}

export default App;
