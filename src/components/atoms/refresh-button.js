import SecondaryButton from "./secondary-button/secondary-button";
import RefreshIcon from '@mui/icons-material/Refresh';


const RefreshButton = ({...props}) =>(
    <SecondaryButton {...props}><RefreshIcon fontSize={"large"} color={"primary"}/>Refresh</SecondaryButton>
)


export default RefreshButton