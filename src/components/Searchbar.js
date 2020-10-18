import React, {Component, useEffect, useState} from 'react';

class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state={query: ''}
    }
    submitHandler = (event) => {
        event.preventDefault();
    }
    render(){
        return(
            <div className="searchbar">
                <form onSubmit={this.submitHandler} style={{width:'100%', display:'flex', alignItems:'center'}}>
                    <input id="searchQuery" type='text' placeholder="Search (ex: CSE, CSE114, CSE1, 3, ... )" style={{margin:'5px 10px 5px 5px'}} autoComplete="off"/>
                    <select id="searchField" className="custom-select" name="search">
                        <option value="all">All Fields</option>
                        <option value="title">Title</option>
                        <option value="classNum">Class Number</option>
                        <option value="day">Day</option>
                        <option value="time">Time</option>
                    </select>
                    <input type='submit' value="Find" id="searchSubmit" style={{margin:'5px 5px 5px 10px'}}/>
                </form>
                {/* </div> */}
            </div>
        )
    }
}

export default Searchbar