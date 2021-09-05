import React from 'react';
import Logo from './Logo/Logo';
import './Introduction.scss';
import Img from '../../images/introImg.png'
import { useTranslation } from 'react-i18next';


const Introduction = (props) => {
    const { t } = useTranslation();
    return (
        <section className="introduction" style={props.isCloseToolBar ? {marginTop: '0', transition: 'all .5s ease-in'} : {marginTop: '5rem'}}>
            <div className="column left">
                <Logo />
                <div className="slogan">
                    {t('providing')} <span className="mark">{t('matching')}</span> &nbsp;{t('and')} <span className="mark">{t('nearRealtime')}</span> {t('dataForReal')}
                </div>
            </div>
            <div className="column right">
                <img className="img" src={Img} alt="Buzzhome" />
            </div>
        </section>
    );
}

export default Introduction;
