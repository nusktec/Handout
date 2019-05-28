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
import * as NavigationBar from "react-native-navbar-color";
import {Button, Image} from "react-native-elements";
import Toast from "react-native-easy-toast";

export default class HomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            footerText: 'Home Screen'
        }
    }

    render() {
        return (
            <View style={StyleSplash.container}>
                <View style={StyleSplash.view1}>

                </View>

                <View>
                    <Text style={StyleSplash.footerCredit}>{this.state.footerText}</Text>
                </View>
            </View>
        );
    }
}
