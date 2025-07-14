import React, { useState } from 'react';
import { ScrollView, Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const createImageSet = () => {
  const altURL = 'https://i.pinimg.com/1200x/cf/e9/96/cfe996981acac35a7b7f01f1c5b95b78.jpg';

  return [
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
};

const imageData = createImageSet();

export default function ImageGridScreen() {
  const [states, setStates] = useState(
    imageData.map(() => ({
      clickCount: 0,
      scale: 1.0,
      isAlt: false,
    }))
  );

  const handleImagePress = (index: number) => {
    setStates((prev) =>
      prev.map((item, i) => {
        if (i !== index || item.clickCount >= 3) return item;

        const newClickCount = item.clickCount + 1;
        let newScale = item.scale;
        let newIsAlt = item.isAlt;

        if (newClickCount === 1) {
          newIsAlt = true; 
        } else if (newClickCount === 2) {
          newScale = 1.2;  
        } else if (newClickCount === 3) {
          newScale = 2.0;  
        }

        return {
          clickCount: newClickCount,
          scale: newScale,
          isAlt: newIsAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {imageData.map((pair, index) => {
        const { isAlt, scale } = states[index];
        const source = isAlt ? { uri: pair.alt } : pair.main;

        return (
          <Pressable key={index} onPress={() => handleImagePress(index)}>
            <Image
              source={source}
              style={[
                styles.imageCell,
                { transform: [{ scale }] },
              ]}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const IMAGE_SIZE = Dimensions.get('window').width / 3 - 20;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  imageCell: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#bbb',
  },
});
