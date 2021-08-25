import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default Platform.select({
  android: TouchableNativeFeedback,
  ios: TouchableHighlight,
  default: TouchableHighlight,
});
