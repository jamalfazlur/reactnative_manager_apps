import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner} from './common';
import { StackActions, NavigationActions } from 'react-navigation';
import { Header } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    componentDidUpdate() {
        if(this.props.user) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu'})],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
        console.log(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
        console.log(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor:'#FFF'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        )
    }

    render() {
        return(
           <View>
               <Header centerComponent={{ text: 'LOGIN PLEASE', style: {color: '#FFF'}}} containerStyle={{backgroundColor: 'salmon'}}/>
               <Card>
                   <CardSection>
                       <Input 
                            label="Email" 
                            placeholder="Name@email.com"
                            onChangeText={this.onEmailChange} 
                            value={this.props.email}
                        />
                   </CardSection>
                   <CardSection>
                       <Input 
                            secureTextEntry
                            label="Password"
                            placeholder="Your Pass"
                            onChangeText={this.onPasswordChange}
                            value={this.props.password}
                        />
                   </CardSection>
                   {this.renderError()}
                   <CardSection>
                       {this.renderButton()}
                   </CardSection>
               </Card>
           </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
const mapStateToProps = (state) => {
    const { email, password, error, loading, user } = state.auth;

    return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);