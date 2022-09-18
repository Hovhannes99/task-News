import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import MenuButton from "../atoms/menu-button";
import HeaderLogo from "../atoms/header-logo";
import HeaderAvatar from "./avatars/header-avatar";

const HeaderContainer = () => (
    <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between", width: "100%",}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <MenuButton/>
                <HeaderLogo/>
            </Box>
            <HeaderAvatar/>
        </Toolbar>
    </Container>
)
export default HeaderContainer