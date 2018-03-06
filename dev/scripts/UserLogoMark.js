import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserLogoMark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: [],
            name: []
        };
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

    render() {
        return (
            <div className="userLogoMark-container">
                
                <button>
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
                </button>
                

                <button>
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
                </button>

                <button>
                    <div className="logo-03-mark">
                        <img src="./dev/assets/logo-03.svg" alt="" />
                        <div className="logo-03">
                            <img src={this.state.choice} alt="" />
                        </div>
                        <h3>{this.state.name}</h3>
                    </div>
                </button>
                
            </div>
        )
    }
}

export default UserLogoMark;