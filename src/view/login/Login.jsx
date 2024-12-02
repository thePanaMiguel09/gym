import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "Login"> {}

export default function Login({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/db/5c/e5/db5ce520d0bc67ce2630376e7d88a5f5.jpg",
        }}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image source={require("../../images/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textStyle}>
          {
            "Guía de entrenamiento personalizada, diseñada para ayudarte a mejorar tu salud y alcanzar tus metas de fitness con facilidad. Accede a rutinas, seguimiento de progreso y consejos de nutrición, todo en un solo lugar."
          }
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 120,
    backgroundColor: "rgba( 0,  0,  0, 0.5)",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "contain",
  },
  button: {
    width: "40%",
    height: 40,
    backgroundColor: "#FFC107",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "30%",
    backgroundColor: "rgba( 0,  0,  0, 0.5)",
    borderStyle: "solid",
    borderTopWidth: 0.2,
    borderColor: "#ffff",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 60,
  },
  textStyle: {
    color: "#ffff",
    textAlign: "center",
    lineHeight: 20,
  },
});
