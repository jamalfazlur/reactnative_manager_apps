import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, Button, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    
    static navigationOptions = {
        drawerLabel: 'Add New Employee'
    };

    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate(name, phone, shift || 'Sunday');
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
                    centerComponent={{text: 'Add Employee', style: { color: '#FFF' }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#FFF',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                    containerStyle={{backgroundColor: 'salmon'}}
                />
                {/* <Text>Ini Employee Create</Text> */}

                <Card>
                    <EmployeeForm />

                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Save
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);