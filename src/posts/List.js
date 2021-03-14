import React, { useState, useEffect } from 'react'
import { get } from '../api/Api.js'

const List = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    get('posts')
      .then(res => setPosts(res.data))
      .catch(err => window.alert(`Sorry! There was an error: ${err.message}`))
  }, [])

  return (
    <div>
      <hr />
      <ul>
        {posts.map(post => <li key={post.id}>post</li>)}
      </ul>
    </div>
  )
}

export default List
