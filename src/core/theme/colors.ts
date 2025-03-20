import { PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
    primary: {
        main: '#4640DE',  
        light: '#7271E3',  
        dark: '#2F2CA1', 
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#CCCCF5',
        light: '#E0DFFF',
        dark: '#8A89D0',
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