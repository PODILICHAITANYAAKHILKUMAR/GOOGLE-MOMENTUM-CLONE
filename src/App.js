import React from 'react';
import Weather from './components/Weather';
import Time from './components/Time';
import Date from './components/Date';
import Quote from './components/Quote';

function App(){
    return(
        <React.Fragment>
            <Weather/>
            <Time/>
            <Date/>
            <Quote/>
        </React.Fragment>
    )
}
export default App;