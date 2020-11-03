import axios from 'axios';
import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

// Main container that will hold the courses.
class Course extends Component {
    constructor(props){
        super(props);
    }

    addClass = (event) => {
        event.preventDefault();
        let prop = this.props.class;
        axios.get('api/add/schedule', { params: {newCourse: prop["crsTag"], name: prop["crsName"], component: prop["component"], lecture: prop["lecture"]}}).then(response => {
            this.props.history.push('/schedule')
        })
        // Push the /schedule page onto the browser stack. 
        // this.props.history.push('/schedule')
    }

    render(){
        let v = this.props.class;
        let component = v["component"] === null ? "" : "LAB: "+v["component"]+" ";
        return(
            <div className="courseContainer">
                <table style={{width: "100%"}} id={v["crsName"]} className="courseTable">
                    <tbody>
                        <tr>
                            <th width="5%">{this.props.count}</th>
                            <th width="15%" style={{fontSize: "16px"}}>{v["crsTag"]}</th>
                            <th width="72%" style={{fontSize: "16px"}}>{v["crsName"]}</th>
                        </tr>
                        <tr>
                            <td/>
                            <td>Same Courses</td>
                            <td>by {v["instr"]} Credit: </td>
                            <td>
                                <button id="add" type="button" className="btn btn-primary" onClick={this.addClass}>Add</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{component}LEC: {v["lecture"]} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter (Course);
