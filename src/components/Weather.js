import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const WeatherContainer = styled.div`
    margin: 1rem;
    position: absolute;
    top:2%;
    left:2%;
`

const Temp = styled.p`
    font-size: 2rem;
    margin: 0;
    color:#fff;
`
const City = styled.h3`
    text-align: center;
    margin: 4px 0;
    color:#fff;
`

const url = 'https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=0a265f0d38f8ddf85e3e41bd093ae365'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    },[])

    if(!data) return null;

    return (
        <WeatherContainer>
            <Temp>{data.main.temp.toFixed(0)-273}&#176;</Temp>
            <City>Hyderabad, India</City>
        </WeatherContainer>
    )
}

export default Weather
