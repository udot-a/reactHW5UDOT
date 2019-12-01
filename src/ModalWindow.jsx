import React from 'react'
import './main.css'

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    clickHandler= (event)=>{
        if (event.target!==this.myRef.current && event.target !==this.props.buttonRef.current) this.props.hideModal()
    }
    componentDidMount() {
        document.addEventListener('click', this.clickHandler)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.clickHandler)
    }

    render() {
        return (
            <div className='modal' ref={this.myRef}>
                Hello, I am modal window.
                I will close if you click outside me.
                Except Button 'Get Modal'
            </div>
        )
    }
}