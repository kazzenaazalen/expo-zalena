TUGAS 1
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    }}>
      {/* SEGITIGA */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          marginTop: 100,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'purple',
        }}
      />
      {/* PIL (TABUNG HORIZONTAL) */}
      <View
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 999, // membuat bentuk kapsul
        }}
      >
        <Text style={{ color: 'pink', fontSize: 16 }}>
          105841107122
        </Text>
      </View>
      {/* PERSEGI PANJANG */}
      <View
        style={{
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 0,
          width: 150,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          KAZZENAA ZALEN
        </Text>
      </View>
      <View>
        <View style={{
          flexDirection: "row"
        }}>
          <Image
            style={{
              width: 200,
              height: 400,
            }}
            source={{
              uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841107122_.jpg"
            }}
          />
          <Image
            style={{
              width: 250,
              height: 400,
            }}
            source={{
              uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif"
            }}
          />
        </View>

      </View>
    </ScrollView>
  );
}

TUGAS 2
import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';

const zal71GenerateImagePairs = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
   const altURL = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';
  // const altURL = require('../../assets/images/tes.jpg')
 // ← Gambar lokal kamu

  const pairs = [];

  for (let i = 71; i <= 79; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = altURL;
    pairs.push({ main, alt });
  }

  return pairs;
};

const zal71ImagePairs = zal71GenerateImagePairs();

export default function zal71GambarGrid() {
  const [zal71States, setzal71States] = useState(
    zal71ImagePairs.map(() => ({ clickCount: 0 }))
  );

  const zal71HandlePress = (index: number) => {
    setzal71States((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        // Maksimal 3 kali klik
        const newClickCount = Math.min(item.clickCount + 1, 3);
        return { clickCount: newClickCount };
      })
    );
  };

  const getImageSource = (pair: any, clickCount: number) => {
    return clickCount >= 1 ? pair.alt : pair.main;
  };

  const getScale = (clickCount: number) => {
    if (clickCount === 2) return 1.2;
    if (clickCount >= 3) return 2;
    return 1;
  };

  return (
    <ScrollView contentContainerStyle={zal71Styles.grid}>
      {zal71ImagePairs.map((pair, index) => {
        const clickCount = zal71States[index].clickCount;
        const image = getImageSource(pair, clickCount);
        const scale = getScale(clickCount);

        return (
          <Pressable key={index} onPress={() => zal71HandlePress(index)}>
            <Image
              source={{ uri: image }}
              style={[
                zal71Styles.image,
                {
                  transform: [{ scale }],
                },
              ]}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const zal71Styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#aaa',
  },
});

TUGAS 2 NEW UPDATE
import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';

const zal71GenerateImagePairs = () => {
  const altURL = 'https://i.pinimg.com/1200x/cf/e9/96/cfe996981acac35a7b7f01f1c5b95b78.jpg';

  const pairs = [
    { main: require('../assets/images/img1.jpg'), alt: altURL },
    { main: require('../assets/images/img2.jpg'), alt: altURL },
    { main: require('../assets/images/img3.jpg'), alt: altURL },
    { main: require('../assets/images/img4.jpg'), alt: altURL },
    { main: require('../assets/images/img5.jpg'), alt: altURL },
    { main: require('../assets/images/img6.jpg'), alt: altURL },
    { main: require('../assets/images/img7.jpg'), alt: altURL },
    { main: require('../assets/images/img8.jpg'), alt: altURL },
    { main: require('../assets/images/img9.jpg'), alt: altURL },
  ];

  return pairs;
};

const zal71ImagePairs = zal71GenerateImagePairs();

export default function zal71GambarGrid() {
  const [zal71States, setzal71States] = useState(
    zal71ImagePairs.map(() => ({ clickCount: 0 }))
  );


  const zal71HandlePress = (index: number) => {
    setzal71States((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newClickCount = Math.min(item.clickCount + 1, 3);
        return { clickCount: newClickCount };
      })
    );
  };


  const getImageSource = (pair: any, clickCount: number) => {
    return clickCount >= 1 ? { uri: pair.alt } : pair.main;
  };

  
  const getScale = (clickCount: number) => {
    if (clickCount === 2) return 1.2;
    if (clickCount >= 3) return 2;
    return 1;
  };

  return (
    <ScrollView contentContainerStyle={zal71Styles.grid}>
      {zal71ImagePairs.map((pair, index) => {
        const clickCount = zal71States[index].clickCount;
        const imageSource = getImageSource(pair, clickCount);
        const scale = getScale(clickCount);

        return (
          <Pressable key={index} onPress={() => zal71HandlePress(index)}>
            <Image
              source={imageSource}
              style={[
                zal71Styles.image,
                { transform: [{ scale }] },
              ]}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const zal71Styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#bbb',
  },
});

