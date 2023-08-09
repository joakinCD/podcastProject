import React, { useState, useEffect } from 'react';
import { View,FlatList,TextInput,Text } from 'react-native';
import { connect } from "react-redux";
import PodcastItem from '../components/PodcastItem';
import { setLoading} from "../reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Podcast from '../objetos/Podcast'
const VistaPrincipal = (props) => {
  const [podcastBuscador, setPodcastBuscador] = useState(props.listadoPodcast.slice());
  const [textoBuscador, setTextoBuscador] = useState('');
  function updateSearch(textoBuscador){

      if(textoBuscador.length > 0){
        var search = textoBuscador.toUpperCase();
        const podcastFiltrados = props.listadoPodcast.filter(item => {
          var titulo = item.titulo
          var autor = item.autor

          return (titulo.toUpperCase().indexOf(search) > -1 || autor.toUpperCase().indexOf(search) > -1);
        });
        setPodcastBuscador(podcastFiltrados.slice())
        setTextoBuscador(textoBuscador);
      }else{
        setPodcastBuscador(props.listadoPodcast.slice())
        setTextoBuscador('');
      }
    }
  async function abrirDetallesPodcast(podcast){
    console.log("podcastselasdf",podcast)
    let podcastLocal = await AsyncStorage.getItem('@'+podcast.id)
    podcastLocal = await JSON.parse(podcastLocal)
    let necesarioCargar=true
    if(podcastLocal){
      if(parseFloat(podcastLocal.timestamp)>(new Date().getTime()-86400000)){
        necesarioCargar=false
      }
    }
    if(necesarioCargar){
      props.setLoading(true)
      podcast.cargarDatosPodcast().then(function(res){
        props.setLoading(false)
        console.log("res",res)

        AsyncStorage.setItem('@'+podcast.id,JSON.stringify({
            podcast:podcast,
            timestamp:(new Date().getTime()).toString()
          })
        );

        props.navigation.navigate('vistaDetallesPodcast',{podcast:podcast})
      },function(err){
        console.log("err",err)
      })
    }else{
      podcast = new Podcast(podcastLocal.podcast)
      props.navigation.navigate('vistaDetallesPodcast',{podcast:podcast})
    }
    
    
  }
  return (
    <View style={{flex:1,padding:20,background:'white'}}>

        <View style={{flexDirection:'row',justifyContent:'flex-end',marginBottom:20}}>
          <Text style={{marginRight:10,color:'white',backgroundColor:'#327cbc',fontWeight:'bold',textAlign:'center',padding:5,borderRadius:8}}>{podcastBuscador.length}</Text>
          <TextInput
            placeholder="Filtrar podcast..."
            onChangeText={text => updateSearch(text)}
            style={{borderWidth:1,borderRadius:8,paddingLeft:10}}
            value={textoBuscador}
          />
        </View>

      <FlatList
        style={{flex:1}}
        data={podcastBuscador}
        keyExtractor={(item, index) => String(index)}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index}) => {
          return(
            <PodcastItem 
              key={index}
              podcast={item}
              abrirDetallesPodcast={abrirDetallesPodcast}
            >
            </PodcastItem>
          )
        }}
      />
    </View>
  );
};
const mapDispatchToProps = {
  setLoading
}
const mapStateToProps = (state) => {
  return {
    listadoPodcast: state.podcast.listadoPodcast,
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(VistaPrincipal);
