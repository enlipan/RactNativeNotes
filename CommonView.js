/**
 * Created by paul on 2017/2/7.
 */


import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Button,
    ActivityIndicator,
    DrawerLayoutAndroid,
    Image,
    Slider,
    ViewPagerAndroid,
    ToolbarAndroid,
    Switch
} from 'react-native';

export default class CommonView extends Component {
    render() {
        return (
            <ToolBarAndroidCompo />
        );
    }

}

const onButtonPress = () => {
    Alert.alert('Button has been Pressed!!!');
};

class ButtonComponent extends Component {
    render() {

        return (
            <Button
                disabled={true}
                onPress={onButtonPress}
                title='Button'
                color='skyblue'
                accessibilityLabel='click Learn More'>

            </Button>
        );
    }

}

///////////////////////////////////////////////////////////

type State = {animating: boolean;}
type Timer = number;

class AnimatingActivityIndicator extends Component {
    state: State;
    _timer: Timer;

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }

    componentDidMount() {
        this.setToggleTimeout();
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    setToggleTimeout() {
        this._timer = setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    }

    render() {
        return (
            <ActivityIndicator
                animating={ this.state.animating}
                style={[styles.centering,{height: 80}]}
                size={'large'}
            />
        );
    }

}


///////////////////////////////////////////////////////


class NavigatingCompo extends Component {

    render() {
        var navigationView = (<View style={{flex:1,backgroundColor:'#fff'}}>
                <Text style={{margin:10,fontSize:15,textAlign:'left'}}> In the Drawer</Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={()=> navigationView}
            >
                <View style={{flex:1,alignItems:'center'}}>

                    <Text style={{margin:10,fontSize:15,textAlign:'right'}}>Hello</Text>
                    <Text style={{margin:10,fontSize:15,textAlign:'right'}}>Word!</Text>

                </View>

            </DrawerLayoutAndroid>
        );
    }

}


////////////////////////////////////////////////////////////////

class ImageCompo extends Component {

    render() {
        return (
            <View>
                <Image
                    style={styles.icon}
                    source={require('./img/ic_launcher.png')}
                >
                </Image>

                <Image
                    style={{height:50,width:50}}
                    source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                >
                </Image>

            </View>

        );
    }

}


////////////////////////////////////////////////////////////////////
class SlideCompo extends Component {

    static defaultProps = {
        value: 0,
    }

    state = {
        value: this.props.value,
    }

    render() {

        return (
            <View>
                <Slider
                    {...this.props}
                    onValueChange={(value) => this.setState({value:value})}
                >
                </Slider>
            </View>


        );
    }
}

/////////////////////////////////////////////////////////////////////

class ViewPagerCompo extends Component {


    render() {
        return (

            <ViewPagerAndroid
                style={{flex:1}}
                initialPage={0}
            >

                <View style={styles.pageStyle}>
                    <Text>First</Text>
                </View>
                <View style={styles.pageStyle}>
                    <Text>Second</Text>
                </View>
                <View style={styles.pageStyle}>
                    <Text>Third</Text>
                </View>

            </ViewPagerAndroid>
        );

    }
}

/////////////////////////////////////////////////////////////

class ToolBarAndroidCompo extends Component {

    static title = '<ToolbarAndroid>';
    static description = 'Examples of using the Android toolbar.';

    state = {
        actionText: 'Example app with toolbar component',
        toolbarSwitch: false,
        colorProps: {
            titleColor: '#3b5998',
            subtitleColor: '#6a7180',
        },
    };

    render() {
        return (

            <ToolbarAndroid
                logo={require('./img/ic_launcher.png')}
                style={[styles.toolbar,{backgroundColor:'skyblue'}]}>
                <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                    <Switch
                        value={this.state.toolbarSwitch}
                        onValueChange={(value) => this.setState({'toolbarSwitch': value})}/>
                    <Text>{'\'Tis but a switch'}</Text>
                </View>
            </ToolbarAndroid>

        );

    }


}


const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    outerContainer: {
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },

    segment: {
        marginBottom: 10,
    },

    closeButton: {
        position: 'absolute',
        top: 30,
        left: 10,
    },

    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});