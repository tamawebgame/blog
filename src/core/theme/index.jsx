export const theme = {
    solid: {
        primary: {
            bg: '#3D00FF',
            onHighEmphasis: 'white',
            onLowEmphasis: 'gray',
        },
        white: {
            bg: 'white',
            onHighEmphasis: 'black',
            onLowEmphasis: 'gray',
        }
    },
    soft: {
        primary: {
            bg: '#DBCFFF',
            onHighEmphasis: '#3D00FF',
            onLowEmphasis: '#835BFF',
        }
    },
    plain: {
        primary: {
            bg: 'transparent',
            onHighEmphasis: '#3D00FF',
            onLowEmphasis: '#835BFF',
        },
        secondary: {
            bg: 'transparent',
            onHighEmphasis: '#C57B57',
            onLowEmphasis: 'red',
        }
    },
    outlined: {
        primary: {
            bg: 'white',
            onHighEmphasis: '#3D00FF',
            onLowEmphasis: '#3D00FF',
            outline: '1px solid #3D00FF'
        },
    },
}

export const getColors = (variant, color) => {
    if(!theme[variant]){
        return theme.solid.white;
    }
    return theme[variant][color];
}