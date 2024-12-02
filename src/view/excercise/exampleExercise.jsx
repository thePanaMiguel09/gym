import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";
import { useState, useEffect } from "react";
import { api } from "../../commons/api";

interface Props extends StackScreenProps<RootStackParams, "exampleExercise"> {}

export default function ExampleExercise({ route }: Props) {
  const { muscle } = route.params; // Recibe el grupo muscular
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await api.get(muscle);
        setExercises(data);
      } catch (error) {
        Alert.alert("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, [muscle]);

  return (
    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : exercises.length ? (
        <FlatList
          data={exercises}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.exerciseCard}>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseDifficult}>Type: {item.type}</Text>
              <Text style={styles.exerciseDifficult}>
                Difficulty: {item.difficulty}
              </Text>
              <Text style={styles.exerciseInstructions}>
                {item.instructions}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noData}>No se encontraron ejercicios.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d2e3ed",
  },
  exerciseCard: {
    marginVertical: 8,
    padding: 10,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#FFFF",
    borderWidth: 0.2,
    backgroundColor: "#ffff",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  exerciseInfo: {
    fontSize: 14,
    marginTop: 4,
    color: "#ffff",
  },
  exerciseDifficult:{
    color: "gray"
  },
  exerciseInstructions: {
    fontSize: 12,
    marginTop: 6,
    color: "#555",
    color: "#49555d",
  },
  noData: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  }
});
