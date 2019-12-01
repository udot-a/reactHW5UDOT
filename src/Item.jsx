import React from 'react'

export default (props) => {
    let [clickCounter, setCounter] = React.useState(0)
    return <li onClick={() => setCounter(clickCounter + 1)}>{props.item}{clickCounter}</li>
}