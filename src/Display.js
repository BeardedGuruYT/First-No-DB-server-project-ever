import React, { Component } from 'react'

export class Display extends Component {
    render() {
        return (
<div>
    <a href={this.props.url}>
        <h1>{this.props.weather.description}</h1>
    </a>
</div>
        )
    }
}
export default Display