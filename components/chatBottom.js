import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const windowHeight = Dimensions.get('window').height;

export default function ChatBottom() {
  return <View style={styles.chat}>
           <View>
              <FontAwesome name="microphone" size={24} color="white" />
           </View>
           <View style={styles.textGroup}>
              <Entypo name="emoji-happy" size={24} color="#53BA4A" />
              <TextInput style={styles.textStyle} placeholder="Write Your Query"/>
           </View>
           <View>
              <Ionicons name="send-sharp" size={24} color="white" />
           </View>
         </View>;
}

const styles=StyleSheet.create({
  chat:{
      flex:1,
      flexDirection: "row",
      alignItems:"center",
      width: "100%",
      backgroundColor:"#53BA4A",
      padding:7,
      minHeight: 3/100 * windowHeight
  },
   textGroup:{
      borderWidth: 1,
      borderColor: "black",
      backgroundColor:"#ffffff",
      borderRadius:30,
      flex:1,
      flexDirection: "row",
      padding: 5,
      marginLeft:10,
      marginRight:10
   },
   textStyle:{
      marginLeft:10,
      width:'100%'
   }
})