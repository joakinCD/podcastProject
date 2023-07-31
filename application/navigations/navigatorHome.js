import { NavigationContainer, getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

//Screens
import SplashScreen from '../screens/SplashScreen';
import VistaPrincipal from '../screens/vistaPrincipal';

const Stack = createStackNavigator();

const forFade = ({ current }:any) => ({
    cardStyle: {
      opacity: current.progress,
    },
});


function MyStack(){

 
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled:true,
            gestureDirection:"horizontal",
            headerTitleStyle: {
              color:'#327cbc',
              fontSize:18
            },
            headerTintColor: '#327cbc',
            headerStyle:{
              backgroundColor:'trasparent',
              height:60
            },
            headerBackTitleVisible: false
            
          }}>
          <Stack.Screen name="splashScreen" component={SplashScreen} options={{headerShown: false,gestureEnabled: false, cardStyleInterpolator: forFade}}  />
          <Stack.Screen name="vistaPrincipal" component={VistaPrincipal} options={{title:'Poscaster',gestureEnabled: false}}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default MyStack;
