import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSlideBar from './CustomSlideBar';


export const AppDrawerNavigator = createDrawerNavigator({
  Home:{
      screen:AppTabNavigator
  },
},

  {
      contentComponent:CustomSlideBar
  },
  {
      initialRouteName:"Home"
  }
);
