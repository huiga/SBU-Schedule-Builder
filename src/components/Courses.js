import React, { Component } from 'react';

// Main container that will hold the courses.
class Courses extends Component {
    state = {
        courses: []
    }

    componentDidMount(){
        let query = this.props.query;
        let qfield = this.props.field;
        console.log(query);
        console.log(qfield);
        // fetch("http://localhost:5000/", )
    }
    render() { 
        return(
            <div class="courseContainer" name="courseContainer">
                <p>{this.props.query}</p>
                <p>{this.props.field}</p>
            </div>
        );
    }
}
 
export default Courses;