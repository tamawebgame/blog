export const Surface = ({ children, mx, className, ...rest }) => {
    return (
        <div style={mx} className={`bg-white bg-opacity-50 rounded-3xl px-6 py-8 flex gap-2 flex-col flex-shrink-0 flex-groww ${className || ""}`} {...rest}>
            {children}
        </div>
    )
}