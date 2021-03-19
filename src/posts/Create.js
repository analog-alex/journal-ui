import React, { useState } from 'react'
import { Post } from '../api/Api.js'

const Create = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: 'analog-alex',
    text: '',
    tags: ['test', 'default']
  })

  const onChangeHandler = event => setPost({
    ...post,
    [event.target.name]: event.target.value
  })

  const persist = () => {
    Post('posts', post)
      .then(res => window.alert(res.data))
      .catch(err => window.alert(`Sorry! There was an error: ${err.message}`))
  }

  return (
    <div>
      <h3>Create a new blog post</h3>
      <hr />
      <input type='text' value={post.title} name='title' onChange={onChangeHandler} />
      <br />
      <textarea type='text' value={post.text} name='text' onChange={onChangeHandler} />
      <br />
      <br />
      <button disabled={post.title === '' || post.text === ''} onClick={persist}>New post!</button>
    </div>
  )
}

export default Create
