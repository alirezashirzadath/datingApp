import {Box, Stack, Typography} from "@mui/material";
import Header from "../components/Header";
import {CgDetailsMore} from "react-icons/cg";
import {ArrowBack, ArrowDownward, Chat, Close, GifTwoTone, Power, Star,} from "@mui/icons-material";
import {secondaryColor} from "../../constans/constans";
import {GoLocation} from "react-icons/go";
import {AiFillGift, AiFillHeart} from "react-icons/ai";
import {GiEnergise} from "react-icons/gi";
import {SlEnergy} from "react-icons/sl";
import {ImPower} from "react-icons/im";
import {useDispatch} from "react-redux";
import {CHANGE_MENU_ACTIVE} from "../../services/redux/slices/mainSlice";

const NearYou = () => {
    const dispatch = useDispatch();
    return (
        <Stack sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}>
            <Header text={'Near You'} iconRight={<CgDetailsMore style={{
                fontSize:"1.8rem"
            }}/>} iconLeft={<ArrowBack onClick={() => {
                dispatch(CHANGE_MENU_ACTIVE(0))
            }} sx={{
                fontSize:"1.5rem"
            }}  />} />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "16px",
                borderWidth: "1px",
                borderColor: "black",
                borderStyle: "solid",
                width:"95vw",
                height:'73vh',
                boxShadow: "5px 7px 0px 0px black",
                backgroundColor:secondaryColor,
                my:1.5,
                position:"rlative"
            }}>
                <Stack sx={{
                    position:"absolute",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    width:"50%",
                    bottom:"32vh"
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"4.2rem",
                        height:"4.2rem",
                        backgroundColor:"white",
                        borderWidth:"2px",
                        borderColor:"black",
                        borderStyle:"solid",
                        borderRadius:"10px",
                        boxShadow:" 1.5px 1.5px 0px 0px black"
                    }}>
                        <Close sx={{
                            fontSize:"2.5rem"
                        }} />
                    </Box>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"4.2rem",
                        height:"4.2rem",
                        backgroundColor:"#fbc6f2",
                        borderWidth:"2px",
                        borderColor:"black",
                        borderStyle:"solid",
                        borderRadius:"10px",
                        boxShadow:" 1.5px 1.5px 0px 0px black"
                    }}>
                        <AiFillHeart style={{
                            color:"#b33e9a",
                            fontSize:"2rem"
                        }} />
                    </Box>

                </Stack>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "95%",
                    height: "70%",
                    borderRadius: "10px",
                    borderWidth: "2px",
                    borderColor: "black",
                    borderStyle: "solid",

                }}>
                    <img src="/assets/images/1.jpg" style={{
                        objectFit:"cover",
                        width: "100%", height: "100%", borderRadius: "10px"
                    }} alt="img"/>
                </Box>
                <Stack sx={{
                    height:"20%",
                    width:"95%",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>
                    <Stack sx={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"start"
                    }}>
                        <Typography variant={"h4"}>
                            Alireza Shirzad
                        </Typography>
                        <Stack sx={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                            <GoLocation style={{
                                marginRight:"0.5rem"
                            }} />
                            <Typography variant={"h6"}>
                               Rasht,Iran
                            </Typography>

                        </Stack>
                    </Stack>
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
                        backgroundColor:"white"
                    }}>
                        <ArrowDownward />
                    </Box>
                </Stack>
            </Box>
            <Stack sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width:"90%",mt:0.5
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"3.8rem",
                    height:"3.8rem",
                    backgroundColor:"#fbe1c6",
                    borderWidth:"2px",
                    borderColor:"black",
                    borderStyle:"solid",
                    borderRadius:"10px",
                    boxShadow:" 1.5px 1.5px 0px 0px black"
                }}>
                    <ImPower style={{
                        color:"#d12626",
                        fontSize:"1.4rem"
                    }} />
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"3.8rem",
                    height:"3.8rem",
                    backgroundColor:"#ffffff",
                    borderWidth:"2px",
                    borderColor:"black",
                    borderStyle:"solid",
                    borderRadius:"10px",
                    boxShadow:" 1.5px 1.5px 0px 0px black"
                }}>
                    <Star style={{
                        color:"#d17326",
                        fontSize:"1.4rem"
                    }} />
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"3.8rem",
                    height:"3.8rem",
                    backgroundColor:"#c8fbff",
                    borderWidth:"2px",
                    borderColor:"black",
                    borderStyle:"solid",
                    borderRadius:"10px",
                    boxShadow:" 1.5px 1.5px 0px 0px black"
                }}>
                    <Chat style={{
                        color:"#26a9d1",
                        fontSize:"1.4rem"
                    }} />
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"3.8rem",
                    height:"3.8rem",
                    backgroundColor:"#ffffff",
                    borderWidth:"2px",
                    borderColor:"black",
                    borderStyle:"solid",
                    borderRadius:"10px",
                    boxShadow:" 1.5px 1.5px 0px 0px black"
                }}>
                    <AiFillGift style={{
                        color:"#37d126",
                        fontSize:"1.4rem"
                    }} />
                </Box>
            </Stack>


        </Stack>
    )
}
export default NearYou;