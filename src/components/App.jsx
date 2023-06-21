import React, {Component} from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = (event) => {
    this.setState((prevState) => ({...this.state, [event.target.name]:  prevState[event.target.name]+1}))}
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
   return [good.length] + [neutral.length] + [bad.length]
   
  }
  
  countPositiveFeedbackPercentage = () => {

  }
  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <button type="button" name="good" onClick={this.addFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.addFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.addFeedback}>
          Bad
        </button>
        <p>Statistics</p>
        <span >Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
        <p>Total: {this.countTotalFeedback}</p>
      </div>
    );
  };
}
