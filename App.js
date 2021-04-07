import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ColorPropType } from 'react-native';
import CalculetteButton from './components/CalculetteButton.js'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.addNumber = this.addNumber.bind(this)
    this.calculate = this.calculate.bind(this)
    this.de = this.de.bind(this)
    this.allde = this.allde.bind(this)
    this.state = {
      calcul: ""
    }
  }

  addNumber(number) {
    let value = this.state.calcul
    this.setState({
      calcul: `${value}${number}` 
    })
    console.log(number);
  }

  calculate() {
    let value = this.state.calcul
    this.setState({
      calcul: `${value}\n${eval(value)}` 
    })
  }

  de(title) {
    let str = this.state.calcul
    let value
    if(title=="del") {
      value = str.slice(0,-1)
    }
    this.setState({
      calcul: value
    })
  }

  allde(title) {
    let str = this.state.calcul
    let value
    if(title=="AC") {
      value = str.slice(str.length)
    }
    this.setState({
      calcul: value   
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />

        <View style={styles.Vide}>
          <Text style={styles.result}>{this.state.calcul}</Text>
        </View>

        <View style={styles.padContainer}>

          <View style={styles.lines}>
            <CalculetteButton title="AC" action={this.allde} buttonColor="yellow" textColor="black" sizeButton="1" />
            <CalculetteButton title="%" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="del" action={this.de} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="/" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
          </View>
          
          <View style={styles.lines}>
            <CalculetteButton title="1" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="2" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="3" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="-" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
          </View>

          <View style={styles.lines}>
            <CalculetteButton title="7" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="8" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="9" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="*" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
          </View>

          <View style={styles.lines}>
            <CalculetteButton title="4" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="5" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="6" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="+" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
          </View>


          <View style={styles.lines}>
            <CalculetteButton title="0" action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="3" />
            <CalculetteButton title="." action={this.addNumber} buttonColor="black" textColor="yellow" sizeButton="1" />
            <CalculetteButton title="=" action={this.calculate} buttonColor="black" textColor="yellow" sizeButton="1" />
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  Vide: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: 'flex-end',
   
    
    
  },

  padContainer: {
    flex: 1.5,
    margin: 5,
    justifyContent: 'space-between',
    backgroundColor: "gray",
  },

  lines: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    backgroundColor: "gray"
  },

  result: {
    fontSize: 60,
    fontWeight: 'bold',
    color : "green",
    margin: 20,
   
  },


});
