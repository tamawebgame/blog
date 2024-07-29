import { Surface } from "../Surface"
import { PostTitle } from "./PostTitle"
import { PostParagraph } from "./PostParagraph"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { uid } from "uid"

export const Post = (props) => {
  const {title, subTitle, paragraphs, ...rest} = props;
    return (
        <Surface {...rest}>
          <PostTitle title={title} subTitle={subTitle} rightIcon={faAngleRight}/>
          {
              paragraphs?.map(paragraph => {
                return <PostParagraph key={uid()} text={paragraph.text} images={paragraph.images}/>
              })
          }
        </Surface>
    )
}