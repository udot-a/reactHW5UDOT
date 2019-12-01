import React from 'react'
import './main.css'

export default class extends React.PureComponent{
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        props.getButtonRef(this.myRef)
    }

    render() {
        return <button onClick={this.props.clickModalButton} className='getmodal' ref={this.myRef}> Get Modal</button>
    }
}