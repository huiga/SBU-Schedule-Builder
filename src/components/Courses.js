import React, { Component } from 'react';
import axios from 'axios';

// Main container that will hold the courses.
class Courses extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     courses = []
        // };
    }
    componentDidMount(){
        console.log("mounting");
        let query = this.props.query;
        let qfield = this.props.queryField;
        axios.get("/api/", { params: { search: query, field: qfield }}).then(response => {
            console.log(response.data);
        })
        // axios.get('/').then(response => {
        //     console.log(response.data);
        // })
    }
    render() { 
        return(
            <div className="courseContainer" name="courseContainer">
                <p>{this.props.query}</p>
                <p>{this.props.queryField}</p>
            </div>
        );
    }
}
 
export default Courses;