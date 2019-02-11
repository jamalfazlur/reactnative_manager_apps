import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { getEmployeeList } from '../actions';


class EmployeeList extends Component {

    static navigationOptions = {
        drawerLabel: 'List Of Employee'
    };

    componenetDidMount() {
        this.props.getEmployeeList();
    }

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
                    centerComponent={{text: 'List Employee', style: { color: '#FFF' }}}
                    containerStyle={{backgroundColor: 'salmon'}}
                />
                <Text>Ini Employee List</Text>
            </View>
        );
    }
}

export default connect(null, { getEmployeeList })(EmployeeList);