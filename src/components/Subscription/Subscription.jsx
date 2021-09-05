import React, { useState } from 'react';
import FormSignUpWithEmail from '../FormSignUpWithEmail/FormSignUpWithEmail';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { FacebookShareButton } from "react-share";
import { FacebookOutlined } from '@ant-design/icons';


import './Subscription.scss';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import arrow from './arrow-2.png'
import TimeCountDown from '../TimeCountDown/TimeCountDown';

const Subscription = () => {
    const [isSubscribe, setIsSubscribe] = useState(false);
    const { t } = useTranslation();

    const onSubscribe = () => {
        setIsSubscribe(!isSubscribe);
    }

    return (
        <>
            <section className="subscription">
                <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={14} lg={12} className="col-left" >
                        <div className="title">{t('subscribe')}</div>
                        <TimeCountDown />
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={12} className="col-right" >
                        <div className="form">
                            {isSubscribe ? null : <img className="arrow" src={arrow} alt="subscript" />}
                            {isSubscribe ? <div className="thanks-subscribe-wrap">
                                <span className="thanks-subscribe">{t('thanksSubcribe')}</span>
                                <FacebookShareButton url="https://www.buzzho.me/"><FacebookOutlined /></FacebookShareButton>
                            </div> : <FormSignUpWithEmail onSubscribe={onSubscribe} />}
                        </div>
                    </Col>
                </Row>
                {/* <div className="title">{t('subscribe')}</div>
            <div className="form">
                <img className="arrow" src={arrow} alt="subscript"/>
                <FormSignUpWithEmail />
            </div>
            <ChangeLanguage /> */}
                <ChangeLanguage />
            </section>
        </>
    );
}

export default Subscription;