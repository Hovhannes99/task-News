import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SecondaryButton from "./secondary-button/secondary-button";


const AllFilterButton = ({...props}) => (
    <SecondaryButton {...props}><FilterAltIcon fontSize={"large"} color={"primary"}/>Filter</SecondaryButton>
)


export default AllFilterButton