import { uid } from "uid"

export const PostParagraph = ({ text, images }) => {
    return (
        <div className="flex gap-2 max-sm:flex-col max-sm:gap-0">
            {
                images && images.length ?
                <div className="bg-white rounded-lg p-6 inline-flex gap-1 flex-shrink-0 items-center justify-center max-sm:rounded-b-none max-sm:pb-0">
                    {
                        images.map(imgAddress => {
                            return (
                                <img 
                                    key={uid()} 
                                    src={`${imgAddress}`}
                                    className="w-24 h-24 rounded-lg object-cover"
                                />
                            )
                        })
                    }
                </div>
                : null
            }
            <div style={{overflowWrap: 'anywhere'}} className={`bg-white rounded-lg p-6 flex-grow inline-flex items-center whitespace-pre-wrap ${images?.length ? "max-sm:rounded-t-none" : ''}`}>
                {text}
            </div>
        </div>
    )
}