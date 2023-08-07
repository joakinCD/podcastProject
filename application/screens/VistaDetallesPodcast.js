import React, { useState, useEffect } from 'react';
import { View,FlatList,TextInput,Text } from 'react-native';
import PodcastDetails from '../components/PodcastDetails';

const VistaDetallesPodcast = (props) => {
  let podcast=props.route.params.podcast
  
  return (
    <View style={{flex:1,padding:20,background:'white'}}>
      <View style={{flex:1,flexDirection:'row'}}>
          <View style={{width:'30%',borderWidth:1}}>
            <PodcastDetails
             podcast={podcast}
            >
            </PodcastDetails>
          </View>
          <View style={{flex:1,borderWidth:1}}>

          </View>
      </View>
    </View>
  );
};

export default VistaDetallesPodcast;
