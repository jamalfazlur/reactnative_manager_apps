import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class EmployeeEdit extends Component {

    static navigationOptions = {
        drawerLabel: 'Update Data Employee'
    };

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
                    centerComponent={{text: 'Edit Employee', style: { color: '#FFF' }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#FFF',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                    containerStyle={{backgroundColor: 'salmon'}}
                />
                <Text>Ini Employee Edit</Text>
            </View>
        );
    }
}

export default EmployeeEdit;