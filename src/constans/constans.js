import {Box, createTheme} from "@mui/material";

export const primaryColor = "#fdfdfd";
export const secondaryColor = "#d9fdbe";
export const thirdaryColor = "#000000";
export const VerticalSpace = (height) => {
    return (<Box sx={{
        height
    }}>
    </Box>)
}
export const HorizontalSpace = (width) => {
    return (<Box sx={{
        width
    }}>

    </Box>)
}
export const theme = createTheme({
    typography: {
        fontFamily: "Monomaniac One",
    }, palette: {
        primary: {
            main: primaryColor,
        }, secondary: {
            main: secondaryColor
        }
    }
})
