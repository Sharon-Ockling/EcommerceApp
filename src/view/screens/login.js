import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';


const image = { uri: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" };


const Login = ({navigation, route}) => {
  return (
    <SafeAreaView
     style={styles.container}>
     <ImageBackground
          source={image}    
          resizeMode="cover"
           style={styles.image}>
          <View style={styles.header}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.purple ,}}>Welcome To Ronzy Reigns Collection</Text>
           <Text style={{fontSize: 17, fontWeight: "bold", alignItems: "center",justifyContent: "center", color: COLORS.black}}>Shop Online</Text>
        </View>
          <Text style={{paddingTop:180,}}></Text> 
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black" 
               autoCapitalize = "none"
               />
            
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none" 
               />
          <Text style={{paddingTop: 10,}}></Text> 
          <View>    
           <TouchableOpacity
            onPress={() =>{navigation.navigate('Home')}}
            style = {{backgroundColor: COLORS.purple,
            padding: 10,
            marginBottom: 20,
            marginTop: 10,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center'}}>
            <Text style={{fontSize: 15, marginLeft: 15, color: 'white' ,}}>Log In</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
      <TouchableOpacity>
        <Text style={{color:"white", backgroundColor:COLORS.Seablue, alignItems:"center",}}>Forget Password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:COLORS.purple,alignItems:"center"}} >
        <Text style={{color:"white"}}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
      flex: 1,
    },
    headerText: {
      color: "#ee7b1a",
      fontSize: 15,
      fontWeight: "bold",
    },
   image: {
    flex:1,
    alignItems: "center",
    paddingTop:20,
    justifyContents: "row",
   },
    button:{
      backgroundColor: "#ee7b1a",
      borderRadius: 10,
      alignItems: "center",
      paddingVertical:12,
      paddingHorizontal: 60,
      
    },
     input: {
      margin: 13,
      height: 50,
      width:300,
      borderColor: '#7a42f4',
      backgroundColor: "white",
      borderRadius: 5,
      alignItems: "center",
      padding: 10,
    },
    header: {
      alignItems: "center",
    },
     
  });
  export default Login;