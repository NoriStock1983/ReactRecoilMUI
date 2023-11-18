import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useTranslation } from "react-i18next";

export{CodemstDetail}

function CodemstDetail(props:{ data: { id: number; code1: string; code2: string; codename1: string; codename2: string;codename3: string; activeflg: boolean; }; }){
    const {t}=useTranslation();
    const [open,setopen] = useState(false);
    const [checked, setChecked] = useState(props.data.activeflg);
    const handleClickOpen = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }

    const handleonChange = () => {
        setChecked(!checked);
    }
    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                <EditOutlinedIcon/>
            </Button>
            <Dialog open={open}>
                <DialogTitle>Codemst Update</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <TextField label="code1" variant="standard" value={props.data.code1}/>
                        <TextField label="code2" variant="standard" value={props.data.code2}/>
                    </FormGroup>
                    <FormGroup>
                        <TextField label="codeName1" variant="standard"  value={props.data.codename1}/>
                        <TextField label="codeName2" variant="standard"  value={props.data.codename2}/>
                        <TextField label="codeName3" variant="standard"  value={props.data.codename3}/>
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked = {checked} onChange={handleonChange}/>} label="isActive" />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('common.edit')}</Button>
                    <Button onClick={handleClose}>{t('common.cancel')}</Button>
                </DialogActions>
            </Dialog>
      </div>
    )
}