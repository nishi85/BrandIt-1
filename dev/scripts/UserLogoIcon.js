import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserLogoIcon extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state.icons2[0])
         this.state = {
        choice: ""
    };
    this.handleChoice = this.handleChoice.bind(this);

    }

      handleChoice(url) {
    //e.preventDefault();
    console.log(url);
    const choice = url;
    const dbref = firebase.database().ref("/choice");
    dbref.push(choice);
    this.setState({
      choice: choice
    });
  }

    render() {
        return <div>
            <p>Nishi</p>

            {this.props.location.state.icons.map(icon => {
              return <div className="icon_ctn">
                  <button onClick={() => {
                      this.handleChoice(icon.preview_url);
                    }}>
                    <img className="icon_fill" src={icon.preview_url} alt="" />
                  </button>
                </div>;
            })}

            {this.props.location.state.icons2.map(icon => {
              return <div className="icon_ctn">
                  <button onClick={() => {
                      this.handleChoice(icon.preview_url);
                    }}>
                    <img className="icon_fill" src={icon.preview_url} alt="" />
                  </button>
                </div>;
            })}

            {this.props.location.state.icons3.map(icon => {
              return <div className="icon_ctn">
                  <button onClick={() => {
                      this.handleChoice(icon.preview_url);
                    }}>
                    <img className="icon_fill" src={icon.preview_url} alt="" />
                  </button>
                </div>;
            })}

            <Link to={`/UserLogoMark`}>
               Next Page
            </Link>
          </div>;
    }
}

export default UserLogoIcon;

// 5555555555555555555555555555555555555