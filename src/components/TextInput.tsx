import { TextInput, TextInputProps, TextStyle } from "react-native";

import { useBoolean, useColor, useFont } from "../hooks";
import { withSpacing } from "../hocs";

const StyledTextInput = (props: TextInputProps) => {
  const {
    value: isFocused,
    setTrue: onFocus,
    setFalse: onBlur,
  } = useBoolean(false);
  const { fontFamily } = useFont();
  const { brandColor } = useColor();

  const style: TextStyle = {
    fontFamily,
    fontSize: 20,
    padding: 12,
    color: "#333",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: brandColor,
  };

  if (isFocused) {
    style.borderColor = brandColor;
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
