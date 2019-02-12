import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Header } from 'react-native-elements';
import { getEmployeeList } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

    static navigationOptions = {
        drawerLabel: 'List Of Employee'
    };

    componentDidMount() {
        this.props.getEmployeeList();
    }

    renderRow = ({item}) => {
        return <EmployeeListItem employee={item} navigation={this.props.navigation} />
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
                
                <FlatList 
                    data={this.props.employees}
                    renderItem={this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.employees);
    
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    console.log(employees);

    return { employees };
};

export default connect(mapStateToProps, { getEmployeeList })(EmployeeList);