import {Box, Stack, Typography} from "@mui/material";
import {LocationCity} from "@mui/icons-material";
import {ImLocation} from "react-icons/im";
import {primaryColor, secondaryColor, thirdaryColor} from "../../../constans/constans";


const setColor = (index) => {
    if (index > 5){
        return (index % 6) - 1;
    }else{
        return index;
    }
}
const Dates = () => {
    return (
        <Stack sx={{
            display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", width: "100%",
            overflowY:"auto",pb:0.5
        }}>
            {items.map((item,index) =>  <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "black",
                borderStyle: "solid",
                width:"25vw",
                height:'30vw',
                boxShadow: "1.5px 1.5px 0px 0px black",
                backgroundColor:colors[setColor(index)],
                flex:"0 0 auto",
                ml:2,
                mr:index === items.length -1 ? 2 : 0,

            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    borderWidth: "2px",
                    borderColor: "black",
                    borderStyle: "solid",
                    boxShadow: "2px 1.5px 0px 0px black",
                }}>
                    <img src={item.img} style={{
                        objectFit:"cover",
                        width: "100%", height: "100%", borderRadius: "50%"
                    }} alt="img"/>
                </Box>
                <Typography sx={{
                    fontSize:"0.8rem"
                }}>
                    {item.name}
                </Typography>
                <Stack sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <ImLocation style={{
                        margin:" 0 0.2rem"
                    }} />
                    <Typography sx={{
                        fontSize:"0.8rem",
                        color:"gray",
                        mx:0.2
                    }}>
                        {item.location}
                    </Typography>
                </Stack>
            </Box>)}

        </Stack>
    )
}

const colors = ["#f9ffab", secondaryColor, "#abe1f8", "#ffabf5", "#ffb290", "#acfaf1",];
const items =  [
    {
        name:"Alireza",
        img:"/assets/images/1.jpg",
        location:"Iran",
    },
    {
        name:"Mamrez",
        img:"/assets/images/2.jpg",
        location:"USA",
    },{
        name:"Hanieh",
        img:"/assets/images/3.jpg",
        location:"Africa",
    },
    {
        name:"Mamad",
        img:"/assets/images/4.jpg",
        location:"Austria",
    },
    {
        name:"Fatemeh",
        img:"/assets/images/5.jpg",
        location:"Germany",
    },
    {
        name:"Saeed",
        img:"/assets/images/1.jpg",
        location:"Switzerland",
    }
]
export default Dates;