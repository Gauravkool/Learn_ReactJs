import React, { useState } from "react";
import { ThemeProvider } from "../Context/Theme";
function ThemeApp() {
    const [themeMode, setThemeMode] = useState("light")
  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* card */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default ThemeApp;
