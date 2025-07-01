import { colors } from "../constants";
import { useStylistTheme } from "../contexts";

const useColor = () => {
  const { brandColor, accentColor } = useStylistTheme();

  return {
    brandColor: brandColor || colors.brandBase,
    accentColor: accentColor || colors.brandAccent,
  };
};

export default useColor;
