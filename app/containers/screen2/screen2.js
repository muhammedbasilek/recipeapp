import React,{Component} from 'react';
import { ScrollView, View,PixelRatio,SafeAreaView,Slider,TouchableWithoutFeedback, Text,StyleSheet,Dimensions,Image,ListView,Modal,TextInput,TouchableOpacity, Platform, FlatList, ActivityIndicator, AppState, RefreshControl, Alert,TouchableHighlight, BackHandler, Linking,KeyboardAvoidingView, PermissionsAndroid,StatusBar} from 'react-native';
import { StackNavigator,NavigationActions, TabNavigator,DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import ImagePicker from 'react-native-image-crop-picker';
var {height, width} = Dimensions.get('window');
export const deviceHeight = Dimensions.get('window').height;
export const DEVICE_HEIGHT = Platform.select({
  ios: deviceHeight,
  android:
    StatusBar.currentHeight > 24
      ? deviceHeight
      : deviceHeight - StatusBar.currentHeight,
});
import AsyncStorage from '@react-native-community/async-storage';

class screen2 extends Component {
  static navigationOptions = ({ navigation }) =>({
    header:null
  });
	constructor(props) {
    super(props);
	    this.state = {
        recipe_name:'',
        recipe_description:'',
        SliderValue :  10,
        openCamera:false
	   	}
      
	}
	UNSAFE_componentWillReceiveProps(props) {
 		    
 	}
	componentDidMount() {

	}
  componentWillUnmount(){
    const {params} = this.props.navigation.state;
    params.callHome();
  }
  openGallery(){
      ImagePicker.openPicker({
        width: 250,
        height: 250,
        cropping: true
      }).then(picture => {
        console.log('picture')
        console.log(picture)
        let image_file = {uri: picture.path,type: picture.mime, name: 'picture'}
        this.setState({openCamera:false})  
      });
    }
    openCamera(){
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        let image_file = {uri: image.path,type: image.mime, name: 'picture'}
        this.setState({openCamera:false})
      });
    }
 
	render(){
		return( 
			 <SafeAreaView  style={{flex:1,backgroundColor:'#fff'}}>
       <KeyboardAvoidingView>
       <ScrollView>
        <View style={{padding:20,justifyContent:'center'}}>
          <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <TouchableOpacity onPress= { ()=> this.props.navigation.goBack(null)}><Text style={{fontWeight:'bold',color:'#FF6464',fontSize:18,fontFamily:'Din Condensed'}}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#3E5481',fontSize:18,fontFamily:'Din Condensed',fontWeight:'bold'}}>1/</Text><Text  style={{fontWeight:'bold',color:'grey',fontSize:18,fontFamily:'Din Condensed'}}>2</Text>
            </View> 
            </TouchableOpacity>
          </View> 
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{this.setState({openCamera:true})}}>
              <View style={styles.picture_box}>
                <Icon style={{color:'#C0C0C0'}} size={60} name="image" />
                <Text style={{fontSize:16,fontFamily:'Din Condensed',fontWeight:'bold',color:'#3E5481'}}>Add Cover Photo</Text>
                <Text style={{color:'#9FA5C0',fontSize:12}}>(up to 12 Mb)</Text>
              </View> 
            </TouchableOpacity>
          </View>
          <View style={{marginTop:15}}>
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Din Condensed',color:'#3E5481'}}>Recipe Name</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
            <TextInput
                style={styles.recipeinput}
                placeholderTextColor={'#ccc'}
                selectionColor={'#7070D8'}
                placeholder={'Enter recipe name'}
                onChangeText={(recipe_name) => this.setState({recipe_name})}
                value={this.state.recipe_name}
                />
          </View>
          <View style={{marginTop:15}}>
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Din Condensed',color:'#3E5481'}}>Description</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
            <TextInput
                style={styles.description_input}
                placeholderTextColor={'#ccc'}
                multiline={true}
                selectionColor={'#7070D8'}
                placeholder={'Tell the community a little about your recipe'}
                onChangeText={(recipe_description) => this.setState({recipe_description})}
                value={this.state.recipe_description}
                />
          </View>
          <View style={{marginTop:15,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Din Condensed',color:'#3E5481'}}>Cooking Duration</Text>
            <Text style={{fontSize:15,color:'#9FA5C0'}}> (in minutes)</Text>
          </View>
          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style = {{fontSize: 20,textAlign:'left',fontWeight:'Din Condensed',fontWeight:'bold',color:'#9FA5C0'}}>{'<10'}</Text>
              <Text style = {{fontSize: 20,textAlign:'center',fontWeight:'Din Condensed',color:'#FFF395',fontWeight:'bold'}}>{ this.state.SliderValue  }</Text>
              <Text style = {{fontSize: 20,textAlign:'right',fontWeight:'Din Condensed',fontWeight:'bold',color:'#9FA5C0'}}>{'>60'}</Text>
            </View>  
              <Slider
                step = { 1 }
                minimumValue = { 10 }
                maximumValue = { 60 }
                minimumTrackTintColor = "#FFF395"
                onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
                style = {{ width: '100%'}} 
                thumbTintColor="#FFF395"
                />
          </View>
          <View style={{marginBottom:80}}></View> 
        </View>
        </ScrollView>
        {this.state.openCamera &&
            <TouchableWithoutFeedback onPress={()=>{this.setState({openCamera:false})}}>
              <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center',position:'absolute',width:width,height:height}}>
                <TouchableOpacity onPress={() =>this.openGallery()}>
                  <View style={styles.pickericonview}>
                    <View style={{margin:10,borderColor:'#11137C'}}>
                      <Icon name={'folder-open'} style={styles.pickericon}/>
                      <Text style={styles.pickertext}>Gallery</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>this.openCamera()}>
                  <View style={styles.pickericonview}>
                    <View style={{margin:10,borderColor:'#11137C'}}>
                      <Icon name={'camera'} style={styles.pickericon}/>
                      <Text style={styles.pickertext}>Camera</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          } 
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.footertouch}>
          <View style={styles.footer}>
            <Text style={styles.footertext}>Next</Text>
          </View>
        </TouchableOpacity>
       </SafeAreaView>
			);
	}

}
const styles=StyleSheet.create({
  picture_box:{
    width:width/1.1,
    height:150,
    borderRadius:10,
    borderStyle: 'dashed',
    borderColor:'#C0C0C0',
    borderWidth: 1,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  recipeinput: {
    height: 60,
    width: width/1.1,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    borderWidth:(Platform.OS === 'ios') ? 1:  1,
    color: '#000',
    fontFamily:'Din Condensed',
    fontSize: 18,
    fontWeight: '600',
    borderColor: '#D0DBEA',
    borderRadius:30
  },
  description_input:{
    height: 120,
    width: width/1.1,
    borderWidth:(Platform.OS === 'ios') ? 1:  1,
    color: '#000',
    fontFamily:'Din Condensed',
    fontSize: 15,
    fontWeight: '600',
    borderColor: '#D0DBEA',
    borderRadius:15,
    textAlignVertical: 'top',
    padding:10
  },
    pickericonview:{
        backgroundColor:'#FFFFFF',
        margin:20,
        elevation:1,
        height:width/2.5,
        width:width/2.5,
        justifyContent:'center',
        alignItems:'center',
        padding:width/13,
        borderRadius:100,
      },
    pickericon:{
        fontSize:width/6,
        color:'#000',
        alignItems:'center',
        justifyContent:'center'
      },
    pickertext:{
        fontSize:width/20,
        textAlign:'center',
        color:'#000',
        fontFamily:'Din Condensed',

      },
    footertouch:{
      position:'absolute',
      width:width/1.2,
      bottom:5,
      alignItems:'center',
      backgroundColor:'#FFF395',
      height:width/7,
      alignSelf:'center',
      borderRadius:30,
    },
    footer:{
      position:'absolute',
      alignSelf:'center',
      backgroundColor:'#FFF395',
      alignItems:'center',
    },
    footertext:{
      paddingTop:10,
      color:'#11173C',
      textAlign:'center',
      fontSize:18,
      fontFamily:'Din Condensed'
    },


	
});
export default screen2;