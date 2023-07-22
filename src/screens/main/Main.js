import {BottomNavigation, Box, Grid, Stack, Typography} from "@mui/material";
import {primaryColor, secondaryColor, VerticalSpace} from "../../constans/constans";
import {ArrowBack, Search} from "@mui/icons-material";
import Header from "../components/Header";
import {RiSearch2Line} from "react-icons/ri";
import Matches from "./components/Matches";
import Dates from "./components/Dates";
import Nears from "./components/Nears";
import BottomNav from "../components/BottomNav";
import {useSelector} from "react-redux";
import Home from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import NearYou from "../pages/NearYou";
import Profile from "../pages/Profile";

const Main = () => {
    const mainState = useSelector((state) => state.mainReducer)
    return (<Stack sx={{
        minHeight: "100vh", minWidth: "100vw", backgroundColor: primaryColor
    }}>
        <Grid container>
            <Grid item xs={12}>
                {mainState.menuActive ===  0  &&  <Home />}
                {mainState.menuActive === 1 && <ComingSoon />}
                {mainState.menuActive === 2 && <NearYou  />}
                {mainState.menuActive === 3 && <Profile  />}
                {VerticalSpace("4rem")}
            </Grid>
            {mainState.menuActive  !== 2 && <BottomNav />}
        </Grid>
    </Stack>)
}
export default Main;