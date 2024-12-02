import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Exercise() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/gymFont.png")}
        style={styles.backGroung}
      ></Image>

      <View style={styles.card}>
        <View style={styles.item}>
          <Image
            source={require("../../images/desayuno-ingles.png")}
            style={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Desayuno</Text>
            <Text style={styles.itemPrice}>
              {""}
              Opciones frescas y energéticas para empezar el día con fuerza.
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Más Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Image
            source={require("../../images/almuerzo.png")}
            style={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Almuerzo</Text>
            <Text style={styles.itemPrice}>
              Comidas completas y balanceadas para recargar energías.
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Más Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Image
            source={require("../../images/cena.jpg")}
            style={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Cena</Text>
            <Text style={styles.itemPrice}>
              Platos ligeros y deliciosos para cerrar el día.
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Más Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backGroung: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "rgba( 0,  0,  0, 0.5)",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#FFFFFF", // Blanco en formato hexadecimal
    borderWidth: 0.2, // Ancho del borde
    width: "90%",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  itemPrice: {
    fontSize: 16,
    color: "#F5F5F5",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#FFC107",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
