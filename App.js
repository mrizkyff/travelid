
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock,faCompass } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: '#F60081',
        tabBarStyle: {
          backgroundColor: '#b3b3b3',
          borderTopColor: 'transparent'
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color}}>Home</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faCompass} size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color}}>Settings</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faLock} size={size} color={color} />
          ),
          headerShown: false
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={Colors.black}>Settings!</Text>
    </View>
  );
}

function HomeScreen() {

  return (
  <View style={{backgroundColor: Colors.white, flex: 1}}>
    <ScrollView>

      <View style={styles.topview}>
        {/* <Text style={styles.userName}>Travel.id</Text> */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.roundButton1}>
            <Image style={{width:20, height: 20}} source={require('./img/icon/Sliders_horizontal.png')}></Image>
          </TouchableOpacity>
        </View>
        <Image source={require('./img/ian.jpg')} style={styles.thumbnail}></Image>
      </View>

      <View style={styles.topview, {flexDirection: 'column'}}>
        <Text style={{fontWeight: '900', fontSize: 35, color: Colors.black, marginLeft: 15}}>Travel.id</Text>
        <Text style={{fontWeight: '400', fontSize: 16, marginLeft: 15}}>Jelajahi Indonesia yang indah!</Text>
      </View>

      <View style={{paddingTop: 8, alignItems: 'center'}}>
        <TextInput
          style={{
            backgroundColor:'#f1f2f2',
            width: '90%',
            borderRadius: 50,
            paddingLeft: 20
          }}
          placeholder="Cari tujuanmu"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.roundButton2}>
          <Image style={{width:20, height: 20}} source={require('./img/icon/search.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: -30
      }}>
        <TouchableOpacity>
          <Text style={{fontWeight: '400', fontSize: 13, color: '#087cfc'}}>Wisata</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: '400', fontSize: 13}}>Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: '400', fontSize: 13}}>Restauran</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: '400', fontSize: 13}}>Mall</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        width: '97%',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: 8
      }}>
        <ScrollView horizontal={true}>
          <View>
            <Image style={styles.cardImage} source={require('./img/salatiga.jpg')}></Image>
            <Text style={{color: Colors.white, fontWeight: '400', position: 'relative', top: -40, left: 16, fontSize: 13}}>Kota Salatiga</Text>
            <View style={{position: 'relative', top: -40, left: 14, flexDirection: 'row'}}>
              <Image source={require("./img/icon/room.png")} style={{width:12, height: 12}}></Image>
              <Text style={{color: Colors.white, fontWeight: '400', fontSize: 9, marginLeft: 5}}>Jawa Tengah</Text>
            </View>
          </View>
          <View>
            <Image style={styles.cardImage} source={require('./img/semarang.jpg')}></Image>
            <Text style={{color: Colors.white, fontWeight: '400', position: 'relative', top: -40, left: 16, fontSize: 13}}>Kota Semarang</Text>
            <View style={{position: 'relative', top: -40, left: 14, flexDirection: 'row'}}>
              <Image source={require("./img/icon/room.png")} style={{width:12, height: 12}}></Image>
              <Text style={{color: Colors.white, fontWeight: '400', fontSize: 9, marginLeft: 5}}>Jawa Tengah</Text>
            </View>
          </View>
          <View>
            <Image style={styles.cardImage} source={require('./img/gedong9.jpeg')}></Image>
            <Text style={{color: Colors.white, fontWeight: '400', position: 'relative', top: -40, left: 16, fontSize: 13}}>Gedong Songo</Text>
            <View style={{position: 'relative', top: -40, left: 14, flexDirection: 'row'}}>
              <Image source={require("./img/icon/room.png")} style={{width:12, height: 12}}></Image>
              <Text style={{color: Colors.white, fontWeight: '400', fontSize: 9, marginLeft: 5}}>Jawa Tengah</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <Text style={{fontWeight: '900', fontSize: 24, color: Colors.black, marginLeft: 15, marginTop: -10}}>Lebih banyak lagi</Text>
      <View style={{
        width: '97%',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: 8,
        marginTop: -10
      }}>
        <ScrollView horizontal={true}>
          <View>
            <Image style={styles.cardImageSm} source={require('./img/joglo.jpeg')}></Image>
            <Text style={{color: Colors.white, fontWeight: '400', position: 'relative', top: -30, left: 16, fontSize: 11}}>Warung Joglo</Text>
            <View style={{position: 'relative', top: -30, left: 14, flexDirection: 'row'}}>
              <Image source={require("./img/icon/fork-spoon.png")} style={{width:12, height: 12}}></Image>
              <Text style={{color: Colors.white, fontWeight: '400', fontSize: 8, marginLeft: 5}}>Kota Salatiga</Text>
            </View>
          </View>
          <View>
            <Image style={styles.cardImageSm} source={require('./img/evenly.jpg')}></Image>
            <Text style={{color: Colors.white, fontWeight: '400', position: 'relative', top: -30, left: 16, fontSize: 11}}>Evenly Eatery</Text>
            <View style={{position: 'relative', top: -30, left: 14, flexDirection: 'row'}}>
              <Image source={require("./img/icon/fork-spoon.png")} style={{width:12, height: 12}}></Image>
              <Text style={{color: Colors.white, fontWeight: '400', fontSize: 8, marginLeft: 5}}>Kota Ungaran</Text>
            </View>
          </View>
          <View>
            <Image style={styles.cardImageSm} source={require('./img/semilir.jpg')}></Image>
            <Text style={{color: Colors.white, fontWeight: '400', position: 'relative', top: -30, left: 16, fontSize: 11}}>Dusun Semilir</Text>
            <View style={{position: 'relative', top: -30, left: 14, flexDirection: 'row'}}>
              <Image source={require("./img/icon/fork-spoon.png")} style={{width:12, height: 12}}></Image>
              <Text style={{color: Colors.white, fontWeight: '400', fontSize: 8, marginLeft: 5}}>Kabupaten Semarang</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  </View>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  topview: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    // backgroundColor: '#F05A22',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  userName: {
    fontWeight: "700",
    color: 'black'
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // elevation: 3,
  },
  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // backgroundColor: 'orange',
  },
  roundButton2: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#087cfc',
    position: "relative",
    top: -44,
    right: -137
  },
  cardImage: {
    width: 150,
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 10
  },
  cardImageSm: {
    width: 150,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 10
  }
});

export default App;
