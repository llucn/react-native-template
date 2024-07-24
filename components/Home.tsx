import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { UiPanel, UiPanelItemProps, ViewWrapper, TopNavigationBar } from '@carbon/react-native';
import MenuIcon from '@carbon/icons/es/menu/20';
import CloseIcon from '@carbon/icons/es/close/20';
import ExitIcon from '@carbon/icons/es/logout/20';
import navigationConfig from '../configs/navigation';
import pagesConfig from '../configs/pages';
import routersConfig from '../configs/routers';
import Page from './Page';

export default function Home(props: {
  goExit: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('index');
  const [title, setTitle] = React.useState('');
  const [components, setComponents] = React.useState<any>({ components: [] });
  
  const togglePanel = (): void => {
    setOpen(!open);
  };

  const goExit = (): void => {
    props.goExit();
  }

  const changeView = (name: string) => {
    setName(name);
  }

  const itemProps: UiPanelItemProps[] = navigationConfig(changeView).navigation;

  React.useEffect(() => {
    const rs = routersConfig.routers.filter(r => r.name === name);
    if (rs && rs.length > 0) {
      setTitle(rs[0].title);
      const ps = pagesConfig.pages.filter(p => p.name === rs[0].page);
      if (ps && ps.length > 0) {
        setComponents(ps[0].components);
      }
    }
  }, [name]);

  return (
    <ViewWrapper hasTopNavigation={true}>
      <TopNavigationBar
        title={title}
        leftItems={[{ text: 'Toggle menu', icon: open ? CloseIcon : MenuIcon, onPress: togglePanel, active: open }]}
        rightItems={[{ text: 'Return to components', icon: ExitIcon, onPress: goExit }]}
      />
      <ScrollView keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container} style={styles.view}>
        <Page name={name} changeView={changeView} components={components} />
      </ScrollView>
      <UiPanel open={open} onClose={() => setOpen(false)} items={itemProps} closeOnNoChildrenPress={true} />
    </ViewWrapper>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 0,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 6,
  },
});