import {  StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState,useEffect } from 'react';
import { collection, query, getDocs, where, updateDoc, doc, orderBy, onSnapshot, addDoc, Timestamp } from "firebase/firestore"; 
import {firestore as db} from "../firebase.js";
import {vw, vh, vmin, vmax} from 'react-native-viewport-units'

// const windowHeight = Dimensions.get('window').height;

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
                <Image
                  style={styles.imgBot}
                  source={require("../assets/bot.png")}
                />
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
                  <Image
                    style={styles.imgUser}
                    source={require("../assets/user.png")}
                  />
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
    backgroundColor: "#F1EDED",
    minHeight: 76*vh,
    maxHeight: 76*vh
    // minHeight: 97/100 * windowHeight - 158,
    // maxHeight: 97/100 * windowHeight - 158
  },
  chatContent:{
    flexDirection:"row",
    marginTop:20
  },
  imgCircle: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBot: {
    width: 47,
    height:47,
  },
  imgUser: {
    width: 44,
    height: 45,
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

