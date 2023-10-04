import React from 'react';
import {StyleSheet, View , Text} from "react-native";

export default function Header(){
  return(
    <View style={styles.main}>
        <Text style={styles.text}>списко дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text:{
        fontsize: 18,
        color: 'red' ,
        textAlign: 'center'       
    }
});