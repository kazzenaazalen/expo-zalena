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
