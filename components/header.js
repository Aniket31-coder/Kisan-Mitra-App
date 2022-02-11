import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units'

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            style={styles.imgLogo}
            source={require("../assets/KisanMitraLogo.png")}
          />
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
    justifyContent: 'space-around',
    minHeight: 7*vh,
    marginTop: 35,
  },
  heading: {
    textAlign: "center",
    fontSize: 36,
    paddingVertical: 10,
    color: "#fff"
  },
  imgLogo: {
    width: 50,
    height: 50
  }

});