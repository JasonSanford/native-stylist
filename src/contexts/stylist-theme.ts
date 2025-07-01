import { createContext, useContext } from "react";

import { StylistThemeType } from "../types";

const defaultTheme: StylistThemeType = {
  brandColor: undefined,
  accentColor: undefined,
  fontFamily: undefined,
  fontFamilyBold: undefined,
};

const StylistTheme = createContext<StylistThemeType>(defaultTheme);

export const useStylistTheme = () => {
  const context = useContext(StylistTheme);
  if (context === undefined) {
    throw new Error(
      "useStylistTheme must be used within a StylistThemeProvider"
    );
  }
  return context;
};

export default StylistTheme;
