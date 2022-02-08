import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;

export default function ChatBody() {
  return (
    <View style={styles.chatBody}>
      <View style={styles.chatContent}>
        <View style={styles.imgCircle}>
            
        </View>
        <View style={styles.botMessage}>
            <Text style={styles.botName}>Kisan Mitra Bot</Text>
            <Text style={styles.botMessageText}>Hello! I am a Kisan Bot, how may I assist you? Hello!</Text>
        </View>
      </View>
      <View style={styles.userchatContent}>
        <View style={styles.userMessage}>
            <Text style={styles.userName}>Mihir Rane</Text>
            <Text style={styles.userMessageText}>Hello</Text>
        </View>
        <View style={styles.imgCircle}>
            
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatBody: {
    padding: 5,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    minHeight: 83/100 * windowHeight
  },
  chatContent:{
    flexDirection:"row",
    marginTop:20
  },
  imgCircle: {
    backgroundColor: "#e5e5e5",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userchatContent: {
    flexDirection:"row",
    marginTop:20,
    marginLeft: 'auto',
    justifyContent:'flex-end'
  },
  botMessage: {
    backgroundColor: '#E1E1E1',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderTopLeftRadius: 0,
    maxWidth: 300,
    height: 'fit-content',
    marginLeft:10
  },
  botName: {
    color: '#53BA4A',
    fontWeight: 'bold'
  },
  botMessageText: {
    marginTop: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#B1E693',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderTopRightRadius: 0,
    maxWidth: 300,
    height: 'fit-content',
    marginRight:10
  },
  userName: {
    color: '#53BA4A',
    fontWeight: 'bold'
  },
  userMessageText: {
    marginTop: 10,
    marginBottom: 10,
  }

});

