import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const HeaderAvatar = () => (
    <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
        </Tooltip>
    </Box>
)

export default HeaderAvatar