import React from 'react';
import ReactDOM from 'react-dom';
import {VictoryChart,VictoryTheme,VictoryLine,VictoryStack,VictoryArea} from 'victory';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  Crosshair,
  LineMarkSeries
} from 'react-vis';
class Canvas extends React.Component {
    constructor(props){
        super(props);
        }
    render() {
        return (
            <div onClick={(evt)=>{console.log(evt.clientX)}}>
                <VictoryChart
            theme={VictoryTheme.material}
            events={{
                onClick: (evt) => alert(`(${evt.clientX}, ${evt.clientY})`)
              }}
          >
    <VictoryLine 
      data={[
        {x: 50, y: 18}, {x: 120, y: 42}
      ]}
    
    />
    <VictoryLine 
      data={[
        
        {x: 44, y: 18}, {x: 120, y: 48}
      ]}
    />
    <VictoryLine 
      data={[
        
        {x: 35, y: 18}, {x: 120, y: 60}
      ]}
    />
    <VictoryLine 
      data={[
        
        {x: 35, y: 23}, {x: 120, y: 78}
      ]}
    />
    <VictoryLine 
      data={[
        
        {x: 35, y: 28}, {x: 120, y: 96}
      ]}
    />
    <VictoryLine 
      data={[
        
        {x: 35, y: 35}, {x: 120, y: 120}
      ]}
    />
    <VictoryLine 
      data={[
        
        {x: 35, y: 53}, {x: 80, y: 120}
      ]}
    />
           
          </VictoryChart>
            </div>
            
          );
    }
  }
export default Canvas