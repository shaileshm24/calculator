import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: "",
      exp: "",
      second:"",
      minute:"",
      hours:""
    }
  }


  componentDidMount () {
    const date = new Date;
    console.log(date.getHours,":",date.getMinutes,":",date.getSeconds)
  }
  getExpression = async (event) => {
    this.setState({ exp: event.target.value })

  }

  evaluate = async () => {
    const string = this.state.exp;
    const data = {exp: string}
    const total = await axios.post('http://localhost:4000/evaluate',data);
    console.log(total);
    this.setState({ result: total.data })
  }

  // setAlarm = async() => {
  //   const data = {
  //     hh: this.state.hours,
  //     mm: this.state.minute,
  //     ss:this.state.second
  //   }
  //   const total = await axios.post('http://localhost:4000/setAlarm',data);
  //   console.log(total);
  //   this.setState({ result: total.data })
  //   localStorage.setItem("alarm", [...restult.data,result.data])
  // }

  // getHours = (event) => {
  //   this.setState({hours:event.target.value})
  // }
  // getMinutes = (event) => {
  //   this.setState({minute:event.target.value})
  // }
  // getSeconds = (event) => {
  //   this.setState({second:event.target.value})
  // }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Enter the expression" onChange={e => this.getExpression(e)} />
        <input type="submit" value="Evaluate" onClick={e => this.evaluate(e)} />
        <h1>{this.state.result}</h1>
        {/* <br></br>
        <br></br>
        <br></br> */}
        
        {/* <input type="text" placeholder="HH" name="Hours" onChange={e=> this.getHours(e)}/><input type="text" placeholder="MM" name="Minute" onChange={e=> this.getMinutes(e)}/><input type="text" name="Second" placeholder="SS"onChange={e=> this.getSeconds(e)}/>
        <input type="submit" value="Set Alarm" onClick={e => this.setAlarm(e)}/> */}
      </div>
    );
  }

}

export default App;
