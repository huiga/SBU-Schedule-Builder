import React, {Component} from 'react';
import Searchbar from './Searchbar'
import CourseList from './CourseList'
class Main extends Component {
    state = {
        courses: []
    }

    searchCallBack = (dataFromSearch) => {
        console.log("IN MAIN: ", dataFromSearch);
        this.setState({courses: dataFromSearch});
    }

    loadSchedule = (event) => {
        this.props.history.push('/schedule')
    }
    
    render(){
        document.body.style = 'background-color: #990000; maxWidth:100%; height:100vh; overflow: auto';
        return(
            <div className="page">
                <div className="header">
                    <div display="inline-block">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Stony_Brook_U_logo_horizontal.svg/1280px-Stony_Brook_U_logo_horizontal.svg.png" height="60px" width="320px"/>
                    <button type="button" className="btn btn-primary" style={{float: 'right', margin: '15px 15px', fontSize: '16px'}} onClick={this.loadSchedule}>Go to Schedule</button>
                    </div>
                    <hr/>
                    <Searchbar callbackFromParent={this.searchCallBack}/>
                </div>
                <CourseList courses={this.state.courses}/>
            </div>
        )
    }
}

export default Main