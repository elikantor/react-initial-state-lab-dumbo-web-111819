import React from 'react'

export default class Bomb extends React.Component {
    
    state = {
        secondsLeft: this.props.initialCount
    }


    render(){
        return <h4>{(this.state.secondsLeft !== 0) ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}</h4>
    }

}
