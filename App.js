import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableHighlight,
   View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text pressed');
  const handleButtonPress = () => Alert.alert("Exmpl", "main message", [
    {text:"Yes", onPress: () => console.log('yes')},
    {text:"Cancel", onPress: () => console.log('cancel')}
    
  ]);
  const handleButtonPress2 = () => Alert.prompt("Exmpl", "main message", text => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handleTextPress}>Hello, my little lovers {'\n'}of extrimism)))) </Text>
      <Button title='Press me' color='red' onPress={handleButtonPress}/>
      <Button title='Button 2' color='green' onPress={handleButtonPress2}/>
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image style={styles.tinyLogo}
        source={require('./assets/adaptive-icon.png')}/>
      </TouchableWithoutFeedback>
      <Text style={{backgroundColor: 'red', fontSize:40, textAlign: 'center'}}> Good bae</Text>
      <View style={styles.box_view}>
        <Text>Text in View Text in View{'\n'}Text in View Text in View {'\n'}Text in View Text in View
        {'\n'}Text in View Text in View{'\n'}Text in View Text in View</Text>
      </View>
      <Text style={simpleStyle}>Just for test</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const simpleStyle = {backgroundColor: 'blue', fontSize:30, textAlign: 'center', color: 'yellow'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 24,
    color: 'black',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  box_view:{
    fontSize: 16,
    color: 'black',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'yellow',
    width: '50%',
    height: 100,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: 'silver',
  },

});
