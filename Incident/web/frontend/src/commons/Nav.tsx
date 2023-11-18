import { useTranslation } from 'react-i18next';
import "../i18n/config";
import { AppBar, Avatar, Grid, IconButton, Popover, Toolbar, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import MiniDrawer from './Sidebar';

export{Nav}

function Nav(){
    const {t}=useTranslation();

    const [open,setopen] = useState(false);

    const handleClickOpen = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }

    return(
        <Grid container>
            <Grid xs={12}>
                <AppBar position="static">
                    <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t('common.title')}
                    </Typography>
                    <IconButton onClick={handleClickOpen}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    </IconButton>
                    <Popover 
                        open={open}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        >
                        The content of the Popover.
                    </Popover>
                    
                    </Toolbar>
                </AppBar>

            </Grid>
        </Grid>
    )
}