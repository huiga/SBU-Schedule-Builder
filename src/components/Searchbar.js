import React, {Component} from 'react';
import axios from 'axios';
import Courses from './Courses';

class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            tQuery: '',
            tSearchField: 'all',
            courses: []
        };
    }


    submitHandler = (event) => {
        event.preventDefault();
        // State should be set upon search field changed by the onChange handlers.
        // Do the backend queries here so that you can send new props to 
        // the componenet Courses so it will rerender based on the elements. 
        // this.setState({fQuery: this.state.tQuery, fSearchField: this.state.tSearchField});

        //equivalent to axios.get('http://localhost:5000/api/?search=<tQuery>&field=<tSearchField>')
        console.log("Finding", this.state.tQuery, this.state.tSearchField);
        axios.get("/api/get", { params: { search: this.state.tQuery, field: this.state.tSearchField }}).then(response => {
            console.log(response.data);
            this.setState({courses: response.data});
            this.props.callbackFromParent(response.data);
        });
    }
    queryHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        this.setState({tQuery: event.target.value});
    }
    searchFieldHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        this.setState({tSearchField: event.target.value});
    }
    render(){
        return(
            <div className="searchbar">
                <form onSubmit={this.submitHandler} style={{width:'100%', display:'flex', alignItems:'center'}}>
                    <input id="searchQuery" type='text' placeholder="Search (ex: CSE, CSE114, CSE1, 3, ... )" 
                        style={{margin:'5px 10px 5px 5px'}} autoComplete="off" onChange={this.queryHandler}/>
                    <select id="searchField" className="custom-select" name="search" onChange={this.searchFieldHandler}>
                        <option value="all">All Fields</option>
                        <option value="title">Title</option>
                        <option value="classNum">Class Number</option>
                        <option value="day">Day</option>
                        <option value="time">Time</option>
                    </select>
                    <input type='submit' value="Find" id="searchSubmit" style={{margin:'5px 5px 5px 10px'}}/>
                </form>
                {/* <div className="courseList">
                    <Courses queriedValues={this.state.courses} />
                </div> */}
            </div>
        )
    }
}

export default Searchbar