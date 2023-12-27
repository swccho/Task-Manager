import React, { useState, useEffect } from 'react';
import '../../../stylesheet/components/header/dateAndTime.scss'

function DateAndTime() {
    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <>
        <div className="date-time">
            <p className={'date'}>{formatDate(currentTime)}</p>
            <p className={'time'}>{currentTime.toLocaleTimeString()}</p>
        </div>
    </>
}

export default DateAndTime
