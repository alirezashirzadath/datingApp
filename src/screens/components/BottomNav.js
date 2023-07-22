import {Box, Stack} from "@mui/material";
import {GoHome, GoHomeFill} from "react-icons/go";
import {secondaryColor} from "../../constans/constans";
import BottomNavItem from "./BottomNavItem";
import {HiHeart, HiOutlineHeart} from "react-icons/hi";
import {RiUser3Fill, RiUser3Line, RiUserLocationFill, RiUserLocationLine} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_MENU_ACTIVE} from "../../services/redux/slices/mainSlice";

const BottomNav = () => {
    const mainState = useSelector((state) => state.mainReducer);
    const dispatch = useDispatch();

    return (<Stack sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        position: "fixed",
        bottom: " 0.5rem"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            width: "85%",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            py: 1,
            px: 0.5,
            borderWidth: "2px",
            borderRadius: "22px",
            borderColor: "black",
            borderStyle: "solid"
        }}>
            {menuItems.map((item,index) => {
                return (<BottomNavItem onClick={() => {
                    dispatch(CHANGE_MENU_ACTIVE(index))
                }} active={index === mainState.menuActive} iconActive={item.activeIcon} iconDeActive={item.deActiveIcon}/>)
            })}
        </Box>

    </Stack>)
}
const menuItems = [{
    activeIcon: <GoHomeFill style={{
        fontSize: "1.8rem"
    }}/>, deActiveIcon: <GoHome style={{
        fontSize: "1.8rem",
    }}/>
}, {
    activeIcon: <HiHeart style={{
        fontSize: "1.8rem",
    }}/>, deActiveIcon: <HiOutlineHeart style={{
        fontSize: "1.8rem",
    }}/>
}, {
    activeIcon: <RiUserLocationFill style={{
        fontSize: "1.8rem",
    }}/>, deActiveIcon: <RiUserLocationLine style={{
        fontSize: "1.8rem",
    }}/>
}, {
    activeIcon: <RiUser3Fill style={{
        fontSize: "1.8rem",
    }}/>, deActiveIcon: <RiUser3Line style={{
        fontSize: "1.8rem",
    }}/>
},]
export default BottomNav;