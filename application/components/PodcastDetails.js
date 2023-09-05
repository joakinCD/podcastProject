import React,{Component,useReducer} from 'react';


import {Dimensions,Image,Text,View,Pressable} from "react-native";
const PodcastDetails = (props) => {
    const {podcast,onPress} = props
    return(
        <Pressable onPress={onPress} style={{alignItems:'center',justifyContent:'center',margin:10,padding:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
            <View style={{width:170,alignItems:'center',justifyContent:'center'}}>
                <Image
                    style={{width: '100%',height: 170,resizeMode:'cover',borderRadius:8}}
                    source={
                      {uri:podcast.imagen}
                    }
                />
            </View>
            <View style={{width:'100%',backgroundColor:'grey',height:1,marginVertical:10}}></View>
            <View style={{paddingHorizontal:10,width:'100%'}}>
                <Text
                    style={{fontSize: 16,fontWeight:'bold'}}>{podcast.titulo}
                </Text>
                <Text 
                    style={{fontSize: 16}}>{podcast.autor}
                </Text>
            </View>
            <View style={{width:'100%',backgroundColor:'grey',height:1,marginVertical:10}}></View>
            <View style={{paddingHorizontal:10,width:'100%'}}>
                <Text
                    style={{fontSize: 16,fontWeight:'bold'}}>Descripción
                </Text>
                <Text 
                    style={{fontSize: 16}}>{podcast.descripcion}
                </Text>
            </View>
        </Pressable>

    );
    
}
export default PodcastDetails;
