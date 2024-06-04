import {
  Text as DefaultText,
  TextStyle as DefaultTextStyle,
  TextProps as DefaultTextProps,
} from "react-native";

import { colors, TextSize, defaultFontFamily } from "../constants";
import { withSpacing } from "../hocs";
import { useColor, useFont } from "../hooks";

type TextProps = DefaultTextProps & {
  bold?: boolean;
  xsmall?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
  light?: boolean;
  lightish?: boolean;
  shadow?: boolean;
  center?: boolean;
  error?: boolean;
  brand?: boolean;
};

const Text = (props: TextProps) => {
  const { fontFamily, fontFamilyBold } = useFont();
  const { brandColor } = useColor();

  let style: DefaultTextStyle = {
    fontFamily: fontFamily || defaultFontFamily,
    fontSize: TextSize.Small,
    color: "#333",
  };

  if (props.bold) {
    if (fontFamilyBold) {
      style.fontFamily = fontFamilyBold;
    } else {
      style.fontWeight = "bold";
    }
  }

  if (props.xsmall) {
    style.fontSize = TextSize.XSmall;
  }

  if (props.medium) {
    style.fontSize = TextSize.Medium;
  }

  if (props.large) {
    style.fontSize = TextSize.Large;
    style.lineHeight = TextSize.Large + 2;
  }

  if (props.xlarge) {
    style.fontSize = TextSize.XLarge;
    style.lineHeight = TextSize.XLarge + 2;
  }

  if (props.xxlarge) {
    style.fontSize = TextSize.XXLarge;
  }

  if (props.light) {
    style.color = "#fff";
  }

  if (props.lightish) {
    style.color = "#757575";
  }

  if (props.error) {
    style.color = "#B30000";
  }

  if (props.brand) {
    style.color = brandColor || colors.brandBase;
  }

  if (props.shadow) {
    style.textShadowColor = props.light || props.lightish ? "#333" : "#999";
    style.textShadowOffset = { width: 2, height: 2 };
    style.textShadowRadius = 2;
  }

  if (props.center) {
    style.textAlign = "center";
  }

  return <DefaultText {...props} style={[style, props.style]} />;
};

export default withSpacing(Text);
