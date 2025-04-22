import { NewsItem } from "@/types/news"
import Image from "next/image"

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
    const news: NewsItem[] = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f645004b10ec464a8e797926475a0a73`).then((res) => 
        res.json()
    )
    return news.map((item) => ({
        id:String(item.id)
    }))
}

const NewsPage = async ({params} : {params: {id: string}}) => {
    const post = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f645004b10ec464a8e797926475a0a73/${params.id}`).then(
        (res) => res.json()
    )

    if(!post){
        return <div>News is not found</div>
    }

  return (
    <section className="py-12">
        <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
            {
                post?.urlToImage && (
                    <div>
                        <Image src={post?.urlToImage} alt={post?.title} />
                    </div>
                )
            }

            <div className="my-5">
                <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                <div>
                    <p>{new Date (post.publishedAt).toLocaleDateString()}</p>
                    <p>Source: <span>{post.author}</span></p>
                </div>
            </div>
        </article>
    </section>
  )
}

export default NewsPage
