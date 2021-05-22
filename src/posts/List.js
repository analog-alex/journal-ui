import React, { useState, useEffect } from 'react'
import { Get } from '../api/Api.js'

const List = (props) => {
  const [posts, setPosts] = useState([])

  const formatPost = (post) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>by {post.author}</p>
        <hr />
        <br />
        <div>
          <p>{post.text}</p>
        </div>
      </div>
    )
  }

  useEffect(() => {
    Get('posts')
      .then(res => setPosts(res.data.embedded))
      .catch(err => window.alert(`Sorry! There was an error: ${err.message}`))
  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{formatPost(post)}</li>)}
      </ul>
    </div>
  )
}

export default List
