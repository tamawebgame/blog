import { useCallback, useRef, useState } from "react";
import { getColors } from "../../core/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = (props) => {
    const [clickAnimationActive, setClickAnimationActive] = useState(false);
    const { children, color, variant, rightIcon, mx, className, onClick, ...rest } = props;
    const { bg, onHighEmphasis, outline } = getColors(variant, color);
    const previousCall = useRef();

    const handleClick = useCallback((event) => {
        onClick?.();

        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left; // X position inside the button
        const clickY = event.clientY - rect.top;  // Y position inside the button
        if(previousCall.current){
            clearTimeout(previousCall.current);
            previousCall.current = false;
        }
        setClickAnimationActive(false);
        setTimeout(() => {
            setClickAnimationActive({x: clickX, y: clickY});
            const timeout = setTimeout(() => setClickAnimationActive(false), 1000);
            previousCall.current = timeout;
        })
    }, [onClick])

    return (
        <button
            className={`min-h-10 px-3 rounded-lg relative overflow-hidden ${className ?? ''}`}
            style={{
                backgroundColor: bg,
                color: onHighEmphasis,
                outline: outline,
                ...mx
            }}
            onClick={handleClick}
            {...rest}
        >
            {
                clickAnimationActive &&
                <AnimatedCircle x={clickAnimationActive.x} y={clickAnimationActive.y} />
            }
            <div className="relative flex justify-between items-center gap-2">
                {children}
                { rightIcon && <FontAwesomeIcon fontSize={'small'} icon={rightIcon}/> }
            </div>
        </button>
    )
}

const AnimatedCircle = ({x, y}) => {
    return (
        <div style={{left: x, top: y}} className="rounded-full absolute size-1 grow-and-fade"/>
    )
}