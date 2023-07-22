import {Box, Stack, Typography} from "@mui/material";
import {secondaryColor} from "../../constans/constans";
import ProfileMenuItem from "./ProfileMenuItem";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_PROFILE_MENU_ACTIVE} from "../../services/redux/slices/mainSlice";

const ProfileMenu = () => {
    const dispatch = useDispatch();
    const mainState = useSelector((state) => state.mainReducer);
    return (<Stack sx={{
            display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "10px",
                borderWidth: "2px",
                borderColor: "black",
                borderStyle: "solid",
                width: "90vw",
                height: '12vw',
                boxShadow: "3px 3px 0px 0px black",
            }}>
                {items.map((item, index) => <ProfileMenuItem onClick={() => {
                    dispatch(CHANGE_PROFILE_MENU_ACTIVE(index))
                }}
                                                             text={item}
                                                             active={index === mainState.profileMenuActive}/>)}
            </Box>
        </Stack>)
}
const items = ["Likes you", "Matches", "Dates",]
export default ProfileMenu;