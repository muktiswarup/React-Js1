import React from 'react';
import { Data } from '../App';
import { Data1 } from '../App';

function B() {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return <h1>Hi, my name is {name} and my age is {age}</h1>;
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
}

export default B;
