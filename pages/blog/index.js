import React from 'react'
import Link from 'next/link'

export default function index(props) {
  return (
    <div className="container px-4 py-5">
        <h1 className="text-center">Bienvenue sur le blog</h1>
        <p className="text-center">Voici les articles</p>
        <div className="row g-3 mt-4">
            {props.articles.map(article => (
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.body.slice(0, 20) + '...'}</p>
                            <Link className="card-link" href={`/blog/${article.id.toString()}`}>
                                Lire cet article
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}


export async function getStaticProps(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const articles = await data.json()

    return {
        props: {
            articles
        }
    }
}
