import React, { Component } from 'react';
import axios from 'axios';
import Course from './Course';
// Main container that will hold the courses.
class CourseList extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: []
        };
    }

    componentDidMount(){
        axios.get("http://localhost:5000/").then(response => {
            this.setState({courses: response.data});
            // console.log("componentWillMount Courses: ", this.state.courses);
        });
    }
    componentDidUpdate(){
        // console.log("In the component did update: ", this.props.courses.data);
    }

    render() {
        let counter = 0;
        if(this.props.courses.data === undefined){
            // console.log("First load");
            // console.log("Checking state: ", this.state.courses);
            if(this.state.courses.length === 0){
                return null;
            }
            else{
                // this.state.courses.data.map( result => {
                //     console.log(result);
                return(
                    this.state.courses.data.map( result => {
                        counter += 1;
                        return(
                            // <div className="courseList">
                            <Course key={result.crsTag} class={result} count={counter}/>
                            // </div>
                        )
                    })
                )
            }
        }
        else{
            console.log("Testing: ", this.props.courses.data)
            return(
                this.props.courses.data.map( result => {
                    counter += 1;
                    return(
                        // <div className="courseList">
                        <Course key={result.crsTag} class={result} count={counter}/>
                        // </div>
                    )
                })
            );
        }
    }
    
}
 
export default CourseList;