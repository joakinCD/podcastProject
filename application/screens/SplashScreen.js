import { useState,useEffect } from 'react';
import {View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from '../../assets/styles/styles';
import {StatusBar} from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { connect } from "react-redux";
import { setListadoPodcast,setNavigationRedux} from "../reducers";
import llamadasPodcast from '../funcionalidades/llamadasPodcast'
import Podcast from '../objetos/Podcast'

const SplashScreen = (props) => {
  const [podcastCargados, setPodcastCargados] = useState(false);
  function cargarPodcast(){
    
     llamadasPodcast.getListadoPodcast().then(async function(result){

        let contents= await JSON.parse(result.contents)
        console.log("contents",contents)
        
        let listadoPodcast = []
        if(contents?.feed?.entry?.length>0){
          contents.feed.entry.map(function(item,index){
            let podcast=new Podcast({
              id:item.id.attributes['im:id'],
              titulo:item['im:name'].label,
              autor:item['im:artist'].label,
              imagen:item['im:image'][2].label,
              descripcion:item.summary.label
            })
            listadoPodcast.push(podcast)
          })
        }
        props.setListadoPodcast(listadoPodcast)
        setPodcastCargados(true)
     },function(err){
        console.log('Error getListadoPodcast -> ',err);
     })
   
  }
  useEffect(() => {
    cargarPodcast()
  }, []);
  useEffect(() => {
   if(podcastCargados){
     cargarSiguienteScreen()
   }
  }, [podcastCargados]);
  function cargarSiguienteScreen(){
    props.setNavigationRedux(props.navigation)
        props.navigation.reset({
          index:0,
          routes:[{name:'vistaPrincipal'}]
        })
  }
  return (
    <View style={{flex:1}}> 
      <View style={[styles.image,{alignItems:'center',justifyContent: 'center'}]}> 
          <Animatable.View
          animation={'fadeIn'}
          duration={1000}
          delay={100}
          style={{opacity:0}}
          >
          <FontAwesome5 name="podcast" size={150} color="black" />
        </Animatable.View>

      </View>
      <StatusBar style="light" animated={true}/>
    </View>
  );
};
const mapDispatchToProps = {
  setListadoPodcast,
  setNavigationRedux
}
const mapStateToProps = (state) => {
  return {
    listadoPodcast: state.podcast.listadoPodcast,
  };
};
export default connect(mapStateToProps,mapDispatchToProps )(SplashScreen);