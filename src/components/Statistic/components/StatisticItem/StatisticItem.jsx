import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import CountUp from 'react-countup';

import './StatisticItem.scss';

const StatisticItem = (props) => {
    const { startCount, endCount, ranDomTime, content } = props;
    const [start, setStart] = useState(startCount);
    const [end, setEnd] = useState(endCount);

    useEffect(() => {
        const interval = setInterval(async () => {
            await setStart(end);
            await setEnd(end + Math.random(10) + 5);
        }, ranDomTime);
        return () => {
            clearInterval(interval)
        }
    }, [end, ranDomTime])


    return (
        <Col className="posts" xs={24} sm={12} lg={6} xl={6}>
            {end && <CountUp className="number" start={start} end={end} separator={','} />}
            <h3 className="content">{content}</h3>
        </Col>
    );
};

export default StatisticItem;