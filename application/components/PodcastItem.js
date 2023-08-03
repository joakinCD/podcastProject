import React,{Component,useReducer} from 'react';


import {Dimensions,Image,TouchableOpacity,Text,View} from "react-native";
const podcastItem = (props) => {
    const {podcast,key} = props
    return(
        <View key={key} style={{flex:1,alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <TouchableOpacity style={{alignItems:'center',width:300,paddingTop:90}}>
                
                    <View style={{width:170,alignItems:'center',justifyContent:'center',position:'absolute',top:0}}>
                        <Image
                            style={{width: '100%',height: 170,resizeMode:'cover',borderRadius:170}}
                            source={
                              {uri:podcast.imagen}
                            }
                        />
                    </View>
                    <View style={{padding:10,paddingTop:90,width:'100%',shadowColor: "#000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
                        <Text
                            ellipsizeMode={'tail'}
                            numberOfLines={2}
                            style={{fontSize: 16,fontWeight:'bold',textAlign:'center'}}>{podcast.titulo}
                        </Text>
                        <Text 
                            ellipsizeMode={'tail'}
                            numberOfLines={2}
                            style={{fontSize: 16,fontWeight:'bold',textAlign:'center',color:'grey'}}>{podcast.autor}
                        </Text>
                    </View>

            </TouchableOpacity>
        </View>

    );
    
}
export default podcastItem;
