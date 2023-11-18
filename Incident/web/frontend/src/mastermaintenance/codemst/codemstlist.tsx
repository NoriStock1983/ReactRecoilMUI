import { useTranslation } from "react-i18next";
import { useCodemstActions } from "./codelist.action";
import { CodemstDetail } from "./codemstdetail";
import { CodemstDelete } from "./codemstdelete";
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";



function Codemstlist(){

    const {t}=useTranslation();
    const codemstActions = useCodemstActions();
    
    const handleSearchClick = () => {
        codemstActions.SearchCodemst();
    }
    /* 表示用データ取得 */
    const codemstlist = codemstActions.SearchCodemst();

    console.log(codemstlist);

    return(
        <Container maxWidth={false}>
            <h4>{t('codemst.title')}</h4>
            <hr></hr>
            <Grid  justifyContent="start" spacing={5} container>
                <Grid item>
                    <TextField label="code1" variant="standard" />
                </Grid>
                <Grid item>
                    <TextField label="code2" variant="standard" />
                </Grid> 
                <Grid item >
                    <Button variant="outlined" onClick={handleSearchClick}>{t('common.search')}</Button>
                </Grid>
                    
            </Grid>
            <br></br>
            <hr></hr>
            <Grid>
                <TableContainer sx={{ maxWidth: 1500 }} component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableCell style={{ width: 50 }}>#</TableCell>
                            <TableCell style={{ width: 200 }}></TableCell>
                            <TableCell>{t('codemst.code1')}</TableCell>
                            <TableCell>{t('codemst.code2')}</TableCell>
                            <TableCell>{t('codemst.codename1')}</TableCell>
                            <TableCell>{t('codemst.codename2')}</TableCell>
                            <TableCell>{t('codemst.codename3')}</TableCell>
                            <TableCell>{t('codemst.activeflg')}</TableCell>
                        </TableHead>
                        <TableBody>
                            {codemstlist.map((list) =>
                                <TableRow>
                                    <TableCell>{list.id}</TableCell> 
                                    <TableCell>
                                        <Stack direction="row" spacing={2}>
                                            <CodemstDetail data={list}/>
                                            <CodemstDelete/>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{list.code1}</TableCell>
                                    <TableCell>{list.code2}</TableCell>
                                    <TableCell>{list.codename1}</TableCell>
                                    <TableCell>{list.codename2}</TableCell>
                                    <TableCell>{list.codename3}</TableCell>
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
 export {Codemstlist}