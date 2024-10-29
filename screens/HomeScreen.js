import { View, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import debounce from "@react-navigation/stack/src/utils/debounce";
import {fetchLocations, fetchWeatherForecast} from "../api/weather";
import {weatherImages} from "../constants";
import * as Progress from 'react-native-progress';
import {getData, storeData} from "../utils/asyncStorage";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLocation = (loc) => {
    //console.log(loc);
    setLocations([])
    setShowSearch(false)
      setLoading(true)
      fetchWeatherForecast({
          cityName: loc.name,
          days: '7'
      }).then(data => {
          setWeather(data)
          setLoading(false)
          storeData('city', loc.name)
          console.log("got data :", data )
      })
  };

  const  handleSearch = value => {
      if(value.length > 2) {
          fetchLocations({cityName : value}).then(data => {
              setLocations(data)
          })
      }
  }

    useEffect(() => {
        fetchMyWeatherData();
    }, []);

  const fetchMyWeatherData = async () => {
        let myCity = await getData('city');
        let cityName = 'Tunisia'
        if(myCity) cityName = myCity;
      fetchWeatherForecast({
          cityName : cityName ,
            days : 7
      }).then(data => {
        setWeather(data)
        setLoading(false)
      })
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), [])

  const {current, location} = weather;

  return (
      <View style={{ flex: 1, position: 'relative' }}>
        <StatusBar style="light" />

        <Image
            source={require('../assets/images/bg.png')}
            style={{ position: 'absolute', height: '100%', width: '100%' }}
            blurRadius={50}
        />

          {
              loading ?(
                  <>
                      <View className="flex-1 flex-row justify-center items-center">
                          <Progress.Circle size={50} indeterminate={true} color="white"  borderWidth="4" />
                      </View>
                  </>
              ) : (
                  <SafeAreaView style={{ flex: 1 }}>
                      <View
                          style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              borderRadius: 999,
                              margin: 16,
                              backgroundColor: showSearch ? theme.bgWhite(0.3) : 'transparent',
                              shadowColor: '#000',
                              shadowOpacity: 0.15,
                              shadowRadius: 10,
                              elevation: 3,
                              zIndex: showSearch ? 1000 : 1,
                          }}
                      >
                          {showSearch && (
                              <TextInput
                                  onChangeText={handleTextDebounce}
                                  placeholder="Search city"
                                  placeholderTextColor="lightgray"
                                  style={{ paddingLeft: 24, height: 40, color: 'white', flex: 1, fontSize:18 }}
                              />
                          )}

                          <TouchableOpacity
                              onPress={() => setShowSearch(!showSearch)}
                              style={{
                                  backgroundColor: theme.bgWhite(0.3),
                                  borderRadius: 999,
                                  padding: 15,
                                  margin: 4,
                              }}
                          >
                              <Feather name="search" size={24} color="white" />
                          </TouchableOpacity>
                      </View>

                      {showSearch && locations.length > 0 && (
                          <View
                              style={{
                                  position: 'absolute',
                                  left: 16,
                                  right: 16,
                                  backgroundColor: 'rgba(222,222, 222, 0.9)',
                                  top: 130,
                                  borderRadius: 20,
                                  paddingVertical: 8,
                                  zIndex: 1000,
                                  shadowOpacity: 0.3,
                                  shadowRadius: 15,
                              }}
                          >
                              {locations.map((loc, index) => (
                                  <TouchableOpacity
                                      onPress={() => handleLocation(loc)}
                                      key={index}
                                      style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          paddingVertical: 12,
                                          paddingHorizontal: 16,
                                          borderBottomWidth: index + 1 !== locations.length ? 1 : 0,
                                          borderBottomColor: '#EEE',
                                      }}
                                  >
                                      <Feather name="map-pin" size={20} color="gray" />
                                      <Text style={{ color: 'black', fontSize: 18, marginLeft: 8 }}>{loc?.name}, {loc?.country}</Text>
                                  </TouchableOpacity>
                              ))}
                          </View>
                      )}

                      {/* Forecast Section */}
                      <View style={{ marginHorizontal: 16, flex: 1, marginBottom: 70 }}>
                          <Text style={{ color: 'white', textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginTop:12, marginBottom:25 }}>
                              {location?.name},
                              <Text style={{ fontSize: 20, color: 'lightgray' }}>{" "+ location?.country}</Text>
                          </Text>

                          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                              <Image
                                  source={weatherImages[current?.condition?.text] || { uri: 'https:' + current?.condition?.icon }}
                                  style={{
                                      width: 150,
                                      height: 150,
                                      shadowColor: '#000',
                                      shadowOpacity: 0.3,
                                      shadowRadius: 15,
                                  }}
                              />
                          </View>

                          <View style={{ alignItems: 'center', marginBottom: 50 }}>
                              <Text style={{ color: 'white', fontSize: 56, fontWeight: 'bold' }}>{current?.temp_c}&#176;</Text>
                              <Text style={{ color: 'white', fontSize: 20, letterSpacing: 2 }}>{current?.condition?.text}</Text>
                          </View>

                          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12, marginBottom:50 }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <Image source={require('../assets/icons/wind.png')} style={{ width: 24, height: 24 }} />
                                  <Text style={{ color: 'white', fontWeight: '600' }}>{current?.wind_kph}Km</Text>
                              </View>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <Image source={require('../assets/icons/drop.png')} style={{ width: 24, height: 24 }} />
                                  <Text style={{ color: 'white', fontWeight: '600' }}>{current?.humidity}%</Text>
                              </View>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <Image source={require('../assets/icons/sun.png')} style={{ width: 24, height: 24 }} />
                                  <Text style={{ color: 'white', fontWeight: '600' }}>{weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
                              </View>
                          </View>

                          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 12 }}>
                              <AntDesign name="calendar" size={22} color="white" />
                              <Text style={{ color: 'white', fontSize: 16 }}>Daily forecast</Text>
                          </View>

                          <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
                              {
                                  weather?.forecast?.forecastday?.map((item, index) => {
                                      let date = new Date(item.date);
                                      let options = {weekday: 'long'}
                                      let dayName = date.toLocaleDateString('en-US', options);
                                      dayName= dayName.split(',')[0]
                                      return (
                                          <View
                                              key={index}
                                              style={{
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  width: 100,
                                                  borderRadius: 24,
                                                  paddingVertical: 16,
                                                  marginRight: 12,
                                                  backgroundColor: theme.bgWhite(0.2),
                                                  shadowOpacity: 0.3,
                                                  shadowRadius: 5,
                                              }}
                                          >
                                              <Image  source={weatherImages[item?.day?.condition?.text] || { uri: 'https:' + item?.day?.condition?.icon }}  style={{ width: 44, height: 44 }} />
                                              <Text style={{ color: 'white', marginTop: 8 }}>{dayName}</Text>
                                              <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>{item?.day?.avgtemp_c}&#176;</Text>
                                          </View>
                                      )
                                  })
                              }
                          </ScrollView>
                      </View>
                  </SafeAreaView>
              )
          }


      </View>
  );
}
