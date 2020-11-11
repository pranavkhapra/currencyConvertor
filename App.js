
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Snackbar from 'react-native-snackbar';
const currencyPerRuppe={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:.000004

}

const App=()=>{
  const [inputValue,setInputValue]=useState(0)
  const [resultValue,setResultValue]=useState(0)

  const buttonTappped=(currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text:"Please Enter a value",
        backgroundColor:"#EA7773",
        textColor:"#FFFFFF",
      })

    }
    let result=parseFloat(inputValue)*currencyPerRuppe[currency]
    setResultValue(result.toFixed(2))

  }
return (
  <>
  <ScrollView backgroundColor='#1b262c'
  keyboardShouldPersistTaps='handled'
  >
    <SafeAreaView style={styles.container}>
     <View style={styles.resultContainer}>
       <Text style={styles.resultValue}>{resultValue}</Text>
     </View>
     <View style={styles.inputContainer}>
       <TextInput style={styles.inputValue}
      keyboardType="numeric"
      placeholder="Enter Value"
      placeholderTextColor='#c1c1c1'
      value={inputValue}
      onChangeText={(inputValue)=> setInputValue(inputValue)}
      >
       </TextInput>
     </View>
     <View style={styles.convertButtonContainer}>
       {Object.keys(currencyPerRuppe).map((currency)=>(
          <TouchableOpacity key={currency} 
          style={styles.converterButton}
          onPress={()=>{buttonTappped(currency)}}
          >
          <Text style={styles.convertButtonText}>{currency}</Text>
          </TouchableOpacity>
       ))}
     </View>

    </SafeAreaView>
  </ScrollView>
  </>
)
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1b262c'
  },
  text:{
  color:'white'
  },
  resultContainer:{
   height:70,
   marginTop:80,
   justifyContent:'center',
   borderColor:'#bbe1fa',
   borderWidth:2,
   alignItems: 'center'

  },
  resultValue:{
  fontSize:30,
  color:'#FFFFFF',
  fontWeight:'bold'
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',
    borderColor:'#bbe1fa',
    borderWidth:2
  },
  inputValue:{
   fontSize:30,
   color:'#FFFFFF',
  },
  convertButtonContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10
  },
  converterButton:{
    alignItems: 'center',
    justifyContent:'center',
    height:100,
    width:'33.3%',
    borderWidth:2,
    borderColor:"#bbe1fa",
    marginTop:10,
    backgroundColor:"#0f4c75"
  },
  convertButtonText:{
    color:'#FFFFFF',
    fontSize:15
  },
  
  
  
});