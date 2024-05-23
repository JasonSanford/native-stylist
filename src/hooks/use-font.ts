import { useContext } from "react";

import { StylistTheme } from "../contexts";

const useFont = () => {
  const { fontFamily, fontFamilyBold } = useContext(StylistTheme);

  return { fontFamily: fontFamily || "System", fontFamilyBold };
};

export default useFont;
