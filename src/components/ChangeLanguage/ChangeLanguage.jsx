import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

import './ChangeLanguage.scss';

const { Option } = Select;

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)
        localStorage.setItem('language', value);
        if (value === "en") {
            window.document.title = "Buzz Home";
        }
        else if (value === "vn") {
            window.document.title = "BuzzHome - Sàn Kết Nối Bất Động Sản Theo Nhu Cầu"
        }
    }

    return (
        <div className="change-language">
            <Select defaultValue={localStorage.getItem('language') === 'en' ? 'English' : 'Tiếng Việt'} style={{ width: 120 }} onChange={handleChange}>
                <Option value="en">{t('optionEnglish')}</Option>
                <Option value="vn">{t('optionVietnamese')}</Option>
            </Select>
        </div>
    );
};

export default ChangeLanguage;