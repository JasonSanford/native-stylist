import { ComponentType, forwardRef, PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

import { colors } from "../constants";

type WithColorsProps = {
  bgWhite?: boolean;
  bgBrandBase?: boolean;
  bgGray?: boolean;
};

function withColors<T>(Component: ComponentType<T>) {
  return forwardRef<
    any,
    PropsWithChildren<T & WithColorsProps & { style?: any }>
  >(({ style, children, ...props }, ref) => {
    const st: ViewStyle = { ...style };

    if (props.bgWhite) {
      st.backgroundColor = colors.bgWhite;
    }

    if (props.bgGray) {
      st.backgroundColor = colors.bgGray;
    }

    return (
      <Component ref={ref} style={st} {...(props as T)}>
        {children}
      </Component>
    );
  });
}

export default withColors;
