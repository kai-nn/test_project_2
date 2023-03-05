import React, {useEffect, useState} from 'react'
import {Alert} from "@mui/material";
import useApi from './useApi'


interface ServerMessage {
    count: number,
    setCount: any,
    isDisabled: boolean,
    setIsDisabled: any
}

const ServerMessage:React.FC<ServerMessage> = ({
        count,
        setCount,
        isDisabled,
        setIsDisabled
    }) => {

    const [serverMessage, setServerMessage] = useState<React.ReactChild>('')
    const {data, err, loaded, changeData} = useApi(null)


    useEffect(() => {
        changeData({count: count})

        setTimeout(() => {
            setIsDisabled(loaded)
            setCount(0)

        }, 2000)

    }, [isDisabled])


    useEffect(() => {
        const message: React.ReactChild = data
            ? <Alert severity="warning">По версии сервера {data.count} раз(а)</Alert>
            : <Alert severity="error">Ошибка сервера!</Alert>
        setServerMessage(message)
    }, [loaded])


    return (
        <div>
            {loaded && serverMessage}
        </div>
    )
}

export default ServerMessage