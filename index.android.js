/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView,
    Navigator
} from 'react-native';

export default class ReactNativeDemo extends Component {
    render() {
        return (
            <Text style={styles.welcome}>ReactNative Demo!!!</Text>
        );
    }
}

class BananasDemo extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <Image source={pic} style={{width:193, height:110}}/>
        );

    }
}

//////////////////////////////////////////////
//props

class Greeting extends Component {
    render() {

        return (
            <Text>
                Hello {this.props.name}
            </Text>

        );
    }
}

class LotsOfGreeting extends Component {
    render() {

        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="Java"/>
                <Greeting name="Python"/>
            </View>
        );
    }
}


//////////////////////////////////////////////////////
//state

class Blink extends Component {
    constructor(props) {
        super(props)

        this.state = {showText: true}

        // 计时器
        setInterval(() => {
            this.setState({showText: !this.state.showText})
        }, 1000);

    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text style={{alignItems:'center'}}>{display}</Text>
        );
    }

}

class BlinkApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Blink text='Hah'/>
                <Blink text='Yoy'/>
                <Blink text='Aha'/>
            </View>

        );

    }
}

/////////////////////////////////////////////////

// FlexDimension

class FlexDimension extends Component {
    render() {

        return (
            <View >
                <View style={{width:50,height:50, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

//////////////////////////////////////////////////

// FlexBox

class FlexDirectionBasics extends Component {

    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}

///////////////////////////////////////////

//TextInput

class PizzaTranslator extends Component {

    constructor(props) {
        super(props)

        this.state = {text: ''}
    }

    render() {
        return (
            <View style={{padding: 15}}>
                <TextInput
                    style={{height: 50}}
                    placeholder="Type here to translate"
                    onChangeText={(text)=> this.setState({text})}>
                </TextInput>

                <Text style={{padding: 15, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '哈').join(' ')}
                </Text>
            </View>
        );
    }

}

///////////////////////////////////////////////////////

class FolderImg extends Component {

    render() {

        return (
            <Image
                source={require('./img/ic_launcher.png')}>
            </Image>
        );
    }

}


///////////////////////////////////////////////////


class ScrolledDown extends Component {

    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}> Scroll</Text>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>
                <Image source={require('./img/ic_launcher.png')}></Image>

            </ScrollView>

        );
    }

}

////////////////////////////////////////////////////////////////

class ListViewScroll extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(
                ['Java', 'Cpp', 'C', 'PHP', 'Python', 'JavaScript', 'Python', 'Shell', 'Lisp']
            )
        };
    }

    render() {
        return (
            <View style={{flex:1, paddingTop:24}}>

                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData) => <Text style={{fontSize:80,height: 200}}> {rowData}</Text>}
                >
                </ListView>
            </View>
        );
    }

}

////////////////////////////////////////////////////////////////////

// Navigator

import CustomScene from './CustomScene';

class ExportDemo extends Component {

    render() {
        return (
            <CustomScene/>
        );

    }

}

import CustomNewScene from './CustomNewScene';

class RenderScene extends Component{
   render(){
        return(
            <Navigator
                initialRoute={{title: 'Initial Scene', index: 0}}

                renderScene={(route,navigator) =>
                    <CustomNewScene
                    title={route.title}

                    onForward = {
                        () => {
                            const nextIndex = route.index + 1;
                            navigator.push({

                                title: "Scene Index" + nextIndex,
                                index: nextIndex,

                            });
                        }
                    }


                    onBack = {
                        () => {
                            if (route.index > 0){
                                navigator.pop();
                            }
                        }
                    }
                    />
                }
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }

});


/**
 *  注册应用，将应用作为整体注册，而非分组件注册
 */
AppRegistry.registerComponent('ReactNativeDemo', () => RenderScene);
