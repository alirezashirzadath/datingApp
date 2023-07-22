import Header from "../components/Header";
import {ArrowBack} from "@mui/icons-material";
import {RiSearch2Line} from "react-icons/ri";
import {Stack, Typography} from "@mui/material";
import Matches from "../main/components/Matches";
import Dates from "../main/components/Dates";
import Nears from "../main/components/Nears";
import {CgDetailsMore} from "react-icons/cg";

const Home = () => {
 return (
     <Stack sx={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         width: "100%",
     }}>
         <Header iconLeft={<CgDetailsMore style={{
             fontSize:"1.8rem"
         }}/>} iconRight={<RiSearch2Line style={{
             fontSize: "1.5rem"
         }}/>} text={'Discover'}/>

         <Stack sx={{
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
             width: "100%",
             mb:2,
         }}>
             <Stack sx={{
                 width: "90%",
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center",
                 pb: 1,
             }}>
                 <Typography sx={{
                     fontSize: "1.2rem"
                 }}>New Matches</Typography>
                 <Typography sx={{
                     fontSize: "0.8rem", color: "orange"
                 }}>View more</Typography>
             </Stack>
             <Matches/>
         </Stack>
         <Stack sx={{
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
             width: "100%",pb:1.5
         }}>
             <Stack sx={{
                 width: "90%",
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center",
                 pb: 1.5,
             }}>
                 <Typography sx={{
                     fontSize: "1.2rem"
                 }}>Your Dates</Typography>
                 <Typography sx={{
                     fontSize: "0.8rem", color: "orange"
                 }}>View more</Typography>
             </Stack>
             <Dates />
         </Stack>
         <Stack sx={{
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
             width: "100%",
             pb:1.5
         }}>
             <Stack sx={{
                 width: "90%",
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center",
                 pb: 1.5,
             }}>
                 <Typography sx={{
                     fontSize: "1.2rem"
                 }}>Your Dates</Typography>
                 <Typography sx={{
                     fontSize: "0.8rem", color: "orange"
                 }}>View more</Typography>
             </Stack>
             <Nears />
         </Stack>
     </Stack>
 )
}
export default Home;