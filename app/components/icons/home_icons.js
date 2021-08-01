import React, {Fragment} from 'react';
import { ScrollView, View,PixelRatio, Text,SafeAreaView,StyleSheet,Dimensions,StatusBar,Image,ListView,Modal,TextInput,TouchableOpacity, Platform, FlatList, ActivityIndicator, AppState, RefreshControl, Alert,TouchableHighlight, BackHandler, Linking,KeyboardAvoidingView, PermissionsAndroid} from 'react-native';
var height = 50
var width = 50
const Home = () => {
	return(
		<View style={{width:50,height:50}}>
			<View style={styles.main}>
				<View style={styles.inner}></View>
			</View>
			<View style={styles.triangle}></View>
		</View>
		);
}
const Post = () => {
	return(
		<View style={{width:50,height:50}}>
			<View style={styles.main}>
				<View style={styles.inner}></View>
			</View>
			<View style={styles.triangle}></View>
		</View>
		);
}



const styles=StyleSheet.create({
   main :{
    width: 35,
    height: 22,
    backgroundColor: '#FFF395',
    borderRadius:7,
    position:'absolute',
    top:width/2,
    left:width/2,
    transform:[
    			{translateX:-width/2},
    			{translateY:-width/2},
    			]
  },
  inner:{
    width:8,
    height:11,
    backgroundColor: '#fff',
    position:'absolute',
    bottom:0,
    left:width/2,
    transform:[
    			{translateX:-width/4.5},
    			]
  },
  triangle:{
    position:'absolute',
    top:width/2,
    left:width/2,
    transform:[
    			{translateX:-width/2},
    			{translateY:-width/2},
    			],
    marginTop:-20,
    borderLeftWidth:18,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',

    borderRightWidth:18,
    borderRightColor: 'transparent',

    borderBottomWidth:18,
    borderBottomColor: '#FFF395',
    
  } 
});


export default Home;
