/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSplash} from './../style/styling';
import {Image} from "react-native-elements";
import {Actions} from 'react-native-router-flux';
import * as AsyncStorage from "react-native/Libraries/Storage/AsyncStorage"; // New code

export default class WelcomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            footerText: 'RSC Byte() Code'
        };

        const TEMP_ACC = "account";

        //check if logged in to go to home
        setTimeout(()=>{
            (async()=>{
                try {
                    const value = await AsyncStorage.getItem(TEMP_ACC);
                    if(value!==null){
                        //is logged
                        Actions.home();
                    }else{
                        //not logged in
                        Actions.signin();
                    }
                }catch (error){
                    //go to sign in
                    Actions.signin();
                }
            })();
        }, 3000)
    }


    render() {
        return (
            <View style={StyleSplash.container}>
                <View style={StyleSplash.view1}>
                    <Image style={{width: 200, resizeMode: 'contain'}} source={require('./../assets/images/wlogo.png')} />
                </View>

                <View>
                    <Text style={StyleSplash.footerCredit}>{this.state.footerText}</Text>
                </View>
            </View>
        );
    }
}
