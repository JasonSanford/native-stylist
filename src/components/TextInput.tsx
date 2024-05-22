import { useContext } from "react";
import { TextInput, TextInputProps, TextStyle } from "react-native";

import { StylistTheme } from "../contexts";
import { colors, defaultFontFamily } from "../constants";
import { useBoolean } from "../hooks";
import { withSpacing } from "../hocs";

const StyledTextInput = (props: TextInputProps) => {
  const {
    value: isFocused,
    setTrue: onFocus,
    setFalse: onBlur,
  } = useBoolean(false);
  const { fontFamily } = useContext(StylistTheme);

  const style: TextStyle = {
    fontFamily: fontFamily || defaultFontFamily,
    fontSize: 20,
    padding: 12,
    color: colors.brandBase,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.brandBase,
  };

  if (isFocused) {
    // style.borderColor = colors.brandBase;'
    style.borderWidth = 1.8;
  }

  return (
    <TextInput
      {...props}
      onFocus={onFocus}
      onBlur={onBlur}
      style={[style, props.style]}
    />
  );
};

export default withSpacing(StyledTextInput);
