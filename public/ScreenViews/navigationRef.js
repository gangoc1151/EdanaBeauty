import { NavigationActions, StackActions } from 'react-navigation';
import * as React from 'react';

let _navigator;
export const navigationRef = React.createRef();

// export const SetNavigator = (navigatorRef) => {
//     _navigator = navigatorRef;
// }


export const navigate = (routeName, params) => {
    navigationRef.current?.navigate(routeName, params)
}

// export const reset = (routeName, params) => {
//     _navigator.dispatch(
//         StackActions.reset({
//             index: 0,
//             key: null,
//             actions: [
//                 NavigationActions.navigate({
//                     routeName,
//                     params,
//                 })]
//         })
//     );
// }
