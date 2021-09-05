import React from 'react';
import './StaticStatisticItem.scss';
import { Col } from 'antd';

const StaticStatisticItem = ({number, content}) => {
    return (
        <Col className="static-statistic-item" xs={24} sm={12} lg={6} xl={6}>
            <div className="number">{number}<span className="plus">+</span> </div>
            <h3 className="content">{content}</h3>
        </Col>
    );
};

export default StaticStatisticItem;