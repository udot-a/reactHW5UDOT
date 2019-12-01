import React from 'react';

export default (props)=> {
  return (

      <button onClick={props.clickHandler}> {props.name} </button>
  );
}

