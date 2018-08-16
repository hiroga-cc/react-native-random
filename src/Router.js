import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Drawer, Scene, Router } from 'react-native-router-flux';
import DrawerComponent from './components/drawer/DrawerComponent';
import ThreeComponent from './components/ThreeComponent';
import Camera from './components/Camera';
import PhotoSwiper from './components/PhotoSwiper';

class RouterComponent extends Component {

    // renderScene

    render() {
        return (
            <Router>
                <Drawer key="root" contentComponent={DrawerComponent}>
                    <Scene key="threeComponent" component={ThreeComponent} />
                    <Scene key="camera" component={Camera} />
                    <Scene key="swiper" component={PhotoSwiper} />
                </Drawer>
            </Router>
        );
    }
};


export default RouterComponent;