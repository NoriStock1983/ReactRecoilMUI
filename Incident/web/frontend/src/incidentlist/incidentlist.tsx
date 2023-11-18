import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, NativeSelect, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, makeStyles } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useMstActions } from "../commons/commons.action";
import dayjs from "dayjs";
import { useIncidentActions } from "./incidentlist.action";
import { useRecoilState } from "recoil";
import { AuthUserAtom } from "../state/authentication";
import { useState } from "react";

export{IncidentList}

function IncidentList(){
    const {t}=useTranslation();
    const incidentActions = useIncidentActions();
    const usemstActions = useMstActions();
    
    const [List,setList] = useState(incidentActions.SearchIncidentlist());

    /* 検索条件の所属先会社名選択事項取得 */
    const companylist = usemstActions.searchBelongedCompany();
    /* 検索条件の所属先部課名選択事項取得 */
    const deptlist = usemstActions.searchBelongedDept();

    /* 検索条件のカテゴリ選択事項取得 */
    const categorylist = usemstActions.searchCategory();

    /* 検索条件のサブカテゴリ選択項目取得 */
    const subcategorylist = usemstActions.searchSubCategory();
    /*システム日付より１ヶ月前の値を設定する */
    const datefrom = dayjs().subtract(1,'month').date(1).format('YYYY-MM-DD')
    const dateto = dayjs().format('YYYY-MM-DD')
    
    /* Recoilのatomからアトムからatomからユーザ情報取得 */
    const [Authuser] = useRecoilState(AuthUserAtom);
    const handleSearchClick = () => {
        setList(incidentActions.SearchIncidentlist2());
    }



    return(
        <Container maxWidth={false}>
            <h4>{t('incidentlist.title')}</h4>
            <hr></hr>
            <h5>{t('common.searchCondition')}</h5>
            <Grid  justifyContent="start" spacing={5} container>
                <Grid item>
                    <TextField label={t('incidentlist.search_condition.search_incient_no')} margin="normal" variant="standard" sx={{minWidth:165}}/>
                </Grid>
                <Grid item>
                    <TextField label={t('incidentlist.search_condition.search_from')} type="date" defaultValue={datefrom} margin="normal" variant="standard" sx={{minWidth:165}}/>
                </Grid>
                <Grid item>
                    <TextField label={t('incidentlist.search_condition.search_to')} type="date" defaultValue={dateto} margin="normal" variant="standard"  sx={{minWidth:165}}/>
                </Grid>
            </Grid>

            <Grid  justifyContent="start" spacing={5} container>
                {/* 問合せ先会社名を選択するDorpDownBoxを表示 */}
                <Grid item>
                    <FormControl sx={{minWidth:165}}>
                        <InputLabel variant="standard">
                            {t(`incidentlist.search_condition.search_inquiry_companynm`)}
                        </InputLabel>
                        <NativeSelect defaultValue={Authuser.companyid}>
                            <option aria-label="None" value="" />
                            {companylist.map(companylist =>
                                <option value={companylist.id}>{companylist.companynm_short}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Grid>
                {/* 問合せ先部署名を選択するDorpDownBoxを表示 */}
                <Grid item>
                    <FormControl sx={{minWidth:165}}>
                        <InputLabel variant="standard">
                            {t(`incidentlist.search_condition.search_inquiry_deptnm`)}
                        </InputLabel>
                        <NativeSelect defaultValue={30}>
                            <option aria-label="None" value="" />
                            {deptlist.map(deptlist =>
                                <option value={deptlist.id}>{deptlist.deptnm_short}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Grid>  
                {/* 問合せ担当者名を設定 */}
                <Grid item>
                    <FormControl sx={{minWidth:165}}>
                        <TextField label={t('incidentlist.search_condition.search_incharge')} variant="standard" value={Authuser.user_l_name + " " + Authuser.user_f_name}/>
                    </FormControl>
                </Grid>
                {/* カテゴリを選択するDorpDownBoxを表示 */}
                <Grid item>
                    <FormControl sx={{minWidth:165}}>
                        <InputLabel variant="standard">
                            {t(`incidentlist.search_condition.search_category`)}
                        </InputLabel>
                        <NativeSelect defaultValue={0}>
                            <option aria-label="None" value="" />
                            {categorylist.map(categorylist =>
                                <option value={categorylist.id}>{categorylist.codename2}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Grid> 
                {/* サブカテゴリを選択するDorpDownBoxを表示 */}
                <Grid item>
                    <FormControl sx={{minWidth:165}}>
                        <InputLabel variant="standard">
                            {t(`incidentlist.search_condition.search_subcategory`)}
                        </InputLabel>
                        <NativeSelect defaultValue={30}>
                            <option aria-label="None" value="" />
                            {subcategorylist.map(subcategorylist =>
                                <option value={subcategorylist.id}>{subcategorylist.codename2}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Grid>  
            </Grid>
            <br></br>
            <Grid  justifyContent="start" spacing={5} container>
                <Grid item>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">*{t(`incidentlist.search_condition.search_inquiry_status`)}</FormLabel>
                            <Box sx={{border: 1}}>
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.0`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.1`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.2`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.3`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.4`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.5`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.6`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.status_detail.7`)} labelPlacement="end"/>
                                </FormGroup>
                            </Box>

                    </FormControl>                    
                </Grid>

                <Grid item xs={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">*{t(`incidentlist.search_condition.search_category`)}</FormLabel>
                            <Box sx={{border: 1}}>
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.category_detail.0`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.category_detail.1`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.category_detail.2`)} labelPlacement="end"/>
                                    <FormControlLabel value="top" control={<Checkbox />} label={t(`incidentlist.search_condition.category_detail.3`)} labelPlacement="end"/>
                                </FormGroup>
                            </Box>
                    </FormControl>                    
                </Grid>

                <Grid item>
                    <Button variant="outlined" onClick={handleSearchClick}>{t('common.search')}</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" >{t('common.new')}</Button>
                </Grid>
            </Grid>
            <br></br>
            <hr></hr>
            <h5>{t('common.list')}</h5>
            <Grid>
                <TableContainer sx={{ maxWidth: 2200,maxHeight: 700 }} component={Paper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableCell style={{position: "sticky"}}>{t('incidentlist.list.list_no')}</TableCell>
                            <TableCell style={{position: "sticky"}}></TableCell>
                            <TableCell>{t('incidentlist.list.list_incidentno')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_inquiry_status')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_title')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_category')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_subcategory')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_inquiry_priority')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_inquiry_urgency')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_reporting_date')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_corresponde_date')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_inquiry_companynm')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_inquiry_deptnm')}</TableCell>
                            <TableCell>{t('incidentlist.list.list_inquiry_person')}</TableCell>
                        </TableHead>
                        <TableBody>
                            {List.map((list) =>
                                <TableRow>
                                    <TableCell style={{position: "sticky"}}>{list.id}</TableCell> 
                                    <TableCell style={{position: "sticky"}}>
                                        <Stack direction="row" spacing={2}>
                                            <Button variant="outlined" >{t('common.copy')}</Button>
                                            <Button variant="outlined" color="error" >{t('common.delete')}</Button>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{list.incidentno}</TableCell> 
                                    <TableCell>{list.status}</TableCell>
                                    <TableCell><a href ="">{list.title}</a></TableCell>
                                    <TableCell>{list.category}</TableCell>
                                    <TableCell>{list.subcategory}</TableCell>
                                    <TableCell>{list.priority}</TableCell>
                                    <TableCell>{list.urgency}</TableCell>
                                    <TableCell>{list.reporting_date}</TableCell>
                                    <TableCell>{list.corresponde_date}</TableCell>
                                    <TableCell>{list.inquiry_companynm}</TableCell>
                                    <TableCell>{list.inquiry_deptnm}</TableCell>
                                    <TableCell>{list.inquiry_person}</TableCell>

                                </TableRow>
                            )}                            
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
        </Container>
    )
}