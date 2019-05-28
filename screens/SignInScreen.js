/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSplash, TextStyles} from './../style/styling';
import {Icon, Image, Input} from "react-native-elements";

export default class SignInScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            footerText: 'RSC Byte() Code'
        }
    }


    render() {
        return (
            <View style={StyleSplash.container}>
                <View style={{alignItems: 'center',justifyContent: 'center', flex: 1}}>
                    <Image style={{width: 120, height: 120, resizeMode: 'contain'}} source={require('./../assets/images/logo.png')}/>
                    <Text style={TextStyles.h2}>
                        Account Setup
                    </Text>
                    <View>

                    </View>
                </View>

                <View style={{bottom: 5}}>
                    <Text style={StyleSplash.footerCredit}>{this.state.footerText}</Text>
                </View>
            </View>
        );
    }
}
