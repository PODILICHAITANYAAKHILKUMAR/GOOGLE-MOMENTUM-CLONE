import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

const Welcome = styled.div`
    position: absolute;
    text-align:center;
    padding: 1rem;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,50%);
    transform: translate(-50%,-50%);
`

const TimeStamp = styled.p`
    font-size: 7rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 600px) {
        font-size: 3.5rem;
    }
`

const Greeting = styled.p`
    font-size: 4rem;
    font-weight: 600;
    margin: 0;
    padding: 0;

    @media screen and (max-width:600px) {
        font-size: 3rem;
    }
`


const Time = () => {

    let today = new Date()

    let greetings = () => {
        if (today.getHours() >= 5 && today.getHours() < 11) {
            return 'Good Morning!.'
        } else if (today.getHours() >= 11 && today.getHours() < 17) {
            return 'Good Afternoon!'
        } else if (today.getHours() >= 17 && today.getHours() < 24) {
            return "Good Evening!"
        } else {
            return "It's Midnight!"
        }
    }

    return (
        <Welcome>
            <TimeStamp><Moment format='LT'></Moment></TimeStamp>
            <Greeting>{greetings()}</Greeting>
        </Welcome>
    )
}

export default Time
