import React, {useEffect, useState} from 'react'

const Fibonacci = () => {
    const [fibonacci, setFibonacci] = useState(null)
    const [fibonacciHonest, setFibonacciHonest] = useState(null)

    useEffect(() => {
        let f = [3, 4]
        let i = 1
        while (f[i]+f[i-1] < 7000000){
            f.push(f[i]+f[i-1])
            i++
        }
        setFibonacci(f)
        setFibonacciHonest(f.filter(el => el%2 == 0))
    }, [])

    return (
        <div>
            <b>fibonacci:</b><br />
            {fibonacci && fibonacci.map((el, i) => <span key={`f_${i}`}>{el}, </span>)}
            <hr />
            <b>fibonacciHonest:</b><br /> {fibonacciHonest && fibonacciHonest.map((el, i) => <span key={`fh_${i}`}>{el}, </span>)}
            <hr />
            <b>Summa:</b> {fibonacciHonest && fibonacciHonest.reduce((accum, value) => accum + value, 0)}
        </div>
    )
}

export default Fibonacci