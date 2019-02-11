import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class Profile extends Component {
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
                    centerComponent={{text: 'Profile', style: { color: '#FFF' }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#FFF',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                    containerStyle={{backgroundColor: 'salmon'}}
                />
                <Text>Ini Profile</Text>
            </View>
        );
    }
}

export default Profile;