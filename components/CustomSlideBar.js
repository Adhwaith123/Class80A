import React,{Component} from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import {View,StyleSheet} from 'react-native';

export default class CustomSlideBar extends Component{
    render(){
        return(
            <View style={styles.container}>
              <Text>CustomSlideBar</Text>
            </View>
        )
    }
}


const styles  =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
      },
})