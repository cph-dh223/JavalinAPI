import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    // yellow
    --color-yellow-400: #facc15;
    --color-yellow-300: #fde68a;
    --color-yellow-200: #fefcbf;
    --color-yellow-100: #fffbec;
    --color-yellow-50: #fffbeb;

    // blue
    --color-blue-800: #0d2b45;
    --color-blue-600: #2563eb;
    --color-blue-500: #3b82f6;
    --color-blue-400: #60a5fa;
    --color-blue-300: #93c5fd;
    --color-blue-200: #bfdbfe;
    --color-blue-100: #eff6ff;

    // grey
    --color-gray-900: #111827;
    --color-gray-800: #111827;
    --color-gray-700: #1f2937;
    


}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body{
    font-family: "Sedan SC", serif;
    font-weight: 400;
    font-style: normal;

}



`;



export default GlobalStyles;
