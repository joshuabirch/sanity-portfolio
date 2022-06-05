import React, {useState, useEffect} from 'react'
import sanityClient from '../client.js'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

function Project() {

  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])

  return (
    <motion.div 
      className='min-h-screen p-12'

      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{
        x: window.innerWidth,
        transition: {duration: 0.1} 
      }}
    >
      <section className='container mx-auto'>
        <h1 className='blenny text-white text-8xl uppercase flex justify-center mb-12'>🌙 projects</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData && postData.map((post, index) => (
          <article>
            <Link to={'/post/' + post.slug.current} key={post.slug.current}>
            <span className='block h-64 relative rounded leading-snug bg-transparent border-2 border-white' key={index}>
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className='w-full h-full rounded object-cover absolute'
              />
              <span className='block relative h-full flex justify-start items-end pr-4 pb-4'>
                <h3 className='text-white text-lg px-3 py-4 blenny'>{post.title}</h3>
              </span>
            </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default Project