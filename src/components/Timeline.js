import React, { useEffect } from 'react'
import Post from "../components/Post"

export default function Timeline({ posts, next, onEdit, onDelete, fetchNext, username }) {

  useEffect(() => {
    function onScroll() {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      if (scrollTop + clientHeight >= scrollHeight && next) {
        console.log("next: " + next)
        fetchNext()
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [next, fetchNext])

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          username={post.username}
          title={post.title}
          content={post.content}
          createdAt={post.created_datetime}
          canDelete={post.username === username ? "true" : "false"}
          onDelete={onDelete}
          canEdit={post.username === username ? "true" : "false"}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
