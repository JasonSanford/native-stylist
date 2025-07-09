import { createContext } from "react";

import { StylistThemeType } from "../types";

const StylistTheme = createContext<StylistThemeType>({});

export default StylistTheme;
