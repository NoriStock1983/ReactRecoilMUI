import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, NativeSelect, TextField } from "@mui/material"
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useTranslation } from "react-i18next";
import { useUsermstActions } from "./usermst.action";

export{UsermstDetail}

function UsermstDetail(props:{data:{ id: number; usercd: string; belonged_company_nm: string; belonged_dept_nm: string; user_f_name: string; user_l_name: string; auth_nm: string; activeflg: boolean; }}){
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
    const usermstActions = useUsermstActions();
    /* 検索条件の所属先会社名選択事項取得 */
    const companylist = usermstActions.searchBelongedCompany();
    /* 検索条件の所属先部課名選択事項取得 */
    const deptlist = usermstActions.searchBelongedDept();
    /* 検索条件の権限選択事項取得 */
    const authlist = usermstActions.searchAuth();
    /* 設定時の言語を取得 */
    const langlist = usermstActions.searchLanguage();

    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                <EditOutlinedIcon/>
            </Button>
            <Dialog open={open}>
                <DialogTitle>{t('usermst.detail.title')}</DialogTitle>
                <DialogContent>
                    <Grid  justifyContent="start" spacing={5} container>
                        <Grid item>
                            <TextField label={t('usermst.detail.usercd')} variant="standard" value={props.data.usercd}/>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid  justifyContent="start" spacing={5} container>
                        <Grid item>
                            <TextField label={t('usermst.detail.user_l_name')} variant="standard" value={props.data.user_l_name}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('usermst.detail.user_f_name')} variant="standard" value={props.data.user_f_name}/>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid  justifyContent="start" spacing={5} container>
                        <Grid item>
                            <FormControl sx={{minWidth:150}}>
                                <InputLabel variant="standard">
                                    {t(`usermst.detail.belonged_company_nm`)}
                                </InputLabel>
                                <NativeSelect defaultValue={30}>
                                    <option aria-label="None" value="" />
                                    {companylist.map(companylist =>
                                        <option value={companylist.id}>{companylist.companynm_short}</option>
                                    )}
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl sx={{minWidth:150}}>
                                <InputLabel variant="standard">
                                    {t(`usermst.detail.belonged_dept_nm`)}
                                </InputLabel>
                                <NativeSelect defaultValue={30}>
                                    <option aria-label="None" value="" />
                                    {deptlist.map(deptlist =>
                                        <option value={deptlist.id}>{deptlist.deptnm_short}</option>
                                    )}
                                </NativeSelect>
                            </FormControl>
                        </Grid> 
                    </Grid>
                    <br></br>
                    <Grid  justifyContent="start" spacing={5} container>
                        <Grid item>
                            <FormControl sx={{minWidth:150}}>
                                <InputLabel variant="standard">
                                        {t(`usermst.detail.authority_nm`)}
                                    </InputLabel>
                                    <NativeSelect defaultValue={30}>
                                        <option aria-label="None" value="" />
                                        {authlist.map(authlist =>
                                            <option value={authlist.id}>{authlist.authnm}</option>
                                        )}
                                </NativeSelect>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl sx={{minWidth:150}}>
                                <InputLabel variant="standard">
                                        {t(`usermst.detail.language`)}
                                    </InputLabel>
                                    <NativeSelect defaultValue={30}>
                                        <option aria-label="None" value="" />
                                        {langlist.map(langlist =>
                                            <option value={langlist.id}>{langlist.codename2}</option>
                                        )}
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid  justifyContent="start" spacing={5} container>
                        <Grid item>
                            <FormControlLabel control={<Checkbox checked = {checked} onChange={handleonChange}/>} label={t('usermst.detail.activeflg')} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('common.edit')}</Button>
                    <Button onClick={handleClose}>{t('common.cancel')}</Button>
                </DialogActions>
            </Dialog>
      </div>
    )
}