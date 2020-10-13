import React, {Component, useEffect, useState} from 'react';
import Searchbar from './Searchbar'

class Main extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={username: ''}
    // }
    render(){
        document.body.style = 'background-color: #990000; maxWidth:100%; height:100vh; overflow: auto';
        return(
            // <form onSubmit={this.mySubmitHandler}>
            //     <h1>Hello {this.state.username}</h1>
            //     <input type='text' onChange={this.myChangeHandler} />
            //     <input type='submit'/>
            // </form>
            <div class="header">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Stony_Brook_U_logo_horizontal.svg/1280px-Stony_Brook_U_logo_horizontal.svg.png" height="60px" width="320px"/>
                <hr/>
                <Searchbar/>
            </div>
        )
    }
}

export default Main