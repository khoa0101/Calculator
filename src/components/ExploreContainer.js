import React from 'react';
import './ExploreContainer.css';

class ExploreContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expression: '',
      result: '0',
      log: [],
    }
    this.ops = ['+','*', '/'];
    this.size = ['big', 'medium', 'small', 'smaller','tiny'];
    this.handleClear = this.handleClear.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleFinalize = this.handleFinalize.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
  }

  handleClear(e){
    e.preventDefault();
    this.setState({
      expression: '',
      result: '0',
    });
  }

  handleAllClear(e){
    e.preventDefault();
    this.setState({
      expression: '',
      log : [],
      result: '',
    })
  }

  handleCalculation(e){
    e.preventDefault();
    const {expression, result} = this.state;
    let value = e.target.value; 
    let exp = expression, calc = '';
    let split = expression.split(' ');
    let lastindex = split.length - 1;
    let lastChar = expression.slice(-1) === ' ' ? expression.slice(-2, -1) : expression.slice(-1);

    if (expression.length < 96 && !(this.ops.includes(value) && expression === '' || value === '0' && expression === '' ||
      ((this.ops.includes(value) || value === '-' || value === '.') && 
      (this.ops.includes(lastChar) || lastChar === '-' || lastChar === '.'))))
    {
      if (expression === ''){
        if (value !== '-' && value !== '.') exp = value; 
        else if (value === '.') exp = 0 + value;
        else if (value === '-') exp += value;
      } else if (this.ops.includes(value) || value === '-'){
        exp = expression + ' ' + value + ' ';
      } else if (value === '0' && split && split[lastindex] !== '0'){
        exp = expression + value;
      } else if((split && value === '.' && !split[lastindex].includes('.')) || value !== '.'){
        exp = expression + value;
      }
      if (!this.ops.includes(value) && value !== '-'){
        calc = eval(exp).toString();
      }
      this.setState({expression: exp, result: calc !== '' ? calc : result});
    }
    
  }

  handleFinalize(e){
    e.preventDefault();
    const {expression} = this.state;
    let lastChar = expression.slice(-1) === ' ' ? expression.slice(-2, -1) : expression.slice(-1);
    if (expression !== ''){
      if (!this.ops.includes(lastChar) && lastChar !== '-'){
        let res = eval(expression).toString();
        this.setState({expression: res, result : res});
        this.state.log.push(expression + " = " + res);
      } else {
        let exp = expression.split(' ');
        exp[exp.length - 2] = '';
        let res = eval(exp.join(' ')).toString();
        this.setState({expression: res, result : res});
        this.state.log.push(exp + " = " + res);
      }
    }
  }

  render() {
    const {log, expression} = this.state;
    const nums = [];
    for (let i = 9; i >= 0; i--){ nums[i] = 9 - i }
    const currentLogs = log.slice(-3);

    return (
      <div className="container">
        <div className="log-container">
          <ul className='log'>
            {currentLogs.map((expression, i) => (
              <li key={i}>{expression}</li>
            ))
            }
          </ul>
        </div>
        <div className="result-container">
          <p className={expression.length < 7 ? this.size[0] : expression.length < 9 ? 
            this.size[1] : expression.length < 18 ? this.size[2] : 
            expression.length < 45 ? this.size[3] : this.size[4]}>
            {expression === '' ? '0' : expression }
          </p>
        </div>
        <div className="numpad-container">
          <button className='clear-key' onClick={this.handleClear}>C</button>
          <button className='clear-key' onClick={this.handleAllClear}>AC</button>
          {nums.map((i) => (
            <button key={i} className='num-key' id={`key-${i}`} onClick={this.handleCalculation} value={`${i}`}>{i}</button>
            ))
          }
          <button className='num-key' id='dot-key' onClick={this.handleCalculation} value=".">.</button>
          <button className='op-key' id='plus' onClick={this.handleCalculation} value="+">+</button>
          <button className='op-key' id='minus' onClick={this.handleCalculation} value="-">-</button>
          <button className='op-key' id='times' onClick={this.handleCalculation} value="*">&times;</button>
          <button className='op-key' id='divide' onClick={this.handleCalculation} value="/">&divide;</button>
          <button className='op-key' id='equal' onClick={this.handleFinalize}>=</button>
        </div>
      </div>
  );
  }
};

export default ExploreContainer;
