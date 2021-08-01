import React,{Component} from 'react';
import { ScrollView, View,PixelRatio, Text,SafeAreaView,StyleSheet,Dimensions,StatusBar,Image,ListView,Modal,TextInput,TouchableOpacity, Platform, FlatList, ActivityIndicator, AppState, RefreshControl, Alert,TouchableHighlight, BackHandler, Linking,KeyboardAvoidingView, PermissionsAndroid} from 'react-native';
import { StackNavigator,NavigationActions, TabNavigator,DrawerNavigator } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
var {height, width} = Dimensions.get('window');
import Home from '../../components/icons/home_icons.js'
import Post from '../../components/icons/home_icons.js'
import Icon from 'react-native-vector-icons/Entypo'; 
import cloneDeep from 'lodash/cloneDeep';

class screen1 extends Component {
   static navigationOptions = ({ navigation }) =>({
    header:null
  });
	constructor(props) {
    super(props);
	    this.state = {
        recipes:[
                      {name:'All',value:0},
                      {name:'Vegan',value:1},
                      {name:'Keto',value:2},
                      {name:'Veggy',value:3},
                      {name:'Non-veg',value:4},
                    ],
        selected_recipe_item:0,
        dishes:[
              {id:1,prof_name:'User one',prof_image:require('../../assets/profile_img/billie.jpeg'),dish_img:require('../../assets/dishes/pancake.jpeg'),dish_name:'Pancake',type:'Food',time:'>60 min',added_wish_list:false,food_type:4},
              {id:2,prof_name:'User two',prof_image:require('../../assets/profile_img/leonardo.jpeg'),dish_img:require('../../assets/dishes/salad.jpeg'),dish_name:'Salad',type:'Food',time:'>60 min',added_wish_list:false,food_type:1},
              {id:3,prof_name:'User three',prof_image:require('../../assets/profile_img/lisa.jpeg'),dish_img:require('../../assets/dishes/Eggplant_Rollatini.jpeg'),dish_name:'Eggplant Rollatini',type:'Food',time:'>60 min',added_wish_list:false,food_type:1},
              {id:4,prof_name:'User four',prof_image:require('../../assets/profile_img/rihana.jpeg'),dish_img:require('../../assets/dishes/Grilled_Bruschetta.jpeg'),dish_name:'Grilled Bruschetta',type:'Food',time:'>60 min',added_wish_list:false,food_type:2},
              ],
        dishes_clone:[
              {id:1,prof_name:'User one',prof_image:require('../../assets/profile_img/billie.jpeg'),dish_img:require('../../assets/dishes/pancake.jpeg'),dish_name:'Pancake',type:'Food',time:'>60 min',added_wish_list:false,food_type:1},
              {id:2,prof_name:'User two',prof_image:require('../../assets/profile_img/leonardo.jpeg'),dish_img:require('../../assets/dishes/salad.jpeg'),dish_name:'Salad',type:'Food',time:'>60 min',added_wish_list:false,food_type:1},
              {id:3,prof_name:'User three',prof_image:require('../../assets/profile_img/lisa.jpeg'),dish_img:require('../../assets/dishes/Eggplant_Rollatini.jpeg'),dish_name:'Eggplant Rollatini',type:'Food',time:'>60 min',added_wish_list:false,food_type:4},
              {id:4,prof_name:'User four',prof_image:require('../../assets/profile_img/rihana.jpeg'),dish_img:require('../../assets/dishes/Grilled_Bruschetta.jpeg'),dish_name:'Grilled Bruschetta',type:'Food',time:'>60 min',added_wish_list:false,food_type:2},
              ],
        bottom_header:[
                      {selected:true,name:'Home',icon_name:'home'},
                      {selected:false,name:'Post',icon_name:'edit'},
                      {selected:false,name:'Search',icon_name:'magnifying-glass'},
                      {selected:false,name:'Notification',icon_name:'bell'},
                      {selected:false,name:'Profile',icon_name:'user'},
                      ],
        
	   	}

	}
	UNSAFE_componentWillReceiveProps(props) {
 		    
 	}
	componentDidMount() {
	}
  setFoodType(type,index){
    let dishes = cloneDeep(this.state.dishes)
    let selected_dishes = dishes
    if(type.value != 0){
      selected_dishes = dishes.filter(info=>info.food_type == type.value)
    }
    this.setState({selected_recipe_item:type.value,dishes_clone:selected_dishes})
  }
  proFun(){
    this.selectBottomHeader(0)
  }
  selectBottomHeader(index){
    let bottom_header = cloneDeep(this.state.bottom_header)
    for(let i=0;i<5;i++){
      if(index == i){
        bottom_header[i].selected = true
      }else{
        bottom_header[i].selected = false
      }
    }
    this.setState({bottom_header:bottom_header},()=>{
      if(index == 1){
        this.props.navigation.navigate('Screen2',{callHome: this.proFun.bind(this)})
      }
    })
  }
  
	render(){
		return( 
      <SafeAreaView style={{flex:1}}>
        <ScrollView>

        <View style={{backgroundColor:'#fff',borderRadius:10}}>
         <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
          <View style={{justifyContent:'space-between',flexDirection:'row',margin:2}}>
          <View style={{margin:5}}>
            <Image source={ require('../../assets/profile_img/cristiano.jpeg') } style={styles.profile_pic} />
            <View style={{position:'absolute',width:25,height:25,borderRadius:12.5,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',bottom:0,right:0}}>
              <Text style={{color:'black',fontSize:18,fontWeight:'bold',fontFamily:'Din Condensed',}}>+</Text>
            </View>
          </View>
          <View style={{margin:5}}><Image source={ require('../../assets/profile_img/billie.jpeg') } style={styles.customer_pic} /></View>
          <View style={{margin:5}}><Image source={ require('../../assets/profile_img/leonardo.jpeg') } style={styles.customer_pic} /></View>
          <View style={{margin:5}}><Image source={ require('../../assets/profile_img/lisa.jpeg') } style={styles.customer_pic} /></View>
          <View style={{margin:5}}><Image source={ require('../../assets/profile_img/rihana.jpeg') } style={styles.customer_pic} /></View>
          <View style={{margin:5}}><Image source={ require('../../assets/profile_img/taylor.jpeg') } style={styles.customer_pic} /></View>
          <View style={{margin:5}}><Image source={ require('../../assets/profile_img/tomcruise.jpeg') } style={styles.customer_pic} /></View>
          </View>
        </ScrollView>
        <View style={{flex:1,margin:10,marginTop:15}}>
          <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Din Condensed',color:'#3E5481'}}>Category</Text>
        </View>
        <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row',margin:2,marginTop:10}}>
          {this.state.recipes.map((item,index)=>{
            return <TouchableOpacity onPress={()=>{this.setFoodType(item,index)}}>
            <View style={{margin:10,width:(item.name.length)*width/26+20,height:50,borderRadius:20,backgroundColor:`${item.value == this.state.selected_recipe_item ? '#FFF395' : '#F4F5F7'}`,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:18,fontFamily:'Din Condensed',color:`${item.value == this.state.selected_recipe_item ? '#000' : '#9FA5C0'}`}}>{item.name}</Text>
            </View>
            </TouchableOpacity>
          })}
        </View>
        </ScrollView>
        </View>
        {this.state.dishes_clone.length !=0 ?
        <View style={{marginTop:10,backgroundColor:'#fff',borderRadius:10,flexDirection:'row',flexWrap: 'wrap',paddingTop:10,justifyContent:'flex-start',alignItems:'center'}}>
          {this.state.dishes_clone.map((dish_item,index)=>{
            return<View style={{width:width/2.4,height:300,margin:15}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={dish_item.prof_image} style={{width:50,height:50,borderRadius:10}} />
                  <Text style={{color:'#2E3E5C',fontSize:16,fontFamily:'Din Condensed',marginTop:15,marginLeft:5}}>{dish_item.prof_name}</Text>
                </View>
                <View style={{marginTop:15}}>
                  <Image source={dish_item.dish_img} style={{width:width/2.4,height:width/2.4,borderRadius:20}} />
                  <View style={{width:32,height:32,borderRadius:10,justifyContent:'center',alignItems:'center',position:'absolute',right:20,top:20,elevation: 20,backgroundColor:'rgba(52, 52, 52, 0.6)'}}>
                  <TouchableOpacity onPress={()=>{this.addWishList(dish_item,index)}}>
                  {dish_item.added_wish_list == false ?
                  <Image source={require('../../assets/icons/white_heart.png')}   style={{width:25,height:25}}/>
                  :
                  <Image source={require('../../assets/icons/heart_rose.png')}   style={{width:25,height:25}}/>
                  }
                  </TouchableOpacity>
                  </View>
                </View>
                <Text style={{fontSize:16,fontWeight:'bold',fontFamily:'Din Condensed',color:'#3E5481',marginTop:10}}>{dish_item.dish_name}</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                  <View><Text style={{color:'#9FA5C0',fontSize:16,fontFamily:'Din Condensed'}}>{dish_item.type}</Text></View>
                  <View style={{width:8,height:8,borderRadius:4,backgroundColor:'#9FA5C0',marginLeft:10,marginTop:8}}></View>
                  <View><Text style={{color:'#9FA5C0',fontSize:16,fontFamily:'Din Condensed',marginLeft:10}}>{dish_item.time}</Text></View>
                </View>
              </View>
          })
        }
        </View>
        :
        <View style={{justifyContent:'center',alignItems:'center',height:height/2,backgroundColor:'#fff',marginTop:10}}><Text style={{fontSize:15,fontFamily:'Din Condensed',color:'#3E5481',textAlign:'center'}}>No recipes available !!</Text></View>
      }

        
        </ScrollView>
        <View style={{bottom:0,flexDirection:'row',height:75,width:width,backgroundColor:'#fff'}}>
          {this.state.bottom_header.map((header,index)=>{  
          return<View key={index} style={{width:width/5,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <TouchableOpacity onPress={()=>{this.selectBottomHeader(index)}}>
              {index == 2 ?
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{width:width/5,height:width/5,borderRadius:width/10,backgroundColor:'#FFF395',justifyContent:'center',alignItems:'center',marginTop:-width/10}}>
                <Icon style={{color:'#C0C0C0'}} size={40} name={header.icon_name} />
                </View>
                <Text style={{color:`${header.selected == true ? '#000' : '#C0C0C0'}`,fontSize:12,fontFamily:'Din Condensed',marginTop:5}}>{header.name}</Text>
              </View>
                :
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Icon style={{color:`${header.selected == true ? '#FFF395' : '#C0C0C0'}`}} size={40} name={header.icon_name} />
                <Text style={{color:`${header.selected == true ? '#000' : '#C0C0C0'}`,fontSize:12,fontFamily:'Din Condensed'}}>{header.name}</Text>
              </View>
              }
            </TouchableOpacity>
          </View>
          })}

          
        </View>
      </SafeAreaView>
			);
	}
  addWishList(dish_item,index){
    let dishes_clone = cloneDeep(this.state.dishes_clone)
    let dishes = cloneDeep(this.state.dishes)
    dishes.filter(dish=>dish.id==dish_item.id)[0].added_wish_list = !dishes.filter(dish=>dish.id==dish_item.id)[0].added_wish_list
    dishes_clone[index].added_wish_list = !dishes_clone[index].added_wish_list
    this.setState({dishes_clone:dishes_clone,dishes:dishes})
  }
  
}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  profile_pic:{
        width:80,
        height:80,
        borderRadius:(Platform.OS === 'ios') ? 0:  200,
        borderColor:'#FFF395',
        borderWidth:2,
  },
  customer_pic: {
        width:80,
        height:80,
        borderRadius:(Platform.OS === 'ios') ? 0:  200,
        borderColor:'#FFF395',
        borderWidth:2
        },
  
});
export default screen1;