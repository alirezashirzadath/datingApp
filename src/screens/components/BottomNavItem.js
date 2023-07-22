import {Box} from "@mui/material";
import {secondaryColor} from "../../constans/constans";
import {GoHomeFill} from "react-icons/go";

const BottomNavItem = ({active, iconActive, iconDeActive,onClick}) => {
    return (<Box onClick={onClick} sx={{
            backgroundColor: active ? secondaryColor : "none", px: 2.5, py: 0.3, borderRadius: "15px"
        }}>
            {active ? iconActive : iconDeActive}
        </Box>)
}
export default BottomNavItem;