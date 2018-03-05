import React from "react";

//inside the home component 

// input text your company
// input text your keywords


class UserInputText extends React.Component {

    constructor() {
        super();
        this.state = {
            icons: [],
            query1: '',
            query2: '',
            query3: '',
            searchQueries: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchIcons = this.searchIcons.bind(this);
        this.onClick = this.onClick.bind(this);
        this.runAxiosRequest = this.runAxiosRequest.bind(this);
    }
    componentDidMount() {

    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onClick(e) {
        e.preventDefault();
        this.state.searchQueries.push(this.state.query1, this.state.query2, this.state.query3);
        this.runAxiosRequest();
    }

    //map over the newly populated searchQueries array, to pull out the queries so we can pass them
    //into the searchIcons function as a query below.
    runAxiosRequest() {
        this.finalIcons = this.state.searchQueries.map((query) => {
            this.searchIcons(query);
        });
    }

    //create a function to run the API request passing in each query
    searchIcons(query) {
        axios.get("https://brandit2018.herokuapp.com/v1/", {
            params: {
                url: `icons/${query}`,
                params: JSON.stringify({
                    limit: 2
                })
            }// once we recieve the data, map over it to pull out the individual icons and push
            //them onto the icons empty array.
        }).then(({ data }) => {
            console.log(data);
            data.icons.map((icon) => {
                this.state.icons.push(icon);
            }); //then set the state
            this.setState({
                icons: this.state.icons
            });
        });
    }

    render() {
        return (
            <div>
                <p>hello header</p>

                <form onSubmit={this.onClick}>

                    <label htmlFor="query1"></label>
                    <input type="search" value={this.state.query1} placeholder="tag 1" onChange={this.handleChange} id="query1" required />

                    <label htmlFor="query2"></label>
                    <input type="search" value={this.state.query2} placeholder="tag 2" onChange={this.handleChange} id="query2" required />

                    <label htmlFor="query3"></label>
                    <input type="search" value={this.state.query3} placeholder="tag 3" onChange={this.handleChange} id="query3" required />

                    <input type="submit" value="Search for Icons" />
                </form>

                {this.state.icons.map(icon => {
                    return <SingleIcon icon={icon} key={icon.id} />;
                })}

            </div>
        )
    }
}

export default UserInputText;


