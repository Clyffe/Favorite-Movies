import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import MovieItem from './MovieItem.js';


const FavoriteList = ({ list = [], goToMovie }) => {
  return (
    <ScrollView style={style.list}>
      {
        list.map((item, index) => (
          <MovieItem movie={item} key={index} goToMovie={goToMovie}/>
      ))
      }
    </ScrollView>
  );
}


const style = StyleSheet.create({
  list: {
    flex: 1
  },
})

export default FavoriteList;
