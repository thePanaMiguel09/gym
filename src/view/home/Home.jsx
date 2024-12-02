import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "Home"> {}

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/gymFont.jpg")}
        style={styles.background}
      />

      <View style={styles.cards}>
        <Pressable
          style={styles.options}
          onPress={() => navigation.navigate("Food")}
        >
          <Image
            source={{
              uri: "https://mejorconsalud.as.com/wp-content/uploads/2019/05/alimentacion-ejercicio-saludable-768x512.jpg?auto=webp&quality=60&width=1920&crop=16:9,smart,safe",
            }}
            style={styles.cardsImage}
          />
          <Text style={styles.text}>Nutrición</Text>
        </Pressable>

        <Pressable
          style={styles.options}
          onPress={() => navigation.navigate("Exercise")}
        >
          <Image
            source={{
              uri: "https://media.revistagq.com/photos/65b12cd1df908a3c3a4d7373/16:9/w_1600,c_limit/fitness%20portada.jpg",
            }}
            style={styles.cardsImage}
          />
          <Text style={styles.text}>Ejercicios</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  options: {
    flex: 1,
    flexDirection: "column",
    height: "30%",
    backgroundColor: "rgba( 0,  0,  0, 0.5)",
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#FFFFFF", // Blanco en formato hexadecimal
    borderWidth: 0.2, // Ancho del borde
    margin: 10,
  },
  cards: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardsImage: {
    width: "100",
    height: "100",
    borderRadius: 100,
    margin: 30,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
