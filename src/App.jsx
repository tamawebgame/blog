import './App.css'

import { Header } from './components/Header'
import { Surface } from './components/Surface'
import { Button } from './components/Button'
import { faAngleRight, faAngleDown, faAngleUp, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Post } from './components/Post/Post'
import { BackToTop } from './components/BackToTop/BackToTop'

import postsDefinition from '../assets/json/posts.json'
import { uid } from 'uid'
import { useEffect, useState } from 'react'

function App() {
  const [activePost, setActivePost] = useState(0);
  const [postIds, setPostIds] = useState({});
  const [showSidebarItems, setShowSidebarItems] = useState(true);

  const isScrollPastNode = (element) => {
    return element.offsetTop - 112 <= window.scrollY
  }

  useEffect(() => {
    setPostIds(postsDefinition?.map(() => uid()))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      postsDefinition.forEach((post, index) => {
        const id = postIds[index];
        const postElement = document.querySelector(`div[data-id="${id}"]`);
        if(isScrollPastNode(postElement)) setActivePost(index);
      })
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [postIds])

  const handlePostClick = (index) => {
    // setActivePost(index);

    const id = postIds[index];
    const postElement = document.querySelector(`div[data-id="${id}"]`);
    postElement?.scrollIntoView({
      behavior: "smooth", block: 'start', inline: "nearest"
    })
  }

  useEffect(() => {
    const handleScrollEnd = () => {
      const sidebar = document.getElementById('posts__sidebar-container');
      if(!sidebar) return;
      const id = postIds[activePost];
      const postElement = document.querySelector(`button[data-id="${id}"]`);
      sidebar.scrollTop = postElement?.offsetTop - 100;
    }

    document.addEventListener('scrollend', handleScrollEnd);
    return () => document.removeEventListener('scrollend', handleScrollEnd);
  })

  const handleTableOfContentsClick = () => {
    setShowSidebarItems(prev => !prev);
  }

  return (
    <>
      <Header />
      <BackToTop/>
      <div className='mt-20 p-8 max-sm:p-4 flex gap-6 max-sm:gap-3 max-sm:flex-col'>
        <Surface 
          mx={{
            height: 'fit-content',
            maxHeight: showSidebarItems ? 'calc(100vh - 60px - 5rem)' : 'fit-content'
          }}
          className='sticky top-28 w-80 max-sm:static max-sm:w-auto overflow-y-hidden scroll-smooth max-sm:hidden'
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
            className='flex gap-2 flex-col relative overflow-y-hidden scroll-smooth'
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

        <div className='inline-flex flex-col gap-6 max-sm:gap-3 flex-grow'>
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
