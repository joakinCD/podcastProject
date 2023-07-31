import { useState } from 'react';
import {View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from '../../assets/styles/styles';
import {StatusBar} from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons'; 


const SplashScreen = (props) => {
  let [animating, setAnimating] = useState(true);

  let estiloE = 'fadeIn';
  let estiloS = '';
  let duracionE = 1000;
  let duracionS = 0;
  let delayI = 100;
  let delayT = 0;
  let [finishFirst, setFirst] = useState(false);
   
  function cargarSiguienteScreen(){
        props.navigation.reset({
          index:0,
          routes:[{name:'vistaPrincipal'}]
        })
  }
  return (
    <View style={{flex:1}}> 
      <View style={[styles.image,{alignItems:'center',justifyContent: 'center'}]}> 
          <Animatable.View
          animation={finishFirst ? estiloS : estiloE}
          duration={finishFirst ? duracionS : duracionE}
          delay={delayI}
          style={[finishFirst ? styles.imagenAnimada : {},{width:200,height:200}]}
          onAnimationEnd={() => {  
            setTimeout(() => { 
              cargarSiguienteScreen();
            }, 500);
          }}
          >
          <FontAwesome5 name="podcast" size={150} color="black" />
        </Animatable.View>

      </View>
      <StatusBar style="light" animated={true}/>
    </View>
  );
};
export default SplashScreen;