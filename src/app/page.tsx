import Banner from '@/components/ui/Banner'
import React from 'react'
import { NewsItem } from "@/types/news"
import NewsCard from '@/components/ui/NewsCard'
import NewsLetter from '@/components/ui/NewsLetter'


export default async function HomePage() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f645004b10ec464a8e797926475a0a73`)
  const news = await response.json()
  const articles: NewsItem[] = news.articles || []

  return (
    <div >
      <Banner />
      <div className='my-12'>
        <h2 className='text-2xl font-bold mb-8'>Latest News</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
        justify-between'>
          {
            articles.slice(0, 5).map((item: NewsItem) => (
              <NewsCard key={item.url} item={item} />
            ))
          }
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
