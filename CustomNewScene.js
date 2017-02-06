/**
 * Created by paul on 2017/2/6.
 */


import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export  default class CustomNewScene extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>
                    Current Scene: {this.props.title}
                </Text>

                <TouchableHighlight style={{flex:1,flexDirection:'column',justifyContent: 'center',alignItems: 'center',}} onPress={this.props.onForward}>
                    <Text style={{fontSize: 24}}> 点我下一场景 </Text>
                </TouchableHighlight>

                <TouchableHighlight style={{flex:1,flexDirection:'column',justifyContent: 'center',alignItems: 'center',}} onPress={this.props.onBack}>
                    <Text style={{fontSize: 24}}> 点我上一场景</Text>
                </TouchableHighlight>
            </View>
        );
    }
}