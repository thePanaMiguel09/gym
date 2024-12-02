import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import abs from "../../images/abs.png";
import abductores from "../../images/aductores.png";
import biceps from "../../images/biceps.png";
import gem from "../../images/pantorrilla.png";
import pecho from "../../images/pecho.png";
import antebrazo from "../../images/antebrazo.png";
import gluteo from "../../images/gluteo.png";
import isquio from "../../images/isquiotibial.png";
import dorsales from "../../images/dorsales.png";
import espaldaBaja from "../../images/espaldaBja.png";
import espaldaMedia from "../../images/espaldaMedia.png";
import cuello from "../../images/cuello.png";
import cuadriceps from "../../images/cuadriceps.png";
import triceps from "../../images/triceps.png";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "Exercise"> {}

export default function Exercise({ navigation }: Props) {
  const data = [
    {
      id: 1,
      title: "Abdominales",
      name: "abdominals",
      image: abs,
    },
    {
      id: 2,
      title: "Abductores",
      name: "abductors",
      image: abductores,
    },
    {
      id: 3,
      title: "Aductores",
      name: "adductors",
      image: abductores,
    },
    {
      id: 4,
      title: "Biceps",
      name: "biceps",
      image: biceps,
    },
    {
      id: 5,
      title: "Gemelos",
      name: "calves",
      image: gem,
    },
    {
      id: 6,
      title: "Pecho",
      name: "chest",
      image: pecho,
    },
    {
      id: 7,
      title: "Antebrazo",
      name: "forearms",
      image: antebrazo,
    },
    {
      id: 8,
      title: "Gluteo",
      name: "glutes",
      image: gluteo,
    },
    {
      id: 9,
      title: "Isquiotibial",
      name: "hamstrings",
      image: isquio,
    },
    {
      id: 10,
      title: "Dorsales",
      name: "lats",
      image: dorsales,
    },
    {
      id: 11,
      title: "Espalda Baja",
      name: "lower_back",
      image: espaldaBaja,
    },
    {
      id: 12,
      title: "Espalda Media",
      name: "middle_back",
      image: espaldaMedia,
    },
    {
      id: 13,
      title: "Cuello",
      name: "neck",
      image: cuello,
    },
    {
      id: 14,
      title: "Cuadriceps",
      name: "quadriceps",
      image: cuadriceps,
    },
    {
      id: 15,
      title: "Trapecio",
      name: "traps",
      image: cuello,
    },
    {
      id: 16,
      title: "Triceps",
      name: "triceps",
      image: triceps,
    },
  ];

  const [options, setOptions] = useState(data);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/gymFont.jpg")}
        style={styles.backGroung}
      />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={3}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("exampleExercise", { muscle: item.name })
              }
            >
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={item.image} />
              <View style={styles.cardHeader}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backGroung: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "transparent",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#FFFFFF", // Blanco en formato hexadecimal
    borderWidth: 0.2, // Ancho del borde
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: "rgba( 0,  0,  0, 0.5)",
    flexBasis: "30%",
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
    alignSelf: "center",
    color: "#ffff",
  },
});
