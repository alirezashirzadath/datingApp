import {Box, Stack, Typography} from "@mui/material";
import {ImLocation} from "react-icons/im";
import {secondaryColor} from "../../../constans/constans";
import {AiFillHeart} from "react-icons/ai";

const ProfileItems = () => {
    return (<Stack sx={{
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py:1.5,
        flexWrap:"wrap"
    }}>
        {items.map((item,index) =>  <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "10px",
            borderWidth: "2px",
            borderColor: "black",
            borderStyle: "solid",
            width: "41vw",
            height: '55vw',
            boxShadow: "3px 2px 0px 0px black",
            mx:0.6,
            my:0.6


        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: "65%",
                borderRadius: "10px",
                borderWidth: "2px",
                borderColor: "black",
                borderStyle: "solid",

            }}>
                <img src={item.img} style={{
                    objectFit:"cover",
                    width: "100%", height: "100%", borderRadius: "10px"
                }} alt="img"/>
            </Box>
            <Stack sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width:"90%"
            }}>
                <Stack sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                }}>
                    <Typography>
                        {item.name} , {item.age}
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

                </Stack>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"2rem",
                    height:"2rem",
                    backgroundColor:"#fbc6f2",
                    borderWidth:"2px",
                    borderColor:"black",
                    borderStyle:"solid",
                    borderRadius:"10px",
                    boxShadow:" 1.5px 1.5px 0px 0px black"
                }}>
                    <AiFillHeart style={{
                        color:"#b33e9a"
                    }} />
                </Box>
            </Stack>
        </Box>)}

    </Stack>)
}

const items = [
    {
        name:"Alireza",
        age:"30",
        location:"Kerman , Iran",
        img:"/assets/images/1.jpg"
    },
    {
        name:"Mamrez",
        age:"40",
        location:"Mashhad , Iran",
        img:"/assets/images/4.jpg"
    },
    {
        name:"Sara",
        age:"18",
        location:"Mazandaran , Iran",
        img:"/assets/images/3.jpg"
    },{
        name:"Ahmad",
        age:"20",
        location:"Khuzestan , Iran",
        img:"/assets/images/4.jpg"
    }
    ,
    {
        name:"Fateme",
        age:"25",
        location:"Ardebil , Iran",
        img:"/assets/images/5.jpg"
    },
    {
        name:"Atefe",
        age:"25",
        location:"Ardebil , Iran",
        img:"/assets/images/3.jpg"
    }
]
export default ProfileItems;