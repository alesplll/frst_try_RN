import React, {useState} from 'react';
import {StyleSheet, View } from "react-native";
import Header from './components/header';

export default function App(){
  const [ListOfItems, setListOfItems] = useState([
    {text: 'Buy milk', index: 1},
    {text: 'Buy bread', index: 2},
    {text: 'Buy water', index: 3},
    {text: 'Do hw', index: 4}
  ])

  return(
    <View>
        <Header/>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({

});