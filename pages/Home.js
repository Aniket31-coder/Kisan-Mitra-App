import { StyleSheet, Text, View } from 'react-native';
import ChatBody from '../components/chatBody';
import Header from '../components/header';
import ChatBottom from '../components/chatBottom';

export default function Home() {
  return <View>
           <Header/>
           <ChatBody/>
           <ChatBottom/>
         </View>;
}

const styles=StyleSheet.create({

})