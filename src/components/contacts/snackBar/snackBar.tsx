import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

type PropsType = {
    open?: boolean
    openError?: boolean
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars: React.FC<PropsType> = ({openError,open, handleClose}) => {
    return (
        <Stack spacing={2} sx={{width: '100%'}}>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Ваше сообщение отправлено.<br/>В ближайшее время я обязательно свяжусь с вами
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={4000} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    Network Error
                </Alert>
            </Snackbar>
        </Stack>
    );
}