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
        });
    }

    render() {
        let counter = 0;
        if(this.props.courses.data === undefined){
            if(this.state.courses.length === 0){
                return null;
            }
            else{
                return(
                    this.state.courses.data.map( result => {
                        counter += 1;
                        return(
                            <Course key={result.crsTag} class={result} count={counter}/>
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
                        <Course key={result.crsTag} class={result} count={counter}/>
                    )
                })
            );
        }
    }
    
}
 
export default CourseList;