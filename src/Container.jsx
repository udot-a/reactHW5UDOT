import React from 'react'
import Item from "./Item";

export default (props) => {

        const list = props.array.map(item => {
            return <Item item={item.content} />
        })
        return <ul>{list}</ul>
}