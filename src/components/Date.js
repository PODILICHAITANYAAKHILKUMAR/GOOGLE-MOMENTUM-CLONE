import React from 'react'
import styled from 'styled-components'

const DateContainer = styled.div`
    right:2%;
    top:2%;
    position: absolute;
    padding: 0 1rem;
    color:#fff;
`
const DateToday = () => {

    let today = new Date();
    let date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()

    return (
        <DateContainer>
            <h3>{date}</h3>
        </DateContainer>
    )
}

export default DateToday
