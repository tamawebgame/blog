import { getColors } from "../../core/theme";

export const PostTitle = ({ title, subTitle }) => {
    
    const { bg, onHighEmphasis, onLowEmphasis } = getColors('soft', 'primary');

    return (
        <div 
            className="flex min-h-10 px-3 rounded-lg justify-between items-center gap-2 max-sm:flex-col max-sm:gap-0 max-sm:p-2 max-sm:items-start max-sm:pl-4"
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