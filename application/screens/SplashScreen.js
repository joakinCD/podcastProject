import { useState, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { styles } from "../../assets/styles/styles";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import { setListadoPodcast, setNavigationRedux } from "../reducers";
import llamadasPodcast from "../funcionalidades/LlamadasPodcast";
import Podcast from "../objetos/Podcast";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = (props) => {
  const [podcastCargados, setPodcastCargados] = useState(false);
  async function cargarPodcast() {
    let listadoLocal = await AsyncStorage.getItem("@listadoPodcast");
    listadoLocal = await JSON.parse(listadoLocal);
    let necesarioCargar = true;
    if (listadoLocal) {
      if (
        parseFloat(listadoLocal.timestamp) >
        new Date().getTime() - 86400000
      ) {
        necesarioCargar = false;
      }
    }
    if (necesarioCargar) {
      llamadasPodcast.getListadoPodcast().then(
        async function (result) {
          let contents = await JSON.parse(result.contents);

          let listadoPodcast = [];
          if (contents?.feed?.entry?.length > 0) {
            contents.feed.entry.map(function (item, index) {
              let podcast = new Podcast({
                id: item.id.attributes["im:id"],
                titulo: item["im:name"].label,
                autor: item["im:artist"].label,
                imagen: item["im:image"][2].label,
                descripcion: item.summary.label,
              });
              listadoPodcast.push(podcast);
            });
          }
          AsyncStorage.setItem(
            "@listadoPodcast",
            JSON.stringify({
              listado: listadoPodcast,
              timestamp: new Date().getTime().toString(),
            }),
          );
          props.setListadoPodcast(listadoPodcast);
          setPodcastCargados(true);
        },
        function (err) {
          console.error("Error getListadoPodcast -> ", err);
        },
      );
    } else {
      let listadoPodcast = [];

      listadoLocal.listado.map(function (item, index) {
        let podcast = new Podcast(item);
        listadoPodcast.push(podcast);
      });

      props.setListadoPodcast(listadoPodcast);
      setPodcastCargados(true);
    }
  }
  useEffect(() => {
    cargarPodcast();
  }, []);
  useEffect(() => {
    if (podcastCargados) {
      cargarSiguienteScreen();
    }
  }, [podcastCargados]);
  function cargarSiguienteScreen() {
    props.setNavigationRedux(props.navigation);
    props.navigation.reset({
      index: 0,
      routes: [{ name: "vistaPrincipal" }],
    });
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.image,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <FontAwesome5 name="podcast" size={150} color="black" />
        </Animated.View>
      </View>
      <StatusBar style="light" animated={true} />
    </View>
  );
};
const mapDispatchToProps = {
  setListadoPodcast,
  setNavigationRedux,
};
const mapStateToProps = (state) => {
  return {
    listadoPodcast: state.podcast.listadoPodcast,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
