import {Box, Stack, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import {secondaryColor} from "../../constans/constans";

const Header = ({iconLeft,iconRight,text}) => {
    return (
        <Stack sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            py:2
        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                width:"2.5rem",
                height:"2.5rem",
                backgroundColor:"white",
                borderWidth:"2px",
                borderColor:"black",
                borderStyle:"solid",
                borderRadius:"10px",
                boxShadow:" 1.5px 1.5px 0px 0px black"
            }}>
                {iconLeft}
            </Box>
            <Typography variant={'h5'}>
                {text}
            </Typography>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                width:"2.5rem",
                height:"2.5rem",
                backgroundColor:secondaryColor,
                borderWidth:"2px",
                borderColor:"black",
                borderStyle:"solid",
                borderRadius:"10px",
                boxShadow:" 1.5px 1.5px 0px 0px black"
            }}>
                {iconRight}
            </Box>
        </Stack>
    )
}
export default Header;