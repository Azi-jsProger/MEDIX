import React from 'react';
import Button from '@mui/material/Button';

const ButtonMaterial = (props) => {

    const {
        value,
        style,
        onClick
    } = props

    return (
        <Button onClick={onClick} sx={style}>{value}</Button>
    );
};

export default ButtonMaterial;