import React, {useState} from 'react'
import style from './ClickApp.module.scss'
import {Alert, Button, Stack} from "@mui/material";
import ServerMessage from "./ServerMessage/ServerMessage";


const ClickApp = () => {
    const [count, setCount] = useState(0)
    const [lastEvent, setLastEvent] = useState<any>(null)
    const [isDisabled, setIsDisabled] = useState(false)


    const press = () => {
        lastEvent && clearTimeout(lastEvent)
        const eventId = setTimeout(() => {
            setIsDisabled(true)
        }, 500)
        setLastEvent(eventId)
        setCount(count+1)
    }


    return (
        <div className={style.window}>
            <div className={style.frame}>
                <Stack sx={{ width: '300px' }} spacing={2}>
                    <Button
                        onClick={press}
                        disabled={isDisabled}
                        size="large"
                        variant="contained"
                        color='primary'
                    >
                        КЛИКНУТЬ
                    </Button>

                    <Alert severity="info">Кликнули {count} раз</Alert>

                    {isDisabled && <ServerMessage count={count} setCount={setCount} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />}
                </Stack>
            </div>
        </div>
    )
}

export default ClickApp