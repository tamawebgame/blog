import { getColors } from "../../core/theme";

export const PostTitle = ({ title, subTitle }) => {
    
    const { bg, onHighEmphasis, onLowEmphasis } = getColors('soft', 'primary');

    return (
        <div 
            className="flex min-h-10 px-3 rounded-lg justify-between items-center gap-2"
            style={{
                backgroundColor: bg,
                color: onHighEmphasis,
            }}
        >
            <p className="font-bold">
                {title}
            </p>
            <p style={{color: onLowEmphasis}}>
                {subTitle}
            </p>
        </div>
    )
}