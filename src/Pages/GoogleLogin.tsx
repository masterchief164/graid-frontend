import CircularProgress from '@mui/material/CircularProgress';
import {Button, Typography} from "@mui/material";
import GDriveIcon from "../assets/GdriveIcon.svg";

export const GoogleLogin = () => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code);

    const openGraid = (): void => {
        open('graid://login/google?code='+code, '_self');
    }
    openGraid();

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{marginRight: '10px'}} src={GDriveIcon} alt="Gdrive Icon"/>
            <Typography variant="h6" noWrap component="div">
                GRaid
            </Typography>
            </div>
            <h2>Google Login</h2>
            <CircularProgress/>
            <p>Login In Progress please wait</p>
            <Button sx={{mb: '10px'}} variant={'contained'} onClick={openGraid}>Open App</Button>
            <Typography>Please click the button if the app doesn't open automatically</Typography>
        </div>
    );
}