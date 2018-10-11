import Onboarding from 'src/containers/main/onboarding';
import HomeConnected from 'src/containers/main/homeConnected';
import HomeDisconnected from 'src/containers/main/homeDisconnected';
import ServerList from 'src/containers/main/serversList';

import { wrapper } from '../acl';

export default {
  Onboarding: {
    screen: wrapper(Onboarding),
    navigationOptions: () => ({
      header: null,
    }),
  },
  HomeConnected: {
    screen: wrapper(HomeConnected),
    navigationOptions: () => ({
      header: null,
    }),
  },
  HomeDisconnected: {
    screen: wrapper(HomeDisconnected),
    navigationOptions: () => ({
      header: null,
    }),
  },
  ServerList: {
    screen: wrapper(ServerList),
    navigationOptions: () => ({
      header: null,
    }),
  },
};
