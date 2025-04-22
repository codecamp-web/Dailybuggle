

import { NewsItem } from '@/types/news'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'


interface NewsCardProps {
  item: NewsItem
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md '>
      <Link href={`/news/${item.url}`}>
        {item.urlToImage ? (
          <Image
            src={item.urlToImage}
            alt={item.title}
            width={500}
            height={500}
            className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all 
    duration-300"
          /> 
        ) : null}

      </Link>
      <div>
        <h2 className='text-xl font-semibold my-3'>{item.title}</h2>
        <p className='mb-4'>
          {item.description ? item.description.substring(0, 85) + '...' : 'No description available.'}
        </p>
        <Link href={`/news/${item.url}`}>
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  )
}

export default NewsCard
