import React, {useEffect, useState} from 'react'
import axios from "axios"


const useApi: (value: any) => { loaded: boolean; data: any; err: boolean; changeData: (value: any) => void } = (value:any) => {

    const [data, setData] = useState(null)
    const [err, setErr] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const changeData = (value:any) => {

        if(value === null) return

        axios({
            url: 'lk.zont-online.ru/api/button_count',
            method: 'POST',
            data: {...value},
            // следовал инструкциям https://zont-online.ru/api/docs/#a1ce3c1a83
            // зарегистрировался на https://lk.zont-online.ru/register/
            // конвертировал в base64 login:password, получил токен a2Fpbm46aHlkcmFpa3pvbnQ=
            // ошиба 403!
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic a2Fpbm46aHlkcmFpa3pvbnQ=',
                'X-ZONT-Client': 'kai.nn@mail.ru'
            }
        })
        .then(res => {
            const d = res.data
            setData(d)
            setLoaded(true)
        })
        .catch(e => {

            // обход ошибки 'Request failed with status code 403'
            // setData({...value})

            setErr(true)
            setLoaded(true)
        })
    }

    useEffect(() => {
        changeData(value)
    }, [])

    return {data, err, loaded, changeData}
}

export default useApi