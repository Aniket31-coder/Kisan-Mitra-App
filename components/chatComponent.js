import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatComponent() {
  return (
    <View >
         <View style={styles.botMessage}>
            <Text style={styles.botName}>Kisan Mitra Bot</Text>
            <Text style={styles.botMessageText}>Hello! I am a Kisan Bot, how may I assist you? </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    botMessage: {
        backgroundColor: '#E1E1E1',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 25,
        borderTopLeftRadius: 0,
        width: 'fit-content',
    },
    botName: {
        color: '#53BA4A',
        fontWeight: 'bold'
    },
    botMessageText: {
      marginTop: 10
    }  
  });

