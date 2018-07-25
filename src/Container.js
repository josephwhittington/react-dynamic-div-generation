import React, { Component } from 'react'
import Box from './Box'

export default class Container extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            reverse: false
        }
    }

    componentDidMount() {
        let counter = setInterval(() => {
            if(this.state.count >= 80 && !this.state.reverse ) {
                this.setState({ reverse: true })
            } else if(!this.state.reverse) {
                this.setState({ count: this.state.count+1 })
            } else if(this.state.reverse && this.state.count == 0) {
                this.setState({ reverse: false })
            } else {
                this.setState({ count: this.state.count-1 })
            }
        }, 50);
        this.setState({ counter })
    }

    makeArray(count) {
        let items = []
        let style
        for(let i = 0; i < count; i++) {
            style = {backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16) }
            items.push(<Box key={i} style={style} />)
        }
        return items
    }

    render() {
        let { count } = this.state

        return (
            <div id="container">
                {this.makeArray(count)}
            </div>
        )
    }
}