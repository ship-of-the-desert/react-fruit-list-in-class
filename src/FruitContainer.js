import React, { Component } from 'react';
import FruitList from './FruitList';
import FruitFilter from './FruitFilter';

class FruitContainer extends Component {
  state = {
    matchedFruits: this.props.fruitList,
    unmatchedFruits: [],
    userInput: ''
  }

  handleChange(event){
    let userInput = event.target.value.toLowerCase()

    let matchedFruits = this.props.fruitList.filter(fruit => {
      return fruit.toLowerCase().includes(userInput);
    })

    let unmatchedFruits = this.props.fruitList.filter(fruit => {
      return !fruit.toLowerCase().includes(userInput);
    })

    this.setState(prevState => ({ userInput, matchedFruits, unmatchedFruits }))
  }
  
  render () {
    const matchedFruits = this.state.matchedFruits.map((fruit, index) => {
      return <FruitList fruit={fruit} key={index} />
    })

    const unmatchedFruits = this.state.unmatchedFruits.map((fruit, index) => {
      return <FruitList fruit={fruit} key={index} />
    })

    console.log(this.state)

    return (
      <div>
        <FruitFilter handleChange={(event) => this.handleChange(event) }/>
        <ul>
          MATCHED FRUITS:
          {matchedFruits}
        </ul>
        <ul>
          UNMATCHED FRUITS:
          {unmatchedFruits}
        </ul>                
      </div>
    )
  }
}

export default FruitContainer