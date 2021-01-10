// Make India Great Again
import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { ScrollView ,StyleSheet, Text, View ,Button, Alert, TextInput,FlatList} from 'react-native';


const JustifyContentBasics = () => {
    // this is controlled binding
    const [enteredGoal,setEnteredGoal] = useState('');
    const [courseGoals,setCourseGoals] = useState([]);
    const goalInputHandler = (enteredText :string) => 
    {
            setEnteredGoal(enteredText);
    };
    const addGoalHandler = () =>
    {
      //console.log("Goal Added here");
      setCourseGoals(currentGoals =>[...currentGoals,{ key: Math.random().toString(), value: enteredGoal}]);
    };
    return (
    <View style={styles.screen}>
      <View style ={styles.inputContainer} >
            <TextInput 
            style ={styles.input}
            placeholder='input data' 
            onChangeText= {goalInputHandler} 
            // if you want to execute for every key stroke then use this
            value={enteredGoal} />
            <Button title="ADD" onPress= {addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem = { itemData => (<View style={styles.listItem}><Text key={itemData.item.key}>{itemData.item.value}</Text></View>)
      }/>
    
    </View>
    ) 
  };

const styles = StyleSheet.create({ 
  screen: { padding: 50}, 
  //justify content in felx-box: flex-start, flex-end,center,space-between,space-around,space-evenly
  // flex direction: row, column, row-reverse, column-reverse
  // layout direction : start refers to left , end refers to right
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'flex-start'},

    input:
    { 
      width: '80%', 
      borderColor: 'black', 
      borderWidth:1, 
      padding:10
    },
    listItem:
    {
      padding:10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#ccc'
    }
  }
  ); 
export default JustifyContentBasics;

