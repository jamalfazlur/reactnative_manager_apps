import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { employeeUpdate } from '../actions';

class EmployeeListItem extends Component { 

    onRowPress = () => {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate(prop, value);
        });

        this.props.navigation.navigate('EditEmployee');
    }

    render() {
        const { name, phone } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress} >
                <View>
                    <CardSection>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Text style={styles.phoneStyle}>{phone}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    nameStyle: {
        fontSize: 18,
        paddingLeft: 15
    }, phoneStyle: {
        fontSize: 13,
        paddingLeft: 15
    }
};

export default connect(null, { employeeUpdate })(EmployeeListItem);