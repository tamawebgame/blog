import Markdown from "react-markdown";

const PostContent = ({ content }) => {
  return <Markdown className="prose mx-auto py-4">{content}</Markdown>;
};

export default PostContent;
