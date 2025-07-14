import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';

// Fungsi untuk menyusun daftar gambar utama dan alternatif
const createImageSet = () => {
  const alternateImageURL = 'https://i.pinimg.com/1200x/cf/e9/96/cfe996981acac35a7b7f01f1c5b95b78.jpg';

  return [
    { main: require('../assets/images/img1.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img2.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img3.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img4.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img5.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img6.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img7.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img8.jpg'), alt: alternateImageURL },
    { main: require('../assets/images/img9.jpg'), alt: alternateImageURL },
  ];
};

const imageData = createImageSet();

export default function ImageGridScreen() {
  const [clickStates, setClickStates] = useState(
    imageData.map(() => ({ count: 0 }))
  );

  const onImagePress = (idx: number) => {
    setClickStates((prevStates) =>
      prevStates.map((state, i) =>
        i === idx
          ? { count: Math.min(state.count + 1, 3) }
          : state
      )
    );
  };

  const selectImageSource = (imagePair: any, clicks: number) => {
    return clicks >= 1 ? { uri: imagePair.alt } : imagePair.main;
  };

  const calculateScale = (clicks: number) => {
    if (clicks === 2) return 1.2;
    if (clicks >= 3) return 2;
    return 1;
  };

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {imageData.map((pair, idx) => {
        const { count } = clickStates[idx];
        const source = selectImageSource(pair, count);
        const scaleFactor = calculateScale(count);

        return (
          <Pressable key={idx} onPress={() => onImagePress(idx)}>
            <Image
              source={source}
              style={[
                styles.imageItem,
                { transform: [{ scale: scaleFactor }] },
              ]}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  imageItem: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#bbb',
    resizeMode: 'cover',
  },
});
