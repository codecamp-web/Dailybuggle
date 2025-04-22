"use client"

import { NewsItem } from '@/types/news'
import React, { useEffect, useState } from 'react'
import fetchNews from '@/lib/fetchNews'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import NewsCard from '../ui/NewsCard'

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([])
    const [category, setCategory] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        const getnews = async () => {
            const data = await fetchNews(category, search)
            setNews(data)
        }
        getnews()
    }, [category, search])

  return (
    <div>
      <div className='md:flex gap-x-3 items-center mb-10'>
        <SearchBar onSearch = {setSearch} />
        <CategoryFilter onCategoryChange={setCategory} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
        justify-between'>
      {news.slice(0,5).map((Item:NewsItem) => (
            <NewsCard key={Item.url} item={Item} />
        ))}
      </div>
    </div>
  )
}

export default NewsList
