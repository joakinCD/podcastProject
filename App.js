import {useEffect,useState} from 'react';
import {View} from 'react-native';
import NavigatorHome from './application/navigations/navigatorHome'

const App = (props) => {
  const [paginaCargada, setPaginaCargada] = useState(false);
  
  useEffect(() => {
    setPaginaCargada(true)
  }, []);

   
  
  return (

      <View style={{flex: 1}}>
        {paginaCargada?(
            <NavigatorHome></NavigatorHome>

        ):(null)}
        
      </View>          
  );
};


export default (App);