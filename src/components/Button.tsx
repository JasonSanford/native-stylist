import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

import Text from "./Text";
import View from "./View";
import { withSpacing } from "../hocs";
import { useColor } from "../hooks";
import { ButtonVariant } from "../types";

type ButtonProps = {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
  iconRight?: JSX.Element;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  disabled?: boolean;
  slim?: boolean;
  loading?: boolean;
  textBold?: boolean;
};

const Button = ({
  title,
  onPress,
  icon,
  iconRight,
  variant,
  style,
  textStyle,
  disabled,
  slim,
  loading,
  textBold,
}: ButtonProps) => {
  const buttonVariant = variant || ButtonVariant.Flat;
  const { brandColor, accentColor } = useColor();

  let [containerStyle, defaultTextStyle] = {
    [ButtonVariant.Flat]: [{}, { ...styles.textFlat, color: brandColor }],
    [ButtonVariant.Primary]: [
      { ...styles.containerRectangular, backgroundColor: brandColor },
      styles.textPrimary,
    ],
    [ButtonVariant.Accent]: [
      { ...styles.containerRectangular, backgroundColor: accentColor },
      styles.textPrimary,
    ],
    [ButtonVariant.Secondary]: [
      {
        ...styles.containerRectangular,
        ...styles.containerSecondary,
        borderColor: brandColor,
      },
      { ...styles.textSecondary, color: brandColor },
    ],
    [ButtonVariant.Gray]: [
      { ...styles.containerRectangular, ...styles.containerGray },
      styles.textPrimary,
    ],
    [ButtonVariant.Success]: [
      { ...styles.containerRectangular, ...styles.containerSuccess },
      styles.textPrimary,
    ],
    [ButtonVariant.Danger]: [
      { ...styles.containerRectangular, ...styles.containerDanger },
      styles.textPrimary,
    ],
  }[buttonVariant];

  if (disabled) {
    if (buttonVariant === ButtonVariant.Primary) {
      containerStyle = {
        ...styles.containerRectangular,
        ...styles.containerDisabled,
      };
      defaultTextStyle = styles.textDisabled;
    } else {
      defaultTextStyle = {
        ...defaultTextStyle,
        color: "#808080",
      };
    }
  }

  if (slim) {
    containerStyle = {
      ...containerStyle,
      paddingTop: 4,
      paddingBottom: 4,
      minWidth: 0,
    };
  }

  let combinedTextStyle: TextStyle = {
    ...styles.text,
    ...defaultTextStyle,
  };

  if (textStyle) {
    combinedTextStyle = {
      ...combinedTextStyle,
      ...textStyle,
    };
  }

  const renderContent = () => {
    if (loading) {
      const activityIndicatorColor =
        buttonVariant === ButtonVariant.Primary ? "#fff" : brandColor;
      return <ActivityIndicator size={20} color={activityIndicatorColor} />;
    }

    return (
      <>
        {icon && <View mr1>{icon}</View>}
        <Text bold={textBold} style={combinedTextStyle}>
          {title}
        </Text>
        {iconRight && <View ml1>{iconRight}</View>}
      </>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}
      style={[styles.container, containerStyle, style]}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    minWidth: 130,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  containerRectangular: {
    borderRadius: 6,
  },

  containerDisabled: {
    backgroundColor: "#D3D3D3",
  },

  textDisabled: {
    color: "#ffffff",
  },

  containerGray: {
    backgroundColor: "#808080",
  },

  containerSuccess: {
    backgroundColor: "#008000",
  },

  containerDanger: {
    backgroundColor: "#8B0000",
  },

  containerSecondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
  },

  text: {
    textAlign: "center",
  },

  textFlat: {
    fontSize: 18,
  },

  textPrimary: {
    color: "#fff",
  },

  textSecondary: {},
});

export default withSpacing(Button);
