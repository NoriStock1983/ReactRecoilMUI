import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useTranslation } from "react-i18next";

export{CodemstDelete}

function CodemstDelete(){
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
            <DialogTitle>{t('codemst.delete.title')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t('codemst.delete.message')}
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