/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 14:36:07
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-12 16:20:08
* @flow
*/

const TEXTS = {
  ONBOARDING: {
    HEADER: {
    },
    SCREEN: {
      STARTED_BUTTON: "Get started",
      CARUSEL_ITEMS: [
        {
          id: 0,
          title: "Securd, forever",
          text: "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim,"
            + " pulvinar lobortis.",
        },
        {
          id: 1,
          title: "Someone else 1",
          text: "Maecenas tempus tellus eget condimentum. Nullam nulla eros ultricies sit. Proin pretium leo ac"
            + " pellentesque",
        },
        {
          id: 2,
          title: "Someone else 2",
          text: "Duis arcu tortor suscipit eget. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum"
            + " eget, diam. Cras sagittis. In hac habitasse platea dictumst. Duis arcu tortor suscipit eget."
            + " Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum",
        },
      ],
    },
  },
  HOME_CONNECTED: {
    HEADER: {
      TITLE: "VPN"
    },
    SCREEN: {
      DISCONNECT_BUTTON: "Disconnect",
    },
  },
  HOME_DISCONNECTED: {
    HEADER: {
      TITLE: "VPN"
    },
    SCREEN: {
      CONNECT_BUTTON: "Connect now",
    },
  },
  SERVERS_LIST: {
    HEADER: {
      TITLE: "Pick your server"
    },
  },
};

const INDICATOR_STATUS = {
  CONNECTED: "Connected",
  DISCONNECTED: "Disconnected",
};

export { TEXTS, INDICATOR_STATUS };
