import { ComponentType, FC, PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

import { colors } from "../constants";

type WithColorsProps = {
  bgWhite?: boolean;
  bgBrandBase?: boolean;
  bgGray?: boolean;
};

type WithStyle = {
  style?: ViewStyle;
};

function withColors<T>(
  Component: ComponentType<T>
): FC<PropsWithChildren<T & WithColorsProps & WithStyle>> {
  return ({ style, ...props }) => {
    const st: ViewStyle = { ...style };

    if (props.bgWhite) {
      st.backgroundColor = colors.bgWhite;
    }

    if (props.bgBrandBase) {
      st.backgroundColor = colors.brandBase;
    }

    if (props.bgGray) {
      st.backgroundColor = colors.bgGray;
    }

    // The typing isn't quite right for this, but it works.
    // @ts-ignore
    return <Component style={st} {...props} />;
  };
}

export default withColors;
