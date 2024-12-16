import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18n from '../../i18n'; // Импортируйте вашу конфигурацию i18next

export default function SelectVariants() {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'ky');

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }, [language]);

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    };

    const menuItemStyles = {
        color: 'white',
        backgroundColor: 'teal',
        '&.Mui-selected': {
            backgroundColor: '#093545 !important',
            color: 'white',
        },
        '&:hover': {
            backgroundColor: '#13475b',
        },
    };

    return (
        <FormControl
            sx={{
                m: 1,
                maxWidth: 200,  // Максимальная ширина контейнера
                width: '200px', // Устанавливаем фиксированную ширину
                borderRadius: '4px',
                background: 'transparent',
            }}
        >
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Select language' }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            maxWidth: 200, // Устанавливаем максимальную ширину выпадающего списка
                            backgroundColor: 'transparent',
                            '& .MuiList-root': {
                                padding: 0, // Убираем внутренние отступы
                                backgroundColor: 'transparent', // Фон для корневого списка
                            },
                        },
                    },
                }}
                sx={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    '& .MuiSelect-icon': { color: 'white' },
                    width: '200px', // Устанавливаем ширину для самого Select
                }}
            >
                <MenuItem sx={menuItemStyles} value="ky">Кыргызский</MenuItem>
                <MenuItem sx={menuItemStyles} value="ru">Русский</MenuItem>
                <MenuItem sx={menuItemStyles} value="en">English</MenuItem>
            </Select>
        </FormControl>
    );
}
