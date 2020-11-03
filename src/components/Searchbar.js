import React, {Component} from 'react';
import axios from 'axios';


class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            tQuery: '',
            tSearchField: 'all',
            courses: []
        };
    };


    submitHandler = (event) => {
        event.preventDefault();
        console.log("Finding", this.state.tQuery, this.state.tSearchField);
        axios.get("/api/get", { params: { search: this.state.tQuery, field: this.state.tSearchField }}).then(response => {
            this.setState({courses: response.data});
            this.props.callbackFromParent(response.data);
        });
    }
    queryHandler = (event) => {
        event.preventDefault();
        this.setState({tQuery: event.target.value});
    }
    searchFieldHandler = (event) => {
        event.preventDefault();
        this.setState({tSearchField: event.target.value});
    }
    render(){
        return(
            <div className="searchbar" width="100%">
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
                    <input type='submit' value="Find" id="searchSubmit" style={{margin: '5px 5px 5px 10px'}}/>
                </form>
            </div>
            
        )
    }
}

export default Searchbar