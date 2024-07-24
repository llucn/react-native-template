import { UiPanelItemProps } from '@carbon/react-native';
import BeeIcon from '@carbon/icons/es/bee/20';
import LaunchIcon from '@carbon/icons/es/launch/20';

const navigationConfig = (changeView: (name: string) => void): { navigation: UiPanelItemProps[] } => {
  return {
    navigation: [
      {
        text: 'Start Center',
        leftIcon: BeeIcon,
        textBreakMode: 'tail',
        disabled: false,
        onPress: () => changeView('startCenter'),
      },
      {
        text: 'Test Page',
        leftIcon: BeeIcon,
        textBreakMode: 'tail',
        disabled: false,
        onPress: () => changeView('testPage'),
      },
      {
        text: 'Simple Page',
        leftIcon: BeeIcon,
        textBreakMode: 'tail',
        disabled: false,
        onPress: () => changeView('simplePage'),
      },
    ]
  }
};

export default navigationConfig;