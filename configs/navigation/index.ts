import { UiPanelItemProps } from '@carbon/react-native';
import BeeIcon from '@carbon/icons/es/bee/20';
import LaunchIcon from '@carbon/icons/es/launch/20';
import navigationConfig from './navigation';

type ChangeViewFunc = (name: string, params?: any) => void;

type NavigationItem = {
  text: string,
  leftIcon?: string,
  textBreakMode?: string,
  disabled?: boolean,
  openOnLoad?: boolean,
  route?: {
    name: string,
    params?: any
  },
  children?: NavigationItem[],
};

function composeItem(navigation: NavigationItem, changeView: ChangeViewFunc): UiPanelItemProps {
  var leftIcon = undefined;
  switch (navigation.leftIcon) {
    case 'BeeIcon':
      leftIcon = BeeIcon;
      break;
    case 'LaunchIcon':
      leftIcon = LaunchIcon;
      break;
    default:
      leftIcon = undefined;
  }

  return {
    text: navigation.text,
    leftIcon: leftIcon,
    textBreakMode: 'tail',
    disabled: false,
    openOnLoad: navigation.openOnLoad,
    children: navigation.children ? navigation.children.map(e => composeItem(e, changeView)) : undefined,
    onPress: navigation.route ? () => changeView(navigation.route!.name, navigation.route!.params) : undefined
  };
}

export default function getNavigation(changeView: ChangeViewFunc): { navigation: UiPanelItemProps[] } {
  return {
    navigation: navigationConfig.navigation.map(e => composeItem(e, changeView))
  };
}