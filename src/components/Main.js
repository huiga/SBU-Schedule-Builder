import React, {Component} from 'react';
import Searchbar from './Searchbar'
// import Courses from './Courses'

class Main extends Component {
    state = {}
    render(){
        document.body.style = 'background-color: #990000; maxWidth:100%; height:100vh; overflow: auto';
        return(
            <div className="page">
                <div className="header">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Stony_Brook_U_logo_horizontal.svg/1280px-Stony_Brook_U_logo_horizontal.svg.png" height="60px" width="320px"/>
                    <hr/>
                    <Searchbar/>
                </div>
            </div>
        )
    }
}

export default Main