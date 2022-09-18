import {Button} from "@mui/material";
import clsx from "clsx";


const PrimaryButton = ({children,className, ...props}) => (
    <Button variant="contained"
            className={clsx("primary-button", className)}
            sx={{padding:"12px 0 12px 0"}}
            {...props}>{children}</Button>
)

export default PrimaryButton