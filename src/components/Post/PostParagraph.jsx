import Markdown from "react-markdown"
import { uid } from "uid"

export const PostParagraph = ({ text, images, title }) => {
    return (
        <div className="flex gap-2 max-xl:flex-col max-xl:gap-0">
            {
                images?.length ?
                <div style={{imageRendering: 'pixelated'}} className="bg-white rounded-lg p-6 inline-flex gap-1 flex-shrink-0 items-center justify-center max-xl:rounded-b-none max-xl:pb-0">
                    {
                        images.map(imgAddress => {
                            return (
                                <img 
                                    key={uid()} 
                                    src={`${imgAddress}`}
                                    className="w-32 h-32 rounded-lg object-cover"
                                />
                            )
                        })
                    }
                </div>
                : null
            }
            <div style={{overflowWrap: 'anywhere'}} className={`bg-white flex-col rounded-lg p-6 flex-grow inline-flex items-start justify-center whitespace-pre-wrap ${images?.length ? "max-xl:rounded-t-none" : ''}`}>
                {title && <b>{title}</b>}
                <div className="markdown">
                    <Markdown>
                        {text}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}