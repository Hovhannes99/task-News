import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


const MenuButton = ({...props}) => (
    <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="primary"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}
        {...props}
    >
        <MenuIcon />
    </IconButton>
)

export default MenuButton