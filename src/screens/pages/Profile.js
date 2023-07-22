import {Box, Stack, Typography} from "@mui/material";
import {CgDetailsMore} from "react-icons/cg";
import {ArrowBack, Check, Home} from "@mui/icons-material";
import {CHANGE_MENU_ACTIVE} from "../../services/redux/slices/mainSlice";
import Header from "../components/Header";
import {useDispatch} from "react-redux";
import {secondaryColor} from "../../constans/constans";
import ProfileMenu from "../components/ProfileMenu";
import ProfileItems from "../main/components/ProfileItems";

function Chec() {
    return null;
}

const Profile = () => {
    const dispatch = useDispatch();
    return (<Stack sx={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%",
    }}>
        <Header text={'Profile'} iconRight={<CgDetailsMore style={{
            fontSize: "1.8rem"
        }}/>} iconLeft={<Home onClick={() => {
            dispatch(CHANGE_MENU_ACTIVE(0))
        }} sx={{
            fontSize: "1.5rem"
        }}/>}/>

        <Stack sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mt: 2
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexBasis: "35%",
                height: "3px",
                backgroundColor: "black"
            }}>

            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "30vw",
                height: "30vw",
                backgroundColor: secondaryColor,
                borderWidth: "2px",
                borderColor: "black",
                borderStyle: "solid",
                borderRadius: "10px",
                boxShadow: " 1.5px 1.5px 0px 0px black"
            }}>
                <img src="/assets/images/1.jpg" alt="img" style={{
                    width: "100%", height: "100%", borderRadius: "10px",
                }}/>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexBasis: "35%",
                height: "3px",
                backgroundColor: "black"
            }}>

            </Box>
        </Stack>
        <Stack sx={{
            mt: 1.5,
            display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center"
        }}>
            <Stack sx={{
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
            }}>
                <Typography sx={{
                    fontSize: "1.3rem",
                    mx: 1
                }}>
                    Alireza Shirzad
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "1.1rem",

                    height: "1.1rem",
                    borderRadius: "5px",
                    borderWidth: "2px",
                    borderColor: "black",
                    borderStyle: "solid", mx: 1,
                    backgroundColor: "orange"

                }}> <Check sx={{
                    fontSize: "0.7rem"
                }}/></Box>
            </Stack>
            <Typography sx={{
                fontSize: "1rem",
                color: "gray",
                mx: 1
            }}>
                @alireza_sh
            </Typography>
            <Typography sx={{
                fontSize: "0.9rem", color: "gray",
                textAlign: "center",
                mx: 1
            }}>
                Travel writers who wrote mynown story <br/> Living my life in my style
            </Typography>
        </Stack>
        <Stack sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            py: 1.5
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                borderWidth: "2px",
                borderColor: "black",
                borderStyle: "solid",
                width: "25vw",
                height: '15vw',
                boxShadow: "3px 2px 0px 0px black",
            }}>
                <span style={{
                    fontSize: "1.1rem"
                }}>1,385</span>
                <span style={{
                    fontSize: "0.8rem",
                    color: "gray"
                }}>Likes You</span>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                borderWidth: "2px",
                borderColor: "black",
                borderStyle: "solid",
                width: "25vw",
                height: '15vw',
                boxShadow: "3px 2px 0px 0px black",
            }}>
                <span style={{
                    fontSize: "1.1rem"
                }}>1,385</span>
                <span style={{
                    fontSize: "0.8rem",
                    color: "gray"
                }}>Likes You</span>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                borderWidth: "2px",
                borderColor: "black",
                borderStyle: "solid",
                width: "25vw",
                height: '15vw',
                boxShadow: "3px 2px 0px 0px black",
            }}>
                <span style={{
                    fontSize: "1.1rem"
                }}>1,385</span>
                <span style={{
                    fontSize: "0.8rem",
                    color: "gray"
                }}>Likes You</span>
            </Box>
        </Stack>
        <ProfileMenu />
        <ProfileItems />


    </Stack>)
}
export default Profile;