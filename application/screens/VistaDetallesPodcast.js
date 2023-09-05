import { View, FlatList, Text, Pressable } from "react-native";
import PodcastDetails from "../components/PodcastDetails";

const VistaDetallesPodcast = (props) => {
  let podcast = props.route.params.podcast;

  function abrirDetallesEpisodio(episodio) {
    props.navigation.navigate("vistaDetallesEpisodio", {
      podcast: podcast,
      episodio: episodio,
    });
  }
  return (
    <View style={{ flex: 1, padding: 15, background: "white" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ width: "30%" }}>
          <PodcastDetails podcast={podcast}></PodcastDetails>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              margin: 10,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Episodios: {podcast.totalEpisodios}
            </Text>
          </View>
          <View
            style={{
              height: 700,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "grey",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16, flex: 1 }}>
                Título
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 16, width: 100 }}>
                Fecha
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 16, width: 80 }}>
                Duración
              </Text>
            </View>
            <FlatList
              style={{ width: "100%" }}
              data={podcast.episodios}
              keyExtractor={(item, index) => String(index)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                let par = false;
                if (index % 2 == 0) {
                  par = true;
                }
                return (
                  <Pressable
                    onPress={abrirDetallesEpisodio.bind(this, item)}
                    style={[
                      {
                        width: "100%",
                        borderBottomWidth: 1,
                        borderColor: "grey",
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      par
                        ? { backgroundColor: "white" }
                        : { backgroundColor: "#DEDEDE" },
                    ]}
                  >
                    <Text style={{ fontSize: 16, color: "blue", flex: 1 }}>
                      {item.titulo}
                    </Text>
                    <Text style={{ fontSize: 16, width: 100 }}>
                      {item.fecha}
                    </Text>
                    <Text style={{ fontSize: 16, width: 80 }}>
                      {item.duracion}
                    </Text>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default VistaDetallesPodcast;
