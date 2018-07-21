'use strict';

import React from 'react';
import {
    StyleSheet
} from 'react-native';

var CategoryStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eef0f3',
  },
  category:{
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
  },
  category_bg_select:{
    backgroundColor:'#d7ead6',
  },
  category_bg_normal:{
    backgroundColor:'#ffffff',
  },
  line:{
    backgroundColor:'#eef0f3',
    height:1,
  },
});

export default CategoryStyle;