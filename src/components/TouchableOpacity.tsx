import { TouchableOpacity } from "react-native";

import { withSpacing, withLayout, withShadow, withColors } from "../hocs";

export default withColors(
  withShadow(withSpacing(withLayout(TouchableOpacity)))
);
