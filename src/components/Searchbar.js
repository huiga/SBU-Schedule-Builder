import React, {Component, useEffect, useState} from 'react';
import Courses from './Courses';

class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            tQuery: '',
            tSearchField: 'all',
            fQuery: '',
            fSearchField: ''
        };
    }
    submitHandler = (event) => {
        event.preventDefault();
        // State should be set upon search field changed by the onChange handlers.
        // Now, set the final states so that Courses can do backend query
        this.setState({fQuery: this.state.tQuery, fSearchField: this.state.tSearchField});
        console.log(this.state.fQuery);
        console.log(this.state.fSearchField);
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
                <div className="courseList">
                    <Courses query={this.state.fQuery} queryField={this.state.fSearchField} />
                </div>
            </div>
        )
    }
}

export default Searchbar