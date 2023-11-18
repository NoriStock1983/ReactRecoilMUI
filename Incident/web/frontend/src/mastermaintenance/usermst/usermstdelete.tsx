import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@mui/material"
import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useTranslation } from "react-i18next";

export{UsermstDelete}

function UsermstDelete(){
    const {t}=useTranslation();
    const [open,setopen] = useState(false);

    const handleClickOpen = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }

    return(
        <div>
            <Button variant="outlined" color="error" onClick={handleClickOpen}>
                <DeleteOutlineOutlinedIcon/>
            </Button>
            <Dialog open={open}>
            <DialogTitle>{t('usermst.delete.title')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t('usermst.delete.message')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t('common.delete')}</Button>
                <Button onClick={handleClose}>{t('common.cancel')}</Button>
            </DialogActions>
            </Dialog>
      </div>
    )
}