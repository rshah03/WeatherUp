import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

//<Chart dataIn={tempArr}/>
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.dataIn}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.dataIn)}</div>
    </div>
  );
};

