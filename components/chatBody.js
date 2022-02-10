import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState,useEffect } from 'react';
import { collection, query, getDocs, where, updateDoc, doc, orderBy, onSnapshot, addDoc, Timestamp } from "firebase/firestore"; 
import {firestore as db} from "../firebase.js";


const windowHeight = Dimensions.get('window').height;

export default function ChatBody() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    var unsubscribe = null;
    const q = query(collection(db, "users/"+"91EPyDC71edJYo6ADkMzsGkjinz1"+"/chats"), orderBy("timestamp", "desc"));
    unsubscribe = onSnapshot(q, (querySnapshot) => {
    const chats  = [];
    querySnapshot.forEach((doc) => {
        chats.push(doc.data());
    });
    setChats(chats);
  });
  
    return () => {
      if(unsubscribe){
        unsubscribe();
    }
    }
  }, [])

  return (
    <View style={styles.chatBody}>
      <FlatList 
        keyExtractor={(item, index) => index}
        data={chats}
        inverted
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

