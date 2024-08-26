import React from 'react';
import TextField from '@mui/material/TextField';

const InputMaterial = (props) => {
    const { style,label,placeholder,type } = props;

    return (
        <TextField
            sx={{
                ...style,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent', // убираем границу
                        borderRadius: '10px', // скругление углов
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent', // убираем границу при hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'transparent', // убираем границу при фокусе
                    },
                    backgroundColor: style.background, // цвет фона
                    width: style.width, // ширина input
                    height: style.height, // высота input
                    borderRadius: style.borderRadius, // скругление углов для всего input
                },
                '& .MuiInputBase-input': {
                    height: '100%', // чтобы текстовый ввод занимал всю высоту контейнера
                    padding: '0 14px',
                    paddingRight:'45' +
                        'px',// стандартные отступы
                    color: 'white', // цвет текста в input
                    '&::placeholder': {
                        // color: 'rgba(255, 255, 255, 0.7)', // цвет плейсхолдера
                        color:'grey',
                        opacity: 1, // чтобы убедиться, что плейсхолдер не будет прозрачным
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'white', // цвет текста лейбла
                    fontSize: '18px', // размер шрифта лейбла
                    top: '-5px', // смещаем лейбл вверх
                    transform: 'translateY(50%)', // убираем стандартное смещение вниз
                    paddingLeft: '14px',
                    transition:'0.3s',
                    '&.Mui-focused , &.MuiFormLabel-filled': {
                        color: 'white', // цвет лейбла при фокусе
                        top: '0', // возвращаем лейбл в исходное положение при фокусе
                        transform: 'translateY(-50%)',
                    },
                },
            }}
            id="outlined-basic"
            label={label}
            variant="outlined"
            placeholder={placeholder}
            type={type}
        />
    );
};

export default InputMaterial;
