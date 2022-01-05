import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from 'victory';

const studentData = [
  {
    "naam": "Aranka",
    "opdracht": "SCRUM",
    "moeilijkheidsgraad": 1,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D1-1",
    "moeilijkheidsgraad": 4,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D2-1",
    "moeilijkheidsgraad": 3,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D2-2",
    "moeilijkheidsgraad": 3,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D2-3",
    "moeilijkheidsgraad": 4,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D2-4",
    "moeilijkheidsgraad": 2,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D2-5",
    "moeilijkheidsgraad": 4,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D3-1",
    "moeilijkheidsgraad": 3,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D3-2",
    "moeilijkheidsgraad": 2,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D3-4",
    "moeilijkheidsgraad": 1,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D3-5",
    "moeilijkheidsgraad": 4,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D3 - Guess-the-number",
    "moeilijkheidsgraad": 2,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D4-1",
    "moeilijkheidsgraad": 3,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D4 - Kleurentoggle",
    "moeilijkheidsgraad": 4,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W1D5 - Galgje",
    "moeilijkheidsgraad": 4,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D1-1",
    "moeilijkheidsgraad": 2,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D1-2",
    "moeilijkheidsgraad": 4,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D2-1",
    "moeilijkheidsgraad": 3,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D2-2",
    "moeilijkheidsgraad": 3,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D2-3",
    "moeilijkheidsgraad": 1,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D3-1",
    "moeilijkheidsgraad": 4,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D3-2",
    "moeilijkheidsgraad": 4,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D3-3",
    "moeilijkheidsgraad": 5,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D4-1",
    "moeilijkheidsgraad": 1,
    "funfactor": 5
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D4-2",
    "moeilijkheidsgraad": 2,
    "funfactor": 5
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D4-3",
    "moeilijkheidsgraad": 2,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W2D5 - Filmzoeker",
    "moeilijkheidsgraad": 5,
    "funfactor": 5
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D1-1",
    "moeilijkheidsgraad": 4,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D1-2",
    "moeilijkheidsgraad": 3,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D1-3",
    "moeilijkheidsgraad": 1,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D1-4",
    "moeilijkheidsgraad": 1,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D2-1",
    "moeilijkheidsgraad": 1,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D2-2",
    "moeilijkheidsgraad": 2,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D2-3",
    "moeilijkheidsgraad": 2,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D3-1",
    "moeilijkheidsgraad": 2,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D3-2",
    "moeilijkheidsgraad": 4,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D3-3",
    "moeilijkheidsgraad": 3,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D3-4",
    "moeilijkheidsgraad": 1,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D4-1",
    "moeilijkheidsgraad": 1,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D4-2",
    "moeilijkheidsgraad": 3,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W3D5 - Todo-List",
    "moeilijkheidsgraad": 1,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D2-1",
    "moeilijkheidsgraad": 2,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D2-2",
    "moeilijkheidsgraad": 3,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D2-3",
    "moeilijkheidsgraad": 2,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D2-4",
    "moeilijkheidsgraad": 3,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D3-1",
    "moeilijkheidsgraad": 2,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D3-2",
    "moeilijkheidsgraad": 4,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D3-3",
    "moeilijkheidsgraad": 3,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D3-4",
    "moeilijkheidsgraad": 3,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D3-5",
    "moeilijkheidsgraad": 4,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W4D3 - Next-Level CSS",
    "moeilijkheidsgraad": 4,
    "funfactor": 4
  },
  {
    "naam": "Aranka",
    "opdracht": "W5D4-1",
    "moeilijkheidsgraad": 1,
    "funfactor": 3
  },
  {
    "naam": "Aranka",
    "opdracht": "W5D5 - Lil_Playlist",
    "moeilijkheidsgraad": 5,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W6D1-1",
    "moeilijkheidsgraad": 5,
    "funfactor": 1
  },
  {
    "naam": "Aranka",
    "opdracht": "W6D2-1",
    "moeilijkheidsgraad": 2,
    "funfactor": 2
  },
  {
    "naam": "Aranka",
    "opdracht": "W6D2 - Eindopdracht",
    "moeilijkheidsgraad": 3,
    "funfactor": 4
  }
];

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      fun: true,
      difficult: false
    }
  }
  render() {
    return (
      <div style={{backgroundColor: "black"}}>  
        <h1 style={{color: "yellow"}}>Victory Tutorial</h1>
        <VictoryChart
          domainPadding={5}
          height={200}          
        >
          <VictoryLegend x={165} y={35}
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{               
              labels: { fontSize: 6, fill: "yellow"}
            }}
            data={[              
              { name: "fun-factor", symbol: { fill: "#55FF00" } },
              { name: "moeilijkheidsgraad", symbol: { fill: "#FF0000" } }
            ]}
          />          
          <VictoryAxis
            label="opdrachten"
            tickValues={studentData.map(item => item.opdracht)}   
            style={{ 
              axisLabel: {fill: "yellow", fontSize: 7},
              tickLabels: {fill: 'white', angle: 40, fontSize: 3.5, padding: 3, verticalAnchor: 'middle', textAnchor:'start'},
              axis: {stroke: 'white'}              
            }}      
          />
          <VictoryAxis 
            dependentAxis
            label="gegeven cijfer"
            tickValues={[1,2,3,4,5]}
            style={{
              axisLabel: {fill: "yellow", fontSize: 6},
              tickLabels: {fill: "white", fontSize: 8},
              axis: {stroke: 'white'},
              grid: {stroke: 'white', strokeDasharray: '7'}
            }}
          />
          <VictoryGroup offset={2.1}>
            <VictoryBar
              data={studentData}
              x={"opdracht"}
              y={"funfactor"}
              style={{ 
                data: { fill: "#55FF00" }, 
                display: !this.state.fun && "none"
              }}
            />
            <VictoryBar
              data={studentData}
              x={"opdracht"}
              y={"moeilijkheidsgraad"}
              style={{ 
                data: { fill: "#FF0000" },
                display: !this.state.difficult && "none" 
              }}
            />            
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);