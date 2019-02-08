import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class EmployeeCreate extends Component {
    render() {
        return(
            <View>
                <Header 
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#FFF',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{text: 'Add Employee', style: { color: '#FFF' }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#FFF',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                    containerStyle={{backgroundColor: 'salmon'}}
                />
                <Text>Ini Employee Create</Text>
            </View>
        );
    }
}

export default EmployeeCreate;