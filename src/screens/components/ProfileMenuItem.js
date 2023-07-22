import {Box, Typography} from "@mui/material";
import {secondaryColor} from "../../constans/constans";

const ProfileMenuItem = ({text,active,onClick}) => {
    return (
        <Box onClick={onClick} sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "10px",
            borderWidth: active ? "2px" : "0px",
            borderColor: "black",
            borderStyle: "solid",
            width: "25%",
            height: '10vw',
            backgroundColor:active ? secondaryColor  : "none"
        }}>
            <Typography>
                {text}
            </Typography>
        </Box>

    )
}
export default ProfileMenuItem;