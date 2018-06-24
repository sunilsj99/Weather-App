import _ from 'lodash';
import React from 'react';
import { SparklinesLine, Sparklines, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines  data={props.data} height={80} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    );
}