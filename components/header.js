import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
          <Ionicons name="menu" size={42} color="white" />
        </View>
        <View style={styles.title}>
          <Text style={styles.heading}>KISAN MITRA</Text>
        </View>
        <View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#53BA4A',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    textAlign: "center",
    fontSize: 36,
    paddingVertical: 10,
    color: "#fff"
  },

});