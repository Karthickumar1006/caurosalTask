import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const App = () => {
  const [coursalData, setCoursalData] = useState([
    {
      id: 1,
      title: 'New Title ' + 1,
      subTitle: 'New Sub Title ' + 1,
      body: 'New Body ' + 1,
    },
    {
      id: 2,
      title: 'New Title ' + 2,
      subTitle: 'New Sub Title ' + 2,
      body: 'New Body ' + 2,
    },
    {
      id: 3,
      title: 'New Title ' + 3,
      subTitle: 'New Sub Title ' + 3,
      body: 'New Body ' + 3,
    },
    {
      id: 4,
      title: 'New Title ' + 4,
      subTitle: 'New Sub Title ' + 4,
      body: 'New Body ' + 4,
    },
  ]);
  const [counter, setCounter] = useState(5);

  // A function named addScreen is defined.
  // The counter state is incremented by 1 and updated using setCounter.
  // A new object is created with id, title, subTitle, and body properties.
  const addScreen = () => {
    setCounter(counter + 1);
    setCoursalData([
      ...coursalData,
      {
        id: counter,
        title: 'New Title ' + counter,
        subTitle: 'New Sub Title ' + counter,
        body: 'New Body ' + counter,
      },
    ]);
  };

  // A function named removeScreen is defined.
  // The pop() method is called on the newCoursalData array to remove the last element from the array.
  // This modifies the newCoursalData array directly, removing the last screen from it.
  const removeScreen = () => {
    const newCoursalData = [...coursalData];
    newCoursalData.pop();
    setCoursalData(newCoursalData);
  };

  // A function named renderItem is defined that takes an object as a parameter and extracts the 'item' property from it using destructuring.
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
        <Text style={styles.itemBody}>{item.body}</Text>
      </View>
    );
  };

  // A function named imageButton is defined that takes two parameters: functionName and imageUrl.
  const imageButton = (functionName, iamgeUrl) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={functionName}>
        <Image
          source={{
            uri: iamgeUrl,
          }}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel
        data={coursalData}
        layout={'default'}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideOpacity={0.2}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={15}
        useScrollView={true}
        firstItem={1}
      />

      <View style={styles.subContainer}>
        {imageButton(
          addScreen,
          'https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png',
        )}
        {imageButton(
          removeScreen,
          'https://img.freepik.com/free-icon/minus_318-825532.jpg',
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: '15%',
  },
  itemContainer: {
    width: ITEM_WIDTH / 1.1,
    height: SLIDER_HEIGHT / 1.5,
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 2,
  },
  itemTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  itemSubTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 3,
  },
  itemBody: {
    padding: 3,
    fontSize: 16,
  },
  subContainer: {
    padding: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 40,
    height: 40,
  },
});

export default App;
