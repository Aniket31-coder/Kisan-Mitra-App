import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import DrawerItems from './constants/DrawerItems';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from "./screens/Home.js"
import About from "./screens/About.js"
import Analytics from "./screens/Analytics.js"
import Header from "./components/header"

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}>
        <Home/>
      </SafeAreaView> */}
      <Header/>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}

        >
        {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           options={{
            drawerIcon:({focused})=>
              drawer.iconType==='Material' ?
              <MaterialCommunityIcons
                 name={drawer.iconName}
                 size={24}
                 color={focused ? "#e91e63" : "black"}
              />
              :
              drawer.iconType==='Feather' ?
              <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              :
                <FontAwesome5
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
            }}
            component={
             drawer.name==='Home' ? Home
             : drawer.name==='About' ? About
             : Analytics
           }
         />)
       }
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDED'
  },
 
});
