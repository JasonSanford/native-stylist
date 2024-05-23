import { useContext } from "react";

import { colors } from "../constants";
import { StylistTheme } from "../contexts";

const useColor = () => {
  const { brandColor, accentColor } = useContext(StylistTheme);

  return {
    brandColor: brandColor || colors.brandBase,
    accentColor: accentColor || colors.brandAccent,
  };
};

export default useColor;
