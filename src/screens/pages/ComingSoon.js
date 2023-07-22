import {Stack, Typography} from "@mui/material";

const ComingSoon = () => {
    return (<Stack sx={{
            display: "flex",
            minHeight: "100vh",
            minWidth: "100vw",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography variant={"h4"}>
                Coming soon!
            </Typography>
        </Stack>)
}
export default ComingSoon;