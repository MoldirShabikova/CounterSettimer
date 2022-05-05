import React from 'react'
import './App.css';


class App extends React.Component{
state = {
  count: 0,
  intervalId: 0
}

// 1. start a new interval
// 2. once started , stop the interval

handleClick = () =>{
  if(this.state.intervalId){
    clearInterval(this.state.intervalId)
    // this.setState({intervalId: 0})
    this.setState((prevState)=>{
      return{
        ...prevState,
        count: 0,
        intervalId: 0
      }
    })
    return
  }


  const newIntervalId = setInterval(() =>{
    this.setState((prevState) =>{
      return{
        ...prevState,
        count: prevState.count +1
      }
    })
  },1000)



this.setState((prevState)=>{
  return {
    ...prevState,
    intervalId: newIntervalId
  }
})
}
render(){
  return(
    <div>
      <h1>Our counter: {this.state.count}</h1>
      <button onClick={this.handleClick}>{this.state.intervalId ? "Stop counter":"Start counter"}</button>
    </div>
  )
}
}
export default App;
