import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, NativeSelect, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useUsermstActions } from "./usermst.action";
import { Form } from "react-router-dom";
import { UsermstDelete } from "./usermstdelete";
import { UsermstDetail } from "./usermstdetail";

export{UsermstList}

function UsermstList(){
    const {t}=useTranslation();

    const usermstActions = useUsermstActions();
    
    const handleSearchClick = () => {
        usermstActions.SearchUsermst();
    }
        /* 表示用データ取得 */
        const usermstlist = usermstActions.SearchUsermst();
        /* 検索条件の所属先会社名選択事項取得 */
        const companylist = usermstActions.searchBelongedCompany();
        /* 検索条件の所属先部課名選択事項取得 */
        const deptlist = usermstActions.searchBelongedDept();
        /* 検索条件の権限選択事項取得 */
        const authlist = usermstActions.searchAuth();
    return(
        <Container maxWidth={false}>
            <h4>{t('usermst.title')}</h4>
            <hr></hr>
            <Grid  justifyContent="start" spacing={5} container>
                <Grid item>
                    <FormControl sx={{minWidth:150}}>
                    <InputLabel variant="standard">
                        *{t(`usermst.belonged_company_nm`)}
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
                            {t(`usermst.belonged_dept_nm`)}
                        </InputLabel>
                        <NativeSelect defaultValue={30}>
                            <option aria-label="None" value="" />
                            {deptlist.map(deptlist =>
                                <option value={deptlist.id}>{deptlist.deptnm_short}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Grid> 
                <Grid item>
                    <FormControl sx={{minWidth:150}}>
                        <InputLabel variant="standard">
                                {t(`usermst.authority_nm`)}
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
                        <TextField label={t('usermst.usercd')} variant="standard" />
                    </FormControl>
                </Grid>
                <Grid item >
                    <Button variant="outlined" onClick={handleSearchClick}>{t('common.search')}</Button>
                </Grid>
                    
            </Grid>
            <br></br>
            <hr></hr>
            <Grid>
                <TableContainer sx={{ maxWidth: 1800 }} component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableCell style={{ width: 50 }}>#</TableCell>
                            <TableCell style={{ width: 200 }}></TableCell>
                            <TableCell>{t('usermst.usercd')}</TableCell>
                            <TableCell>{t('usermst.user_f_name')}{t('usermst.user_l_name')}</TableCell>
                            <TableCell>{t('usermst.belonged_company_nm')}</TableCell>
                            <TableCell>{t('usermst.belonged_dept_nm')}</TableCell>
                            <TableCell>{t('usermst.authority_nm')}</TableCell>
                            <TableCell>{t('usermst.activeflg')}</TableCell>
                        </TableHead>
                        <TableBody>
                            {usermstlist.map(list =>
                                <TableRow>
                                    <TableCell>{list.id}</TableCell> 
                                    <TableCell>
                                        <Stack direction="row" spacing={2}>
                                            <UsermstDetail data={list}/>
                                            <UsermstDelete/>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{list.usercd}</TableCell>
                                    <TableCell>{list.user_f_name}{list.user_l_name}</TableCell>
                                    <TableCell>{list.belonged_company_nm}</TableCell>
                                    <TableCell>{list.belonged_dept_nm}</TableCell>
                                    <TableCell>{list.auth_nm}</TableCell>
                                    <TableCell><FormControlLabel control={<Checkbox checked={list.activeflg} />} label="isActive" /></TableCell>
                                </TableRow>
                            )}                            
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
        </Container>
    )
}