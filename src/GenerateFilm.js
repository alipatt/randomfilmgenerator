import React, { Component } from 'react'
import "./css/gfilm.css"

export default class GenerateFilm extends Component {

    render() {
        return (
            <div>
                <h1>Random Film</h1>
                {this.props.movie===String?   false  : <button onClick={()=>this.props.randMovie()} >Search</button>}
            </div>
        )
    }
}
