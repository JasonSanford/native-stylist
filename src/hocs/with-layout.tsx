import { ComponentType, FC, PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

type WithPositionProps = {
  absolute?: boolean;
  relative?: boolean;
};

type WithLayoutProps = {
  flex1?: boolean;
  flexRow?: boolean;
  flexColumn?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyEnd?: boolean;
  selfCenter?: boolean;
  pinToTop?: boolean;
  pinToBottom?: boolean;
  pinToLeft?: boolean;
  pinToRight?: boolean;
  fullWidth?: boolean;
  halfWidth?: boolean;
  z1?: boolean;
  z2?: boolean;
  z3?: boolean;
  z4?: boolean;
  br1?: boolean;
  br2?: boolean;
  br3?: boolean;
  br4?: boolean;
  overflowHidden?: boolean;
};

type WithStyle = {
  style?: ViewStyle;
};

function withLayout<T>(
  Component: ComponentType<T>
): FC<PropsWithChildren<T & WithPositionProps & WithLayoutProps & WithStyle>> {
  return ({ style, ...props }) => {
    const st: ViewStyle = { ...style };

    if (props.absolute) {
      st.position = "absolute";
    }

    if (props.relative) {
      st.position = "relative";
    }

    if (props.flex1) {
      st.flex = 1;
    }

    if (props.flexRow) {
      st.flexDirection = "row";
    }

    if (props.flexColumn) {
      st.flexDirection = "column";
    }

    if (props.alignStart) {
      st.alignItems = "flex-start";
    }

    if (props.alignCenter) {
      st.alignItems = "center";
    }

    if (props.alignEnd) {
      st.alignItems = "flex-end";
    }

    if (props.justifyStart) {
      st.justifyContent = "flex-start";
    }

    if (props.justifyCenter) {
      st.justifyContent = "center";
    }

    if (props.justifyEnd) {
      st.justifyContent = "flex-end";
    }

    if (props.justifyBetween) {
      st.justifyContent = "space-between";
    }

    if (props.justifyAround) {
      st.justifyContent = "space-around";
    }

    if (props.selfCenter) {
      st.alignSelf = "center";
    }

    if (props.pinToTop) {
      st.top = 0;
    }

    if (props.pinToBottom) {
      st.bottom = 0;
    }

    if (props.pinToLeft) {
      st.left = 0;
    }

    if (props.pinToRight) {
      st.right = 0;
    }

    if (props.fullWidth) {
      st.width = "100%";
    }

    if (props.halfWidth) {
      st.width = "50%";
    }

    if (props.z1) {
      st.zIndex = 1;
    }

    if (props.z2) {
      st.zIndex = 2;
    }

    if (props.z3) {
      st.zIndex = 3;
    }

    if (props.z4) {
      st.zIndex = 4;
    }

    if (props.br1) {
      st.borderRadius = 4;
    }

    if (props.br2) {
      st.borderRadius = 8;
    }

    if (props.br3) {
      st.borderRadius = 16;
    }

    if (props.br4) {
      st.borderRadius = 32;
    }

    if (props.overflowHidden) {
      st.overflow = "hidden";
    }
    // The typing isn't quite right for this, but it works.
    // @ts-ignore
    return <Component style={st} {...props} />;
  };
}

export default withLayout;
