import React, {useState} from 'react'
import style from './ClickApp.module.scss'
import {Alert, Button, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';
import ServerMessage from "./ServerMessage/ServerMessage";


const ClickApp = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={style.window}>
            <Stack sx={{ width: '300px' }} spacing={2}>
            <Button size="medium" variant="contained" color='primary'>КЛИКНУТЬ</Button>
            <Alert severity="info">Кликнули {0} раз</Alert>
            <ServerMessage/>
            </Stack>
        </div>
    )
}

export default ClickApp