import React from "react";


// signin popup

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: {}
        };

        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    componentDidMount() {
        //setting up google authentication
        firebase.auth().onAuthStateChanged((response) => {
            // console.log(response);
            if (response) {
                this.setState({
                    loggedIn: true,
                    user: response
                })
            } else {
                this.setState({
                    loggedIn: false,
                    user: {}
                })
            }
        })
    }

    signIn() {
        console.log("signing In!");
        //creating a new instance of google auth provider
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        })

        firebase.auth().signInWithPopup(provider)
            .then((user) => {
                console.log(user);
            });
    }

    signOut() {
        console.log("Sing out working!");
        firebase.auth().signOut();
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div className="signin-container">
                <div className="signin">
                    {this.state.loggedIn ?
                        <div>
                            <h1>Hello!</h1>
                            <a href=""></a>
                            <button onClick={this.signOut}>Sign Out</button>
                        </div>

                        :
                        <div>
                            <h1>Brand It</h1>
                            <h4>Please sign in:</h4>
                            <button onClick={this.signIn}>Google</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
};

export default SignIn;