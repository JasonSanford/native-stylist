import { ComponentType, FC, PropsWithChildren } from "react";
import { ViewStyle, TextStyle } from "react-native";

const DEFAULT_SPACING = 8;

enum Direction {
  Left = "Left",
  Right = "Right",
  Top = "Top",
  Bottom = "Bottom",
  None = "",
}

type WithMarginProps = {
  mHalf?: boolean;
  /** One unit of margin */
  m1?: boolean;
  /** Two units of margin */
  m2?: boolean;
  m3?: boolean;
  m4?: boolean;
  m6?: boolean;
  m8?: boolean;
  mbHalf?: boolean;
  mb1?: boolean;
  mb2?: boolean;
  mb3?: boolean;
  mb4?: boolean;
  mb6?: boolean;
  mb8?: boolean;
  mtHalf?: boolean;
  mt1?: boolean;
  mt2?: boolean;
  mt3?: boolean;
  mt4?: boolean;
  mt6?: boolean;
  mt8?: boolean;
  mlHalf?: boolean;
  ml1?: boolean;
  ml2?: boolean;
  ml3?: boolean;
  ml4?: boolean;
  ml6?: boolean;
  ml8?: boolean;
  mrHalf?: boolean;
  mr1?: boolean;
  mr2?: boolean;
  mr3?: boolean;
  mr4?: boolean;
  mr6?: boolean;
  mr8?: boolean;
};

type WithPaddingProps = {
  pHalf?: boolean;
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  p4?: boolean;
  p6?: boolean;
  p8?: boolean;
  pbHalf?: boolean;
  pb1?: boolean;
  pb2?: boolean;
  pb3?: boolean;
  pb4?: boolean;
  pb6?: boolean;
  pb8?: boolean;
  ptHalf?: boolean;
  pt1?: boolean;
  pt2?: boolean;
  pt3?: boolean;
  pt4?: boolean;
  pt6?: boolean;
  pt8?: boolean;
  plHalf?: boolean;
  pl1?: boolean;
  pl2?: boolean;
  pl3?: boolean;
  pl4?: boolean;
  pl6?: boolean;
  pl8?: boolean;
  prHalf?: boolean;
  pr1?: boolean;
  pr2?: boolean;
  pr3?: boolean;
  pr4?: boolean;
  pr6?: boolean;
  pr8?: boolean;
};

type WithGrowShrinkProps = {
  grow1?: boolean;
  shrink1?: boolean;
};

type WithGapProps = {
  gap1?: boolean;
  gap2?: boolean;
  gap3?: boolean;
  gap4?: boolean;
  gap6?: boolean;
  gap8?: boolean;
};

const spacingMapping = {
  // Margin
  mHalf: DEFAULT_SPACING / 2,
  m1: DEFAULT_SPACING,
  m2: DEFAULT_SPACING * 2,
  m3: DEFAULT_SPACING * 3,
  m4: DEFAULT_SPACING * 4,
  m6: DEFAULT_SPACING * 6,
  m8: DEFAULT_SPACING * 8,
  mbHalf: DEFAULT_SPACING / 2,
  mb1: DEFAULT_SPACING,
  mb2: DEFAULT_SPACING * 2,
  mb3: DEFAULT_SPACING * 3,
  mb4: DEFAULT_SPACING * 4,
  mb6: DEFAULT_SPACING * 6,
  mb8: DEFAULT_SPACING * 8,
  mtHalf: DEFAULT_SPACING / 2,
  mt1: DEFAULT_SPACING,
  mt2: DEFAULT_SPACING * 2,
  mt3: DEFAULT_SPACING * 3,
  mt4: DEFAULT_SPACING * 4,
  mt6: DEFAULT_SPACING * 6,
  mt8: DEFAULT_SPACING * 8,
  mlHalf: DEFAULT_SPACING / 2,
  ml1: DEFAULT_SPACING,
  ml2: DEFAULT_SPACING * 2,
  ml3: DEFAULT_SPACING * 3,
  ml4: DEFAULT_SPACING * 4,
  ml6: DEFAULT_SPACING * 6,
  ml8: DEFAULT_SPACING * 8,
  mrHalf: DEFAULT_SPACING / 2,
  mr1: DEFAULT_SPACING,
  mr2: DEFAULT_SPACING * 2,
  mr3: DEFAULT_SPACING * 3,
  mr4: DEFAULT_SPACING * 4,
  mr6: DEFAULT_SPACING * 6,
  mr8: DEFAULT_SPACING * 8,

  // Padding
  pHalf: DEFAULT_SPACING / 2,
  p1: DEFAULT_SPACING,
  p2: DEFAULT_SPACING * 2,
  p3: DEFAULT_SPACING * 3,
  p4: DEFAULT_SPACING * 4,
  p6: DEFAULT_SPACING * 6,
  p8: DEFAULT_SPACING * 8,
  pbHalf: DEFAULT_SPACING / 2,
  pb1: DEFAULT_SPACING,
  pb2: DEFAULT_SPACING * 2,
  pb3: DEFAULT_SPACING * 3,
  pb4: DEFAULT_SPACING * 4,
  pb6: DEFAULT_SPACING * 6,
  pb8: DEFAULT_SPACING * 8,
  plHalf: DEFAULT_SPACING / 2,
  pl1: DEFAULT_SPACING,
  pl2: DEFAULT_SPACING * 2,
  pl3: DEFAULT_SPACING * 3,
  pl4: DEFAULT_SPACING * 4,
  pl6: DEFAULT_SPACING * 6,
  pl8: DEFAULT_SPACING * 8,
  prHalf: DEFAULT_SPACING / 2,
  pr1: DEFAULT_SPACING,
  pr2: DEFAULT_SPACING * 2,
  pr3: DEFAULT_SPACING * 3,
  pr4: DEFAULT_SPACING * 4,
  pr6: DEFAULT_SPACING * 6,
  pr8: DEFAULT_SPACING * 8,
  ptHalf: DEFAULT_SPACING / 2,
  pt1: DEFAULT_SPACING,
  pt2: DEFAULT_SPACING * 2,
  pt3: DEFAULT_SPACING * 3,
  pt4: DEFAULT_SPACING * 4,
  pt6: DEFAULT_SPACING * 6,
  pt8: DEFAULT_SPACING * 8,

  // Gap
  gap1: DEFAULT_SPACING,
  gap2: DEFAULT_SPACING * 2,
  gap3: DEFAULT_SPACING * 3,
  gap4: DEFAULT_SPACING * 4,
  gap6: DEFAULT_SPACING * 6,
  gap8: DEFAULT_SPACING * 8,
};

type WithStyle = {
  style?: ViewStyle | TextStyle;
};

type SpacingKey = keyof typeof spacingMapping;

function withSpacing<T>(
  Component: ComponentType<T>
): FC<
  PropsWithChildren<
    T &
      WithMarginProps &
      WithPaddingProps &
      WithGrowShrinkProps &
      WithGapProps &
      WithStyle
  >
> {
  return ({ style, ...props }) => {
    const st: ViewStyle | TextStyle = { ...style };

    Object.entries(props).forEach(([key, value]) => {
      if (value && spacingMapping.hasOwnProperty(key)) {
        if (key.startsWith("gap")) {
          st.gap = spacingMapping[key as SpacingKey];
          return;
        }
        const property = key.startsWith("m") ? "margin" : "padding";

        let suffix: Direction = Direction.None;

        if (key.length > 2) {
          // Not m1, p1, m2, p2, etc.
          suffix =
            {
              l: Direction.Left,
              r: Direction.Right,
              t: Direction.Top,
              b: Direction.Bottom,
            }[key[1]] || Direction.None;
        }

        const styleKey = key as SpacingKey;
        st[`${property}${suffix}`] = spacingMapping[styleKey];
      }
    });

    if (props.grow1) {
      st.flexGrow = 1;
    }

    if (props.shrink1) {
      st.flexShrink = 1;
    }
    // The typing isn't quite right for this, but it works.
    // @ts-ignore
    return <Component style={st} {...props} />;
  };
}

export default withSpacing;
