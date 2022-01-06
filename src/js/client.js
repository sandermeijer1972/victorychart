import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from 'victory';
import studentData from './studentdata';



const studentNames = [...new Set(studentData.map(item => item.naam))];
console.log(studentNames);

const assignments = [...new Set(studentData.map(item => item.opdracht))];
console.log(assignments);

const makeAverageArray = () => {
  const newArray = [];
  assignments.forEach(assignment => {
    let newObject = {naam: "allStudents", opdracht: assignment};
    const allDifficult = studentData.filter(ass => ass.opdracht === assignment).map(item => item.moeilijkheidsgraad);
    const averageDifficult = (allDifficult.reduce((accumulator, currentValue) => accumulator + currentValue)) / studentNames.length;
    newObject["moeilijkheidsgraad"] = averageDifficult;
    const allFun = studentData.filter(ass => ass.opdracht === assignment).map(item => item.funfactor);
    const averageFun = (allFun.reduce((accumulator, currentValue) => accumulator + currentValue)) / studentNames.length;
    newObject["funfactor"] = averageFun;
    newArray.push(newObject);
  });
  return newArray;
};

const allStudents = makeAverageArray();
console.log(allStudents);

// const sandra = studentData.filter(item => item.naam === "Sandra");
// console.log(sandra);

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      fun: true,
      difficult: true
    }
  }

  render() {

    const justFun = () => {
      this.setState({fun: true, difficult: false})
    }
  
    const justDiff = () => {
      this.setState({fun: false, difficult: true})
    }
  
    const funAndDiff = () => {
      this.setState({fun: true, difficult: true})
    }

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
            tickValues={allStudents.map(item => item.opdracht)}   
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
              data={allStudents}
              x={"opdracht"}
              y={"funfactor"}
              style={{ 
                data: { 
                  fill: "#55FF00",
                  display: !this.state.fun && "none"
                }                
              }}
            />
            <VictoryBar
              data={allStudents}
              x={"opdracht"}
              y={"moeilijkheidsgraad"}
              style={{ 
                data: { 
                  fill: "#FF0000",
                  display: !this.state.difficult && "none"
                }                 
              }}
            />            
          </VictoryGroup>
        </VictoryChart>
        <div>
          <button onClick={justFun}>alleen fun-factor</button>
          <button onClick={justDiff}>alleen moeilijkheidsgraad</button>
          <button onClick={funAndDiff}>zowel fun-factor als moeilijkheidsgraad</button>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);