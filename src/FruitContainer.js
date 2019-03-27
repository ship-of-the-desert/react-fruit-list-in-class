import React, { Component } from 'react';
import FruitList from './FruitList';
import FruitFilter from './FruitFilter';

class FruitContainer extends Component {
  state = {
    fruitList: this.props.fruitList,
    matchedFruits: this.props.fruitList,
    userInput: ''
  }

  handleChange(event){
    let userInput = event.target.value

    if (userInput !== '') {
      let matchedFruits = this.state.fruitList.filter(fruit => {
        return fruit.toLowerCase().includes(userInput.toLowerCase());
      })
     
      this.setState(prevState => ({ userInput, matchedFruits }))
    }
  }
  
  render () {
    const matchedFruits = this.state.matchedFruits.map((fruit, index) => {
      return <FruitList fruit={fruit} key={index} />
    })

    console.log(this.state)

    return (
      <div>
        <FruitFilter handleChange={(event) => this.handleChange(event) }/>
        hello Fruit Container
        <ul>
          {matchedFruits}
        </ul>        
      </div>
    )
  }
}

export default FruitContainer