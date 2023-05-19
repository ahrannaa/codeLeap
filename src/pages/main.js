import Header from "../components/Header";
import CreatePosts from "../components/CreatePosts";
import Post from "../components/Post";
import { useState } from "react";

export default function MainPage() {
  const [posts, setPosts] = useState([])

  function remove(id) {
    setPosts((oldPosts) => oldPosts.filter(p => p.id !== id))
  }

  return (
    <>
      <Header />
      <CreatePosts />
      {
        posts.map(post =>
          <Post
            username={post.username}
            title={post.title}
            content={post.content}
            createdAt={post.created_datetime}
            canRemove="true"
            canEdit="true"
            onRemove={() => remove(post.id)}
          />
        )
      }
    </>
  )
};