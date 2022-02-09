import { Dimensions, StyleSheet, Text, View, FlatList,Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState,useRef,useEffect } from 'react';

const windowHeight = Dimensions.get('window').height;

export default function ChatBody() {



  const [chats, setChats] = useState([
    {
      id: 123,
      botAnswer : "How can we help you?",
      timestamp : "October 20, 2021 at 12:20:13 PM UTC+5:30",
      userMessage : "I am fine"
    },
    {
      id: 331,
      botAnswer : "Sugarcane contains sugar",
      timestamp : "October 20, 2021 at 12:21:13 PM UTC+5:30",
      userMessage : "ok"
    },
    {
      id: 124,
      botAnswer : "Do you have any more questions?",
      timestamp : "October 20, 2021 at 12:20:13 PM UTC+5:30",
      userMessage : "No, Thanks!!"
    },
    {
      id: 310,
      botAnswer : "Sugarcane conatins sugar",
      timestamp : "October 20, 2021 at 12:21:13 PM UTC+5:30",
      userMessage : "ok"
    }
  ]);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollToEnd({ behavior: 'smooth' });
  });
  
  // FlatListRef = null;
  return (
    <View style={styles.chatBody}>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={chats}
        ref={divRef}
        renderItem = {
          ({item}) => (
            <>
              <View style={styles.chatContent}>
                <View style={styles.imgCircle}>
                    
                </View>
                <View style={styles.botMessage}>
                    <Text style={styles.botName}>Kisan Mitra Bot</Text>
                    <Text style={styles.botMessageText}>{item.botAnswer}</Text>
                </View>
              </View>
              <View style={styles.userchatContent}>
                <View style={styles.userMessage}>
                    <Text style={styles.userName}>Mihir Rane</Text>
                    <Text style={styles.userMessageText}>{item.userMessage}</Text>
                </View>
                <View style={styles.imgCircle}>
                    
                </View>
              </View>
            </>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chatBody: {
    padding: 5,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    minHeight: 97/100 * windowHeight - 158,
    maxHeight: 97/100 * windowHeight - 158
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

