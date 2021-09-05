import React from 'react';
import { Button } from 'antd';
import './ButtonCustom.scss';

const ButtonCustom = ({ title, children, type = "primary", onClick, style, loading}) => {
    return (
        <Button type={type} className="button-custom" onClick={onClick} style={style} loading = {loading}>
            {title || children}
        </Button>
    );
}

export default ButtonCustom;