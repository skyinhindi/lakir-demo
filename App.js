import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [page, changePage] = useState('1');

  const ingredientData = [
    {
      id: '1',
      image: require('./assets/ham.png')
    },
    {
      id: '2',
      image: require('./assets/tomato.png')
    },
    {
      id: '3',
      image: require('./assets/garlic.png')
    },
    {
      id: '4',
      image: require('./assets/cheese.png')
    }
  ];

  const popularData = [
    {
      id: '1',
      name: 'Primevera Pizza',
      weight: '540 gr',
      rating: '5',
      image: require('./assets/pizza1.png')
    },
    {
      id: '2',
      name: 'Primevera Pizza',
      weight: '540 gr',
      rating: '5',
      image: require('./assets/pizza1.png')
    },
    {
      id: '3',
      name: 'Primevera Pizza',
      weight: '540 gr',
      rating: '5',
      image: require('./assets/pizza1.png')
    }
  ];

  const categoryData = [
    {
      id: '1',
      name: 'Pizza',
      icon: require('./assets/pizza-icon.png')
    },
    {
      id: '2',
      name: 'Seafood',
      icon: require('./assets/shrimp-icon.png')
    },
    {
      id: '3',
      name: 'Soft Drinks',
      icon: require('./assets/soda-icon.png')
    },
    {
      id: '4',
      name: 'Pizza',
      icon: require('./assets/pizza-icon.png')
    },
    {
      id: '5',
      name: 'Seafood',
      icon: require('./assets/shrimp-icon.png')
    },
    {
      id: '6',
      name: 'Soft Drinks',
      icon: require('./assets/soda-icon.png')
    },
  ];

  const Item = ({ image }) => (
    <TouchableOpacity>
      <View style={styles.ingredient}>
        <Image source={image} />
      </View>
    </TouchableOpacity>
  );

  const Category = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.category}>
        <Image source={item.icon} />
        <Text style={{ color: '#313234', fontWeight: 'bold' }} > {item.name}</Text>
        <TouchableOpacity style={styles.categoryPill}><FontAwesome style={{ color: '#FFF' }} name={'chevron-right'} /></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const Popular = ({ item }) => (
    <TouchableOpacity onPress={() => changePage('2')}>
      <View style={styles.popularView}>
        <Text>Top of the Week</Text>
        <View style={styles.inlineContainer}>
          <View>
            <Text style={{ color: '#313234', fontWeight: 'bold' }} > {item.name}</Text>
            <Text style={{ color: '#C4C4C4' }}>{item.weight}</Text>
          </View>
          <Image style={{ height: 125, width: 210, position: 'relative', top: -20, left: 40 }} source={item.image} />
        </View>
        <View style={styles.inlineContainer}>
          <FontAwesome name={'plus'} />
          <Text style={{ color: '#000' }}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item image={item.image} />;
  const renderPopular = ({ item }) => <Popular item={item} />;
  const renderCategory = ({ item }) => <Category item={item} />;

  if (page === '1')
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image style={styles.profileImg} source={require('./assets/profile.png')} />
          <TouchableOpacity><FontAwesome style={{ color: '#313234', fontSize: 35 }} name={'bars'} /></TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, color: '#313234', marginTop: 30 }}>Food</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, }}>Delivery</Text>
        <View style={[styles.searchBar]}>
          <FontAwesome style={{ color: '#313234', fontSize: 22, position: 'relative', top: 12, left: -10 }} name={'search'} />
          <TextInput style={styles.input} placeholder="Search..." />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, }}>Categories</Text>
          <ScrollView>
            <FlatList horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} data={categoryData} renderItem={renderCategory} keyExtractor={item => item.id} />
          </ScrollView>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 16, }}>Popular</Text>
        <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} data={popularData} renderItem={renderPopular} keyExtractor={item => item.id} />
        <StatusBar style="auto" />
      </View>
    );
  else if (page === '2')
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => changePage('1')} style={styles.button}><FontAwesome name={'chevron-left'} /></TouchableOpacity>
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
            <FlatList horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} data={ingredientData} renderItem={renderItem} keyExtractor={item => item.id} />
          </ScrollView>
          <TouchableOpacity style={[styles.buttonPill, styles.buttonColor]}><Text style={{ fontWeight: 'bold' }}>Place Order</Text></TouchableOpacity>
        </View>
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
    marginTop: 20,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    color: '#313234',
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
  ingredient: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 15,
    height: 80,
    width: 100,
  },
  popularView: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 25,
    height: 161,
    width: 310,
    overflow: 'hidden',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  searchBar: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomColor: '#CDCDCD',
    borderLeftColor: '#E5E5E5',
    borderRightColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    borderWidth: 1,
    fontSize: 16,
    width: 280
  },
  category: {
    backgroundColor: '#FFF',
    height: 177,
    width: 105,
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryPill: {
    borderRadius: 25,
    backgroundColor: '#F26C68',
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
