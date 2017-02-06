/**
 * Created by paul on 2017/2/6.
 */


import React, {Component} from 'react';
import {View, Text} from 'react-native';


// export default 导出当前组件，允许其他组件引入
// 可复用React组件
export default  class CustomScene extends Component {
    static
    defaultProps = {
        title: 'CustomScene'
    };

    render() {
        return (
            <View >
                <Text>
                    Hi! {this.props.title}
                </Text>

            </View>
        );
    }


}