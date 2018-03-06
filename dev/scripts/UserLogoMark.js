import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserLogoMark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: [],
      name: [],
      logoStyle: "",
      logoState: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if you want to play with a sample image:
  componentDidMount() {
    const dbref = firebase.database().ref("/choice");
    dbref.on("value", snapshot => {
      console.log("hey");
      const data = snapshot.val();
      const state = [];
      for (let key in data) {
        state.push(data[key]);
      }
      console.log(data);
      this.setState({
        choice: state
      });
    });

    const dbref2 = firebase.database().ref("/name");
    dbref2.on("value", snapshot => {
      console.log("hey");
      const data = snapshot.val();
      const state = [];
      for (let key in data) {
        state.push(data[key]);
      }
      console.log(data);
      this.setState({
        name: state
      });
    });
  }

  handleChange(e) {
    this.setState({
      logoStyle: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const logo = this.state.logoStyle;
    const dbref = firebase.database().ref("/logo");
    dbref.push(logo);
    this.setState({
      logoState: true
    });
  }

  render() {
    return <div className="userLogoMark-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <div className="logo-01-mark">
              <img src="./dev/assets/logo-01.svg" alt="" />
              <div className="logo-01">
                <img src={this.state.choice} alt="" />
              </div>
              <div className="logo-01-icon">
                <img src={this.state.choice} alt="" />
              </div>
              <h3>{this.state.name}</h3>
            </div>

            <input type="radio" value="option1" onChange={this.handleChange} checked={this.state.logoStyle === "option1"} />
          </label>

          <label>
            <div className="logo-02-mark">
              <img src="./dev/assets/logo-02.svg" alt="" />
              <div className="logo-02">
                <img src={this.state.choice} alt="" />
              </div>
              <div className="logo-02-icon">
                <img src={this.state.choice} alt="" />
              </div>
              <h3>{this.state.name}</h3>
            </div>
            <input type="radio" value="option2" onChange={this.handleChange} checked={this.state.logoStyle === "option2"} />
          </label>

          <label>
            <div className="logo-03-mark">
              <img src="./dev/assets/logo-03.svg" alt="" />
              <div className="logo-03">
                <img src={this.state.choice} alt="" />
              </div>
              <h3>{this.state.name}</h3>
            </div>
            <input type="radio" value="option3" onChange={this.handleChange} checked={this.state.logoStyle === "option3"} />
          </label>

          <input type="submit" value="Choose an Icon" />
        </form>

        {this.state.logoState === true && this.state.logoStyle === "option1" ? <div className="logo-01-mark">
            <img src="./dev/assets/logo-01.svg" alt="" />
            <div className="logo-01">
              <img src={this.state.choice} alt="" />
            </div>
            <div className="logo-01-icon">
              <img src={this.state.choice} alt="" />
            </div>
            <h3>{this.state.name}</h3>
          </div> : null}

        {this.state.logoState === true && this.state.logoStyle === "option2" ? 
         <div className="logo-02-mark">
              <img src="./dev/assets/logo-02.svg" alt="" />
              <div className="logo-02">
                <img src={this.state.choice} alt="" />
              </div>
              <div className="logo-02-icon">
                <img src={this.state.choice} alt="" />
              </div>
              <h3>{this.state.name}</h3>

          
          </div> : null}
      
      
      
{this.state.logoState === true && this.state.logoStyle === "option3" ? <div className="logo-03-mark">
              <img src="./dev/assets/logo-03.svg" alt="" />
              <div className="logo-03">
                <img src={this.state.choice} alt="" />
              </div>
              <h3>{this.state.name}</h3>
            </div>
          : null}

      
      
      </div>;




  }
}

export default UserLogoMark;