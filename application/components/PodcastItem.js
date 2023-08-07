import React,{Component,useReducer} from 'react';


import {Dimensions,Image,Pressable,Text,View} from "react-native";
const PodcastItem = (props) => {
    const {podcast,key,abrirDetallesPodcast} = props
    function onPressItem(){
        console.log("press")
        abrirDetallesPodcast(podcast)
    }
    return(
        <View key={key} style={{flex:1,alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <Pressable style={{alignItems:'center',width:300,paddingTop:90}}  onPress={onPressItem}>
                
                    <View style={{width:170,alignItems:'center',justifyContent:'center',position:'absolute',top:0}}>
                        <Image
                            style={{width: '100%',height: 170,borderRadius:170}}
                            source={
                              {uri:podcast.imagen}
                            }
                            resizeMode='cover'
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

            </Pressable>
        </View>

    );
    
}
export default PodcastItem;
