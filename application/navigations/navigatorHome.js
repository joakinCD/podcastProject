import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
//Screens
import SplashScreen from "../screens/SplashScreen";
import VistaPrincipal from "../screens/vistaPrincipal";
import VistaDetallesPodcast from "../screens/VistaDetallesPodcast";
import VistaDetallesEpisodio from "../screens/VistaDetallesEpisodio";
const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MyStack = (props) => {
  function abrirPrincipal() {
    props.navigationRedux.reset({
      index: 0,
      routes: [{ name: "vistaPrincipal" }],
    });
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleStyle: {
            color: "#327cbc",
            fontSize: 18,
          },
          headerTintColor: "#327cbc",
          headerStyle: {
            backgroundColor: "white",
            height: 60,
          },
          headerBackTitleVisible: false,
          headerRight: () => {
            return props.loading ? (
              <ActivityIndicator style={{ marginRight: 20 }} color="#327cbc" />
            ) : null;
          },
          headerTitle: () => {
            return (
              <Pressable onPress={abrirPrincipal}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#327cbc" }}
                >
                  Podcaster
                </Text>
              </Pressable>
            );
          },
        }}
      >
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name="vistaPrincipal"
          component={VistaPrincipal}
          options={{ title: "Podcaster", gestureEnabled: false }}
        />
        <Stack.Screen
          name="vistaDetallesPodcast"
          component={VistaDetallesPodcast}
          options={{ title: "Podcaster", gestureEnabled: false }}
        />
        <Stack.Screen
          name="vistaDetallesEpisodio"
          component={VistaDetallesEpisodio}
          options={{ title: "Podcaster", gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.config.loading,
    navigationRedux: state.config.navigationRedux,
  };
};
export default connect(mapStateToProps)(MyStack);
