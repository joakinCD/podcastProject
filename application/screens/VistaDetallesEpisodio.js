import React, { useState, useEffect } from 'react';
import { View,FlatList,TextInput,Text,Pressable } from 'react-native';
import PodcastDetails from '../components/PodcastDetails';
import parse from 'html-react-parser';
const VistaDetallesEpisodio = (props) => {
  let podcast=props.route.params.podcast
  let episodio=props.route.params.episodio
  return (
    <View style={{flex:1,padding:20,background:'white'}}>
      <View style={{flex:1,flexDirection:'row'}}>
          <View style={{width:'30%'}}>
            <PodcastDetails
             podcast={podcast}
            >
            </PodcastDetails>
          </View>
          <View style={{flex:1}}>
            <View style={{margin:10,padding:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
              <Text style={{fontSize: 16,fontWeight:'bold'}}>{episodio.titulo}</Text>
              <Text style={{fontSize: 16}}>{parse(episodio.descripcion)}</Text>
              <View style={{width:'100%',marginVertical:20}}>
                {parse('<audio style="width:100%" controls src="'+episodio.urlAudio+'"></audio>')}
              </View>
            </View>
          </View>
      </View>
    </View>
  );
};

export default VistaDetallesEpisodio;
