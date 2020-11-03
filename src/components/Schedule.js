import React, { Component } from 'react';
import axios from 'axios';
import Day from './Day'

class Schedule extends Component {
    constructor(props){
        super(props);
        this.state={
            currentSchedule: []
        };
    };

    componentDidMount(){
        let res = ''
        axios.get('/schedule').then(response => {
            res = response
            this.setState({currentSchedule: response.data});
        });
        this.setState({currentSchedule: res});
        this.props.history.push('/schedule')
    }


    toSearch = () => {
        this.props.history.push('/')
    }
    
    render(){
        document.body.style = 'background-color: #990000; maxWidth:100%; height:100vh; overflow: auto';
        return(
            <div className="schedulePage">
                <div className="weekContainer" width="100%">
                    <div className="week">
                        <p> SUN </p>
                        <div className="day">
                            <Day day="S"/>
                        </div>
                    </div>
                    <div className="week">
                        <p> MON </p>
                        <div className="day">
                            <Day day="M"/>
                        </div>
                    </div>
                    <div className="week">
                        <p> TUE </p>
                        <div className="day">
                            <Day day="TU"/>
                        </div>
                    </div>
                    <div className="week">
                        <p> WED </p>
                        <div className="day">
                            <Day day="W"/>
                        </div>
                    </div>
                    <div className="week">
                        <p> THU </p>
                        <div className="day">
                            <Day day="TH"/>
                        </div>
                    </div>
                    <div className="week">
                        <p> FRI </p>
                        <div className="day">
                            <Day day="F"/>
                        </div>
                    </div>
                    <div className="week">
                        <p> SAT </p>
                        <div className="day">
                            <Day day="ST"/>
                        </div>
                    </div>
                </div>
                <button id="backToSearch" type="button" className="btn btn-primary" onClick={this.toSearch}>Back to Search</button>
            </div>
        )
    }
}

export default Schedule