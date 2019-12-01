import React from 'react'
import Item from "./Item";

export default (props) => {

        const list = props.array.map(item => {
            return <Item item={item.content} key={item.key} />
        })
        return <ul>{list}</ul>
}