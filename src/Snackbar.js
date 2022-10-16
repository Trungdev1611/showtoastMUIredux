import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";


function SnackbarCustom({ open,
   message,handleClose, variant  }) {

  return <Snackbar 
  open={open} 
  onClose={handleClose} 
  autoHideDuration= {2000}
  anchorOrigin = {{vertical: "top", horizontal: "right"}}
  >

<Alert severity={variant} sx = {{width: "100%"}}>{message}</Alert>
  </Snackbar>;
}
export default SnackbarCustom;
