import React from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';

import './Statistic.scss';
import StatisticItem from './components/StatisticItem/StatisticItem';
import StaticStatisticItem from './components/StaticStatisticItem/StaticStatisticItem';


const Statistic = () => {
    const { t } = useTranslation();
    return (
        <section className="statistic">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {/* <StatisticItem content={t('postEveryday')} startCount={0} endCount={1234} ranDomTime={Math.random(7000) + 12000} /> */}
                    <StatisticItem content={t('propertiesListed')} startCount={0} endCount={2134} ranDomTime={Math.random(4000) + 9000} />
                    <StatisticItem content={t('matchTransactions')} startCount={0} endCount={1156} ranDomTime={Math.random(3000) + 8000} />
                    {/* <StatisticItem content={t('happyCustomers')} startCount={0} endCount={4567} ranDomTime={Math.random(10000) + 15000} /> */}
                    <StaticStatisticItem content={t('customerForBrokers')} number={15}/>
                    <StatisticItem content={t('customerFoundMatchProperty')} startCount={0} endCount={1042} ranDomTime={Math.random(10000) + 15000} />
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            </Row>
        </section>
    );
}

export default Statistic;