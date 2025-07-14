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