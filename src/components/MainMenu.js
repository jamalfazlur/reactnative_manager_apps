import { DrawerNavigator } from 'react-navigation';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeList from './EmployeeList';
import Profile from './Profile';
//import LoginForm from './LoginForm';

export default DrawerNavigator (
    {
        EmployeeList: {
            screen: EmployeeList
        },
        AddNewEmployee: {
            screen: EmployeeCreate
        },
        EditEmployee: {
            screen: EmployeeEdit
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'EmployeeList',
        headerMode: 'none'
    }
)