import { getColors } from "../../core/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = (props) => {
    const { children, color, variant, rightIcon, mx, className, ...rest } = props;
    const { bg, onHighEmphasis, outline } = getColors(variant, color);


    return (
        <button
            className={`flex min-h-10 px-3 rounded-lg justify-between items-center gap-2 hover:bg-gray-400 ${className ?? ''}`}
            style={{
                backgroundColor: bg,
                color: onHighEmphasis,
                outline: outline,
                ...mx
            }}
            {...rest}
        >
            {children}
            {
                rightIcon 
                    ? <FontAwesomeIcon fontSize={'small'} icon={rightIcon}/> 
                    : null
            }
        </button>
    )
}