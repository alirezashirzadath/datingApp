import {Box, Stack, Typography} from "@mui/material";

const Matches = () => {
    return (
        <Stack sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            overflowY:"auto",
            py:1

        }}>
            {matchProfiles.map((item,index)=><Stack sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ml: 2,
                mr:index === matchProfiles.length - 1 ? 2 : 0,

                flex: "0 0 auto",
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
                    boxShadow: "3px 1.5px 0px 0px black",
                }}>
                    <img src={item.img} style={{
                        objectFit:"cover",
                        width: "100%", height: "100%", borderRadius: "50%"
                    }} alt="img"/>
                </Box>
                <Typography sx={{
                    fontWeight: "100", fontSize: "0.9rem"
                }}>
                    {item.name}
                </Typography>
            </Stack>)}

        </Stack>
    )
}

const matchProfiles = [
    {
        name:"Alireza",
        img:"/assets/images/1.jpg",
    },
    {
        name:" Mohamadreza",
        img:"/assets/images/4.jpg",
    },
    {
        name:"Tara",
        img:"/assets/images/3.jpg",
    },
    {
        name:"Asal",
        img:"/assets/images/6.jpg",
    },
    {
        name:"Mahi",
        img:"/assets/images/5.jpg",
    }

]
export default Matches;