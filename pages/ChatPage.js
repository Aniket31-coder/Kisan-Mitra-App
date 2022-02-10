import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ChatBody from '../components/chatBody';
import ChatBottom from '../components/chatBottom';

export default function ChatPage() {
  return (
    <>
      <ChatBody/>
      <ChatBottom/>      
    </>
  );
}

