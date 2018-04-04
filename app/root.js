
import { Navigation } from 'react-native-navigation'
import Splash from './Splash'
export function registerScreens() {
  Navigation.registerComponent('splash', () => Splash)
}
registerScreens()


Navigation.startSingleScreenApp({
  screen: {
    screen: 'splash',
    navigatorStyle: {navBarHidden: true,statusBarColor:'#144396'},
  }
})
