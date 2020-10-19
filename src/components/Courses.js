import React, { Component } from 'react';
import axios from 'axios';

// Main container that will hold the courses.
class Courses extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: []
        };
    }
    // First time the component mounts onto screen, it loads all 
    // default view of all classes possible (maybe in a list)
    // componentdidmount only runs once in the lifecycle of component.
    // SO, you can use this to initialize the beginning list of everything 
    componentWillMount(){
        axios.get("http://localhost:5000/").then(response => {
            this.setState({courses: response.data});
            console.log("componentWillMount Courses: ", this.state.courses);
        })
    }

    componentDidUpdate(){
        // NTS: 
        // States are directly manipulated by component itself. 
        // Props are passed to a component from a parent for it to use.
        // In this case, the props are what you will be using to render the 
        // course list. 
        console.log("In the component did update: ", this.props.queriedValues);
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