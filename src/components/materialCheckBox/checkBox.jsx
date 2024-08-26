import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = (props) => {
    const { id, style } = props;

    return (
        <Checkbox
            sx={{
                color: '#224957', // цвет фона когда unchecked
                '&.Mui-checked': {
                    color: '#fff', // цвет фона когда checked
                },
                '& .MuiSvgIcon-root': {
                    fill: '#224957', // цвет галочки
                },
            }}
            id={id}
            {...style}
        />
    );
};

export default CheckBox;
