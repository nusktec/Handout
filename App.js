import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import AccountScreen from './screens/AccountScreen';
//Setting up account settings

import * as NavigationBar from "react-native-navbar-color";
import SignInScreen from "./screens/SignInScreen";

export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        NavigationBar.setStatusBarTheme('light', false);
        NavigationBar.setStatusBarColor('#000', false)
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        navTransparent={true} hideNavBar={true}
                        component={WelcomeScreen}
                        initial
                    />
                    <Scene
                        key="signin"
                        navTransparent={true}
                        hideNavBar={true}
                        component={SignInScreen}
                    />
                    <Scene
                        navTransparent={true}
                        hideNavBar={true}
                        type='reset'
                        animationEnabled={true}
                        swipeEnabled={true}
                        tabs={true}
                        key="home">

                        <Scene
                            component={HomeScreen}
                            title="Home"
                        />

                        <Scene
                            component={LibraryScreen}
                            title="Library"
                        />

                        <Scene
                            component={AccountScreen}
                            title="Account"
                        />

                    </Scene>

                </Scene>
            </Router>
        );
    }
}