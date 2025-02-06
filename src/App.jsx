import './App.css'

import { Header } from './components/Header'
import { Surface } from './components/Surface'
import { Button } from './components/Button'
import { faAngleRight, faAngleDown, faAngleUp, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Post } from './components/Post/Post'
import { BackToTop } from './components/BackToTop/BackToTop'
import { useSearchParams } from "react-router-dom";

import postsDefinition from '../assets/json/posts.json'
import { uid } from 'uid'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [activePost, setActivePost] = useState(0);
  const [postIds, setPostIds] = useState({});
  const [showSidebarItems, setShowSidebarItems] = useState(true);

  const [searchParams] = useSearchParams();

  const hasScrolledPastNode = (element) => {
    return element?.offsetTop - 112 <= window.scrollY
  }

  useEffect(() => {
    setPostIds(postsDefinition?.map(() => uid()))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      postsDefinition.forEach((_, index) => {
        const id = postIds[index];
        const postElement = document.querySelector(`div[data-id="${id}"]`);
        if(hasScrolledPastNode(postElement)) setActivePost(index);
      })
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [postIds])

  const handlePostClick = useCallback((index, config = {
    behavior: "smooth", block: 'start', inline: "nearest"
  }) => {
    // setActivePost(index);
    const id = postIds[index];
    const postElement = document.querySelector(`div[data-id="${id}"]`);
    postElement?.scrollIntoView(config)
  }, [postIds])

  useEffect(() => {
    const targetPostTitle = searchParams.get('post');
    if(targetPostTitle){
      const targetPost = postsDefinition.findIndex(post => post.title === targetPostTitle);
      setTimeout(() => {
        handlePostClick(targetPost);
      })
    } 
  }, [handlePostClick]);

  useEffect(() => {
    const handleScrollEnd = () => {
      const sidebar = document.getElementById('posts__sidebar-container');
      if(!sidebar) return;
      const id = postIds[activePost];
      const postBtnElement = document.querySelector(`button[data-id="${id}"]`);
      if(!postBtnElement) return;
      sidebar.scrollTop = postBtnElement.offsetTop - sidebar.offsetTop - ((postBtnElement?.clientHeight ?? 40) / 2);
    }

    document.addEventListener('scrollend', handleScrollEnd);
    return () => document.removeEventListener('scrollend', handleScrollEnd);
  }, [postIds, activePost])

  const handleTableOfContentsClick = () => {
    setShowSidebarItems(prev => !prev);
  }

  return (
    <>
      <Header />
      <BackToTop/>
      <div className='mt-20 p-8 max-xl:p-4 flex gap-6 max-xl:gap-3 max-xl:flex-col'>
        <Surface 
          mx={{
            height: 'fit-content',
            maxHeight: showSidebarItems ? 'calc(100vh - 60px - 5rem)' : 'fit-content'
          }}
          className='sticky top-28 w-80 max-xl:static max-xl:w-auto overflow-y-hidden scroll-smooth max-xl:hidden'
          id='posts__sidebar'
        >
          <Button
            key={uid()}
            variant={'plain'}
            color={'secondary'}
            className="font-bold px-2"
            rightIcon={showSidebarItems ? faAngleDown : faAngleUp}
            onClick={handleTableOfContentsClick}
          >
            {
              <p>Table of contents</p>
            }
          </Button>
          <div
            className='flex gap-2 flex-col relative overflow-auto scroll-smooth'
            id='posts__sidebar-container'
            style={{
              margin: '-1px',
              padding: '1px'
            }}
          >
            {
              showSidebarItems &&
              postsDefinition?.map(({ title }, index) => {
                return (
                  <Button
                    key={postIds[index]}
                    data-id={postIds[index]}
                    rightIcon={faAngleRight}
                    color='primary'
                    variant={index === activePost ? 'outlined' : undefined}
                    mx={{fontWeight: index === activePost ? 'bold' : 'initial'}}
                    onClick={() => handlePostClick(index)}
                  >
                    {title}
                  </Button>
                )
              })
            }
          </div>
        </Surface>

        <div className='inline-flex flex-col gap-6 max-xl:gap-3 flex-grow'>
          {
            postsDefinition?.map(({ title, subTitle, paragraphs }, index) => {
              return (
                <Post
                  key={postIds[index]}
                  data-id={postIds[index]}
                  title={title}
                  subTitle={subTitle}
                  paragraphs={paragraphs}
                  className="scroll-m-28"
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
