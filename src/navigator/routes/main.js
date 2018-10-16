import Onboarding from 'src/containers/main/onboarding';
import HomeConnected from 'src/containers/main/homeConnected';
import HomeDisconnected from 'src/containers/main/homeDisconnected';
import ServersList from 'src/containers/main/serversList';

export default {
  Onboarding: {
    screen: Onboarding,
    navigationOptions: () => ({
      header: null,
    }),
  },
  HomeConnected: {
    screen: HomeConnected,
    navigationOptions: () => ({
      header: null,
    }),
  },
  HomeDisconnected: {
    screen: HomeDisconnected,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ServersList: {
    screen: ServersList,
    navigationOptions: () => ({
      header: null,
    }),
  },
};
