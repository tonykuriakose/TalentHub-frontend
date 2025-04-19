import { PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
    primary: {
        main: '#1A6F73',         // Peacock Blue (main)
        light: '#4CAFB3',        // Lighter shade for hover, etc.
        dark: '#124A4D',         // Darker shade
        contrastText: '#FFFFFF', // White text on primary backgrounds
    },
    
    secondary: {
        main: '#82C0CC',         // Complementary light teal/blue
        contrastText: '#000000',
    },
    
    error: {
        main: '#FF6550',
        light: '#FF867A',
        dark: '#C4473A',
        contrastText: '#FFFFFF',
    },
    warning: {
        main: '#FFB836',
        light: '#FFD566',
        dark: '#C7851F',
        contrastText: '#000000',
    },
    info: {
        main: '#26A4FF',
        light: '#5EBFFF',
        dark: '#1A7ACC',
        contrastText: '#FFFFFF',
    },
    success: {
        main: '#56CDAD',
        light: '#85DFC8',
        dark: '#3A9D84',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#FFFFFF',
        // paper: '#F9FAFC',
    },
    text: {
        primary: '#25324B',
        secondary: '#515B6F',
        disabled: '#A8ADB7',
    },
    action: {
        active: '#515B6F',
        hover: '#E4E5E7',
        selected: '#CCCCF5',
        disabled: '#A8ADB7',
        disabledBackground: '#E4E5E7',
        focus: '#018DF0',
    },
    divider: '#A8ADB7',
}

export default palette;