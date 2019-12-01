import React from 'react'
import Item from "./Item";
import uuid from 'uuid-random';

export default (props) => {

        const list = props.array.map(item => {
            return <Item item={item} key={uuid()}/>
        })
        return <ul>{list}</ul>
}