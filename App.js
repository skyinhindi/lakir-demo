import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import react from 'react';
import { TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const DATA = [
    {
      id: '1',
      image: require('./assets/ham.png'),
    },
    {
      id: '2',
      image: require('./assets/tomato.png'),
    },
    {
      id: '3',
      image: require('./assets/garlic.png'),
    },
    {
      id: '4',
      image: require('./assets/cheese.png'),
    }
  ];

  const Item = ({ image }) => (
    <View style={styles.ingredientView}>
      <Image style={styles.ingredient} source={image} />
    </View>
  );

  const renderItem = ({ item }) => <Item image={item.image} />;

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.button}><FontAwesome name={'chevron-left'} /></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColor]}><FontAwesome name={'star'} style={{ color: '#fff' }} /></TouchableOpacity>
      </View>
      <Text style={styles.headingText}>Primevera{"\n"}Pizza</Text>
      <Text style={[styles.headingText, styles.priceText]}>$5.99</Text>
      <View style={styles.inlineContainer}>
        <View>
          <Text style={styles.textLight}>Size</Text>
          <Text style={styles.textDark}>Medium 14"</Text>
          <Text style={styles.textLight}>Crust</Text>
          <Text style={styles.textDark}>Thin Crust</Text>
          <Text style={styles.textLight}>Delivery in</Text>
          <Text style={styles.textDark}>30 Mins</Text>
        </View>
        <Image style={styles.pizzaImg} source={require('./assets/pizza1.png')} />
      </View>
      <View style={[styles.centerAlignChild, { marginTop: 30 }]}>
        <ScrollView>
          <FlatList horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.flatList} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </ScrollView>
        <TouchableOpacity style={[styles.buttonPill, styles.buttonColor]}><Text style={{ fontWeight: 'bold' }}>Place Order</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 30,
    paddingTop: 60,
  },
  centerAlignChild: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  priceText: {
    color: '#E4723C',
  },
  textLight: {
    fontSize: 14,
    color: '#CDCDCD',
  },
  textDark: {
    fontSize: 16,
    color: '#000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: '#CDCDCD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonColor: {
    borderColor: '#F5CA48',
    backgroundColor: '#F5CA48',
  },
  buttonPill: {
    width: 335,
    height: 62,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  pizzaImg: {
    position: 'relative',
    left: 60
  },
  flatList: {
    alignSelf: 'flex-start',
  },
  ingredientView: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 15,
    height: 80,
    width: 100,
  }
});
