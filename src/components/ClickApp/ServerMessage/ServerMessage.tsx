import React from 'react'
import {Alert} from "@mui/material";

const ServerMessage = () => {
    return (
        <div>
            <Alert severity="warning">По версии сервера {0} раз</Alert>
        </div>
    )
}

export default ServerMessage