import {Button} from "@mui/material";
import clsx from "clsx";


const SecondaryButton = ({children, className, ...props}) => (
    <Button variant="outlined" sx={{
        color: "black",
        border: "1px solid #e0e0e0",
        "&:hover": {
            backgroundColor: '#eeee',
            border: "1px solid #eeee"
        }}}
       className={clsx("secondary-button", className)} {...props}>{children}</Button>
)

export default SecondaryButton