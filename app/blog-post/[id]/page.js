import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function BlogPost() {
  return (
    <div>
        <Navbar />
        <div>
            {category}
            {title}
            {author} | {date}
            {image}
            {blogcontent}
        </div>
    </div>
  )
}
