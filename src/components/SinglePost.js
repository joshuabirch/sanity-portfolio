import React, {useEffect, useState } from 'react'
import sanityClient from '../client.js'
import { useParams } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { motion } from 'framer-motion'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

function SinglePost() {

  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(`*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])
  
  if (!singlePost) return <div>Loading...</div>

  return (
    <motion.main 
      className='min-h-screen p-12'

      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{
        x: window.innerWidth,
        transition: {duration: 0.1} 
      }}
    >
      <article className='container mx-auto'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div>
              <h1 className='blenny text-3xl lg:text-6xl mb-4 text-white'>{singlePost.title}</h1>
              <div className='flex justify-center text-white'>
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className='w-10 h-10 rounded-full'
                />
              </div>
              <p className='paralucent flex items-center pl-2 text-2xl text-white'>{singlePost.name}</p>
            </div>
          </div>
          <img 
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className='w-full object-cover'
            style={{ height: '400px' }}
          />
        </header>
        <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-white paralucent text-xl'>
          <BlockContent 
            blocks={singlePost.body} 
            projectId="i21wihy7" 
            dataset="production" 
          />
        </div>
      </article>
    </motion.main>
  )
}

export default SinglePost