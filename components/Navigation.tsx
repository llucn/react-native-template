import React from 'react';
import { UiPanel, UiPanelItemProps } from '@carbon/react-native';
import BeeIcon from '@carbon/icons/es/bee/20';
import LaunchIcon from '@carbon/icons/es/launch/20';
import navigationConfig from '../configs/navigation';

type SetOpen = (open: boolean) => void;
type ChangeView = (name: string, params?: any) => void;

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
  children?: NavigationItem[]
};

function composeItem(item: NavigationItem, changeView: ChangeView): UiPanelItemProps {
  var leftIcon = undefined;
  switch (item.leftIcon) {
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
    text: item.text,
    leftIcon: leftIcon,
    textBreakMode: 'tail',
    disabled: false,
    openOnLoad: item.openOnLoad,
    children: item.children ? item.children.map(e => composeItem(e, changeView)) : undefined,
    onPress: item.route ? () => changeView(item.route!.name, item.route!.params) : undefined
  };
}

export default function Navigation(props: {
  open: boolean, 
  onClose: SetOpen, 
  changeView: ChangeView, 
  closeOnNoChildrenPress: boolean 
}) {
  const { open, onClose, changeView, closeOnNoChildrenPress } = props;
  const itemProps: UiPanelItemProps[] = navigationConfig.navigation.map(e => composeItem(e, changeView))

  return (
    <UiPanel 
      open={open} 
      onClose={() => onClose(false)} 
      items={itemProps} 
      closeOnNoChildrenPress={closeOnNoChildrenPress} 
    />
  );
};