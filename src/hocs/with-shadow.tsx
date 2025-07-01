import { ComponentType, forwardRef, PropsWithChildren } from "react";
import { ViewStyle, Platform, StyleSheet } from "react-native";

type WithShadowProps = {
  shadow?: boolean;
  shadowUp?: boolean;
};

function withShadow<T>(Component: ComponentType<T>) {
  return forwardRef<
    any,
    PropsWithChildren<T & WithShadowProps & { style?: any }>
  >(({ style, children, ...props }, ref) => {
    const st: ViewStyle = { ...style };

    if (props.shadow) {
      if (Platform.OS === "ios") {
        st.shadowColor = "#171717";
        st.shadowOffset = { width: -2, height: 4 };
        st.shadowOpacity = 0.2;
        st.shadowRadius = 3;
      }

      if (Platform.OS === "android") {
        // Why don't these work?
        // st.zIndex = 1;
        st.elevation = 5;
        // st.backgroundColor = "#ffffff";

        // Just use a simple border for now
        // st.borderColor = "#757575";
        // st.borderWidth = StyleSheet.hairlineWidth;
      }
    }

    if (props.shadowUp) {
      if (Platform.OS === "ios") {
        st.shadowColor = "#000000";
        st.shadowOffset = { width: 0, height: 14 };
        st.shadowOpacity = 0.7;
        st.shadowRadius = 14;
      }
    }

    return (
      <Component ref={ref} style={st} {...(props as T)}>
        {children}
      </Component>
    );
  });
}

export default withShadow;
