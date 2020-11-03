import React, { Component } from 'react';
import axios from 'axios';


class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            todaysCourses: []
        };
    };

    componentDidMount(){
        axios.get("/api/get/day", {params: {day: this.props.day}}).then(response => {
            let filter = response.data
            if(filter === undefined || filter.data === undefined){
                this.setState({todaysCourses: response.data});
            }
            else{
                let filteredCourses = []
                for(let i = 0; i < filter.data.length; i++){
                    let crs = filter.data[i]
                    if(crs['component'] !== 'null'){
                        let compDay = crs['component'].substring(0, crs['component'].indexOf(" "))
                        if(compDay.indexOf(this.props.day) !== -1){
                            filteredCourses.push(crs)
                            continue
                        }
                    } 
                    let lecDay = crs['lecture'].substring(0, crs['lecture'].indexOf(" "))
                    if(lecDay.indexOf(this.props.day) !== -1){
                        filteredCourses.push(crs)
                    }
                }
                this.setState({todaysCourses: filteredCourses})
            }
        })
    }

    render() {
        if(this.state.todaysCourses.length !== 0) {
            let counter = 0;
            let arr = sortByTime(this.state.todaysCourses, this.props.day)
            return(
                arr.map( result => {
                    counter += 1;
                    let time = ''
                    if(result.component !== 'null'){
                        let comp = result.component
                        if(comp.substring(0, comp.indexOf(" ")).indexOf(this.props.day) === -1){
                            let lec = result.lecture
                            time = lec.substring(lec.indexOf(" ")+1, lec.indexOf("-"))
                        }
                        else {
                            time = comp.substring(comp.indexOf(' ')+1, comp.indexOf('-'))
                        }
                    }
                    else{
                        let lec = result.lecture
                        time = lec.substring(lec.indexOf(" ")+1, lec.indexOf("-"))
                    }
                    return(
                        <div className="dayCourse" key={counter}>
                            <p><strong>{time}</strong>   {result.course} {result.name}</p>
                        </div>
                    )
                })
            )
        }
        else{
            return(null)
        }
    }
}
function sortByTime(courses, day){
    let am = []
    let pm = []
    for(let i = 0; i < courses.length; i++){
        let crs = courses[i]
        let time = ''
        if(crs['component'] !== 'null'){
            if (crs['component'].substring(0,  crs['component'].indexOf(" ")).indexOf(day) > -1 && 
                crs['lecture'].substring(0, crs['lecture'].indexOf(" ")).indexOf(day) > -1){
                    let time1 = crs['lecture']
                    let time2 = crs['component']
                    let start1 = time1.substring(time1.indexOf(" ")+1, time1.indexOf("-"))
                    let start2 = time2.substring(time2.indexOf(" ")+1, time2.indexOf("-"))
                    if(start1.indexOf('AM') !== -1){
                        am.push(start1)
                    }
                    else{
                        pm.push(start1)
                    }
                    if(start2.indexOf('AM') !== -1){
                        am.push(start2)
                    }
                    else{
                        pm.push(start2)
                    }
                    continue;
                }
            if (crs['component'].substring(0,  crs['component'].indexOf(" ")).indexOf(day) === -1) {
                time = crs['lecture']
            }
            else {
                time = crs['component']
            }
        }
        else{
            time = crs['lecture']
        }
        let start = time.substring(time.indexOf(" ")+1, time.indexOf("-"))
        if(start.indexOf('AM') !== -1){
            am.push(start)
        }
        else{
            pm.push(start)
        }
    }
    am.sort()
    pm.sort()
    let sorted = am.concat(pm)
    let ret = []
    let courseDict = {}
    for(let i = 0; i < courses.length; i++){
        courseDict[courses[i]] = false
    }

    for(let i = 0; i < sorted.length; i++){
        for(let j = 0; j < courses.length; j++){
            let crs = courses[j]
            if(crs['component'] !== 'null'){
                if (crs['component'].substring(0, crs['component'].indexOf(" ")).indexOf(day) === -1) {
                    if(crs['lecture'].indexOf(sorted[i]) !== -1) {
                        ret.push(courses[j])
                    }
                }
                else if (crs['component'].substring(0, crs['component'].indexOf(" ")).indexOf(day) > -1 && !courseDict[crs]){
                    let copy = Object.assign({}, courses[j]);
                    copy['component'] = "null"
                    courseDict[crs] = true
                    ret.push(copy)
                    // courses[j]['component'] = "null"
                }
                else if (crs['component'].indexOf(sorted[i]) !== -1) {
                    let copy = Object.assign({}, courses[j]);
                    copy['lecture'] = "null"
                    ret.push(copy)
                }
            }
            else{
                if(crs['lecture'].indexOf(sorted[i]) !== -1){
                    ret.push(courses[j])
                }
            }
        }
    }
    return ret;
}

export default Day;