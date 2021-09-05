import React, { useState, useEffect } from 'react';
import './TimeCountDown.scss';

const TimeCountDown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2020-09-26') - +new Date();
        let timeLeft = {};
        let language = localStorage.getItem('language');
        if (difference > 0 && language === 'en') {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : '00',
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24) > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : '00',
                Minutes: Math.floor((difference / 1000 / 60) % 60) > 0 ? Math.floor((difference / 1000 / 60) % 60) : '00',
                Seconds: Math.floor((difference / 1000) % 60) > 0 ? Math.floor((difference / 1000) % 60) : '00',
            };
        }
        else if ((difference > 0 && language === 'vn') || (difference > 0 && !language)) {
            timeLeft = {
                Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : '00',
                Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24) > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : '00',
                Phút: Math.floor((difference / 1000 / 60) % 60) > 0 ? Math.floor((difference / 1000 / 60) % 60) : '00',
                Giây: Math.floor((difference / 1000) % 60) > 0 ? Math.floor((difference / 1000) % 60) : '00',
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        let countDownTimeout = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => {
            clearTimeout(countDownTimeout)
        }
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span className="time-count-down-content" key={index}>
                {timeLeft[interval]} {interval} &nbsp;
            </span>
        );
    });

    return (
        <div className="time-count-down">
            {/* <h1>Thời Gian Còn Lại</h1> */}
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default TimeCountDown;