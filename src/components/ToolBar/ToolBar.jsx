import React from 'react';
import { useTranslation } from 'react-i18next';

import './ToolBar.scss'

const ToolBar = (props) => {
    const { t } = useTranslation();

    return (
        <div className="toolbar-covid19" style={props.isCloseToolBar ? { opacity: 0, transition: 'opacity .5s ease-out' } : { opacity: 1 }}>
            <p className="content-toolbar">{t('toolBarContent')}</p>
            <p className="close-toolbar" onClick={props.closeToolBar}>X</p>
        </div>
    );
};

export default ToolBar;