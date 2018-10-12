import * as React from 'react';

/**
 * Mock react navigation
 */
jest.mock('react-navigation', () => {
  // eslint-disable-next-line global-require
  const { View } = require("react-native");

  return {
    createStackNavigator: () => () => <View />,
    createBottomTabNavigator: () => () => <View />,
    getParams: (param, defaultValue) => defaultValue,
  };
});

jest.mock("react-native", () => {
  const createMockComponent = (name) => {
    const mockedComponent = ({ children }) => ( // eslint-disable-line
      <div>{children}</div>
    );
    mockedComponent.displayName = name;
    return mockedComponent;
  };

  const dimensions = {
    window: {
      width: 0,
      height: 0
    }
  };

  return {
    ActivityIndicator: createMockComponent("ActivityIndicator"),
    ART: {
      Surface: createMockComponent("Surface"),
      Shape: createMockComponent("Shape"),
      Path: jest.fn(() => ({
        path: [],
        moveTo: () => this,
        lineTo: () => this,
        arc: () => this,
        close: () => this,
      })),
      Group: createMockComponent("Group"),
      RadialGradient: jest.fn(),
      LinearGradient: jest.fn(),
      Text: createMockComponent("Text")
    },
    Button: createMockComponent("Button"),
    CheckBox: createMockComponent("CheckBox"),
    DatePickerIOS: createMockComponent("DatePickerIOS"),
    DrawerLayoutAndroid: createMockComponent("DrawerLayoutAndroid"),
    FlatList: createMockComponent("FlatList"),
    Image: createMockComponent("Image"),
    ImageBackground: createMockComponent("ImageBackground"),
    ImageEditor: createMockComponent("ImageEditor"),
    ImageStore: createMockComponent("ImageStore"),
    KeyboardAvoidingView: createMockComponent("KeyboardAvoidingView"),
    ListView: createMockComponent("ListView"),
    MaskedViewIOS: createMockComponent("MaskedViewIOS"),
    Modal: createMockComponent("Modal"),
    NavigatorIOS: createMockComponent("NavigatorIOS"),
    Picker: createMockComponent("Picker"),
    PickerIOS: createMockComponent("PickerIOS"),
    ProgressBarAndroid: createMockComponent("ProgressBarAndroid"),
    ProgressViewIOS: createMockComponent("ProgressViewIOS"),
    SafeAreaView: createMockComponent("SafeAreaView"),
    ScrollView: createMockComponent("ScrollView"),
    SectionList: createMockComponent("SectionList"),
    SegmentedControlIOS: createMockComponent("SegmentedControlIOS"),
    Slider: createMockComponent("Slider"),
    SnapshotViewIOS: createMockComponent("SnapshotViewIOS"),
    Switch: createMockComponent("Switch"),
    RefreshControl: createMockComponent("RefreshControl"),
    StatusBar: createMockComponent("StatusBar"),
    SwipeableFlatList: createMockComponent("SwipeableFlatList"),
    SwipeableListView: createMockComponent("SwipeableListView"),
    TabBarIOS: createMockComponent("TabBarIOS"),
    Text: createMockComponent("Text"),
    TextInput: createMockComponent("TextInput"),
    ToastAndroid: createMockComponent("ToastAndroid"),
    ToolbarAndroid: createMockComponent("ToolbarAndroid"),
    Touchable: createMockComponent("Touchable"),
    TouchableHighlight: createMockComponent("TouchableHighlight"),
    TouchableNativeFeedback: createMockComponent("TouchableNativeFeedback"),
    TouchableOpacity: createMockComponent("TouchableOpacity"),
    TouchableWithoutFeedback: createMockComponent("TouchableWithoutFeedback"),
    View: createMockComponent("View"),
    ViewPagerAndroid: createMockComponent("ViewPagerAndroid"),
    VirtualizedList: createMockComponent("VirtualizedList"),
    WebView: createMockComponent("WebView"),

    AccessibilityInfo: ({
      fetch: jest.fn(),
      addEventListener: jest.fn(),
      setAccessibilityFocus: jest.fn(),
      announceForAccessibility: jest.fn(),
      removeEventListener: jest.fn(),
    }),
    ActionSheetIOS: ({
      showActionSheetWithOptions: jest.fn(),
      showShareActionSheetWithOptions: jest.fn(),
    }),
    Alert: ({
      alert: jest.fn(),
    }),
    AlertIOS: ({
      alert: jest.fn(),
      prompt: jest.fn(),
    }),
    Animated: ({
      View: createMockComponent("View"),
      Image: createMockComponent("Image"),
      Text: createMockComponent("Text"),
      Value: jest.fn(),
      decay: jest.fn(),
      timing: jest.fn(),
      spring: jest.fn(),
      add: jest.fn(),
      divide: jest.fn(),
      multiply: jest.fn(),
      modulo: jest.fn(),
      diffClamp: jest.fn(),
      delay: jest.fn(),
      sequence: jest.fn(),
      parallel: jest.fn(),
      stagger: jest.fn(),
      loop: jest.fn(),
      event: jest.fn(),
      forkEvent: jest.fn(),
      unforkEvent: jest.fn(),
      createAnimatedComponent: jest.fn(),
    }),
    AppRegistry: ({
      setWrapperComponentProvider: jest.fn(),
      registerConfig: jest.fn(),
      registerComponent: jest.fn(),
      registerRunnable: jest.fn(),
      registerSection: jest.fn(),
      getAppKeys: jest.fn(),
      getSectionKeys: jest.fn(),
      getSections: jest.fn(),
      getRunnable: jest.fn(),
      getRegistry: jest.fn(),
      setComponentProviderInstrumentationHook: jest.fn(),
      runApplication: jest.fn(),
      unmountApplicationComponentAtRootTag: jest.fn(),
      registerHeadlessTask: jest.fn(),
      startHeadlessTask: jest.fn(),
    }),
    AppState: ({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
    AsyncStorage: ({
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      mergeItem: jest.fn(),
      clear: jest.fn(),
      getAllKeys: jest.fn(),
      flushGetRequests: jest.fn(),
      multiGet: jest.fn(),
      multiSet: jest.fn(),
      multiRemove: jest.fn(),
      multiMerge: jest.fn(),
    }),
    BackAndroid: ({
      exitApp: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
    BackHandler: ({
      exitApp: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
    CameraRoll: ({
      saveToCameraRoll: jest.fn(),
      getPhotos: jest.fn(),
    }),
    Clipboard: ({
      getString: jest.fn(),
      setString: jest.fn(),
    }),
    DatePickerAndroid: ({
      open: jest.fn(),
      dateSetAction: jest.fn(),
      dismissedAction: jest.fn(),
    }),
    DeviceInfo: undefined,
    Dimensions: {
      set: jest.fn(),
      get: jest.fn(argument => dimensions[argument]),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    Easing: ({
      step0: jest.fn(),
      step1: jest.fn(),
      linear: jest.fn(),
      ease: jest.fn(),
      quad: jest.fn(),
      cubic: jest.fn(),
      poly: jest.fn(),
      sin: jest.fn(),
      circle: jest.fn(),
      exp: jest.fn(),
      elastic: jest.fn(),
      back: jest.fn(),
      bounce: jest.fn(),
      bezier: jest.fn(),
      in: jest.fn(),
      out: jest.fn(),
      inOut: jest.fn(),
    }),
    findNodeHandle: undefined,
    I18nManager: undefined,
    ImagePickerIOS: ({
      canRecordVideos: jest.fn(),
      canUseCamera: jest.fn(),
      openCameraDialog: jest.fn(),
      openSelectDialog: jest.fn(),
    }),
    InteractionManager: ({
      runAfterInteractions: jest.fn(),
      createInteractionHandle: jest.fn(),
      clearInteractionHandle: jest.fn(),
      setDeadline: jest.fn(),
    }),
    Keyboard: ({
      addListener: jest.fn(),
      remove: jest.fn(),
      removeAllListeners: jest.fn(),
      dismiss: jest.fn(),
    }),
    LayoutAnimation: ({
      configureNext: jest.fn(),
      create: jest.fn(),
      checkConfig: jest.fn(),
    }),
    Linking: ({
      constructor: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      openURL: jest.fn(),
      canOpenURL: jest.fn(),
      getInitialURL: jest.fn(),
    }),
    NativeEventEmitter: undefined,
    NetInfo: ({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      fetch: jest.fn(),
      getConnectionInfo: jest.fn(),
      isConnectionExpensive: jest.fn(),
    }),
    PanResponder: ({
      create: jest.fn(),
    }),
    PermissionsAndroid: ({
      constructor: jest.fn(),
      checkPermission: jest.fn(),
      check: jest.fn(),
      requestPermission: jest.fn(),
      request: jest.fn(),
      requestMultiple: jest.fn(),
    }),
    PixelRatio: ({
      get: jest.fn(),
      getFontScale: jest.fn(),
      getPixelSizeForLayoutSize: jest.fn(),
      roundToNearestPixel: jest.fn(),
      startDetecting: jest.fn(),
    }),
    Platform: ({
      select: jest.fn(),
      OS: "android"
    }),
    PushNotificationIOS: ({
      scheduleLocalNotification: jest.fn(),
      cancelAllLocalNotifications: jest.fn(),
      removeAllDeliveredNotifications: jest.fn(),
      getDeliveredNotifications: jest.fn(),
      removeDeliveredNotifications: jest.fn(),
      setApplicationIconBadgeNumber: jest.fn(),
      getApplicationIconBadgeNumber: jest.fn(),
      cancelLocalNotifications: jest.fn(),
      getScheduledLocalNotifications: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      requestPermissions: jest.fn(),
      abandonPermissions: jest.fn(),
      checkPermissions: jest.fn(),
      getInitialNotification: jest.fn(),
      constructor: jest.fn(),
      finish: jest.fn(),
      getMessage: jest.fn(),
      getSound: jest.fn(),
      getCategory: jest.fn(),
      getAlert: jest.fn(),
      getContentAvailable: jest.fn(),
      getBadgeCount: jest.fn(),
      getData: jest.fn(),
    }),
    Settings: ({
      get: jest.fn(),
      set: jest.fn(),
      watchKeys: jest.fn(),
      clearWatch: jest.fn(),
    }),
    Share: ({
      share: jest.fn(),
      sharedAction: jest.fn(),
      dismissedAction: jest.fn(),
    }),
    StatusBarIOS: undefined,
    StyleSheet: {
      setStyleAttributePreprocessor: jest.fn(),
      flatten: jest.fn(),
      create: jest.fn(styles => Object.keys(styles).reduce((acc, styleKey) => Object.assign(acc, { [styleKey]: styleKey }), {})),
    },
    Systrace: ({
      installReactHook: jest.fn(),
      setEnabled: jest.fn(),
      isEnabled: jest.fn(),
      beginEvent: jest.fn(),
      endEvent: jest.fn(),
      beginAsyncEvent: jest.fn(),
      endAsyncEvent: jest.fn(),
      counterEvent: jest.fn(),
      attachToRelayProfiler: jest.fn(),
      swizzleJSON: jest.fn(),
      measureMethods: jest.fn(),
      measure: jest.fn(),
    }),
    TimePickerAndroid: ({
      open: jest.fn(),
      timeSetAction: jest.fn(),
      dismissedAction: jest.fn(),
    }),
    TVEventHandler: undefined,
    UIManager: undefined,
    unstable_batchedUpdates: undefined,
    Vibration: ({
      vibrate: jest.fn(),
      cancel: jest.fn(),
    }),
    VibrationIOS: ({
      vibrate: jest.fn(() => {
        console.warn("VibrationIOS is deprecated, use Vibration instead");
      }),
    }),
    NativeModules: {
      UIManager: {
        measure: () => {},
        measureLayout: () => {}
      }
    }
  };
});
