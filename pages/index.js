import Head from 'next/head'
import styles from '../styles/home.module.css'

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  const posts = await response.json()
  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <>
    <h1>This is a blog with content from an API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Blog
