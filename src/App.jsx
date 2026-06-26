import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components-v2/Header";
import PostContent from "./components-v2/PostContent";
import HomePage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";

const markdownFiles = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
});

function App() {
  const [content, setContent] = useState("");

  const slug = "update-1312025";

  useEffect(() => {
    const path = `./posts/${slug}.md`;

    if (markdownFiles[path]) {
      markdownFiles[path]().then(setContent);
    }
  }, [slug]);

  console.log({ markdownFiles });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<HomePage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
    </>
    // <div>
    //   <Header />
    //   {/* <PostContent content={content} /> */}
    //   <HomePage />
    // </div>
  );
}

export default App;
