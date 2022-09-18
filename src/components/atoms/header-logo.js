import Typography from "@mui/material/Typography";
import MainLogo from "../../assets/logos/main-logo";

const HeaderLogo = () => (
    <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
    >
        <MainLogo/>
    </Typography>
)

export default HeaderLogo