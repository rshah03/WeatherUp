import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

//<Chart dataIn={tempArr}/>
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.dataIn}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};

