import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

//<Chart dataIn={tempArr}/>

class Chart extends Component {
  render() {
    return (
      <div>
        <Sparklines height={120} width={180} data={this.props.dataIn}>
          <SparklinesLine color="red" />
        </Sparklines>
      </div>
    );
  }
}

export default Chart;