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
import { colors } from "../constants";
import { ButtonVariant } from "../types";

type ButtonProps = {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
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
  variant,
  style,
  textStyle,
  disabled,
  slim,
  loading,
  textBold,
}: ButtonProps) => {
  const buttonVariant = variant || ButtonVariant.Flat;

  let [containerStyle, defaultTextStyle] = {
    [ButtonVariant.Flat]: [styles.containerFlat, styles.textFlat],
    [ButtonVariant.Primary]: [styles.containerPrimary, styles.textPrimary],
    [ButtonVariant.Accent]: [styles.containerAccent, styles.textPrimary],
    [ButtonVariant.Secondary]: [
      styles.containerSecondary,
      styles.textSecondary,
    ],
    [ButtonVariant.Gray]: [styles.containerGray, styles.textPrimary],
    [ButtonVariant.Success]: [styles.containerSuccess, styles.textPrimary],
    [ButtonVariant.Danger]: [styles.containerDanger, styles.textPrimary],
  }[buttonVariant];

  if (disabled) {
    containerStyle = styles.containerDisabled;
    defaultTextStyle = styles.textDisabled;
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
        buttonVariant === ButtonVariant.Primary ? "#fff" : colors.brandBase;
      return <ActivityIndicator size={20} color={activityIndicatorColor} />;
    }

    return (
      <>
        {icon && <View mr1>{icon}</View>}
        <Text
          bold={textBold || buttonVariant === ButtonVariant.Primary}
          style={combinedTextStyle}
        >
          {title}
        </Text>
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

  containerFlat: {},

  containerDisabled: {
    backgroundColor: "#6d9ebd", // A lighter shade of the brandBase color
    borderRadius: 6,
  },

  textDisabled: {
    color: "#ffffff",
  },

  containerPrimary: {
    backgroundColor: colors.brandBase,
    borderRadius: 6,
  },

  containerAccent: {
    backgroundColor: colors.brandAccent,
    borderRadius: 6,
  },

  containerGray: {
    backgroundColor: "#808080",
    borderRadius: 6,
  },

  containerSuccess: {
    backgroundColor: "#008000",
    borderRadius: 6,
  },

  containerDanger: {
    backgroundColor: "#8B0000",
    borderRadius: 6,
  },

  containerSecondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.brandBase,
    borderRadius: 6,
  },

  text: {
    textAlign: "center",
  },

  textFlat: {
    color: colors.brandBase,
    fontSize: 18,
  },

  textPrimary: {
    color: "#fff",
  },

  textSecondary: {
    color: colors.brandBase,
  },
});

export default withSpacing(Button);
