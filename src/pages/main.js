import Header from "../components/Header";
import CreatePosts from "../components/CreatePosts";
import Post from "../components/Post";
import { useState } from "react";

export default function MainPage() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      username: "Ahranna",
      title: "My first post",
      content: "I am so happy with this app!!",
      created_datetime: "2022-03-13T00:00:00Z",
    },
    {
      id: "2",
      username: "Edgard",
      title: "I need to sleep now",
      content: "I am so tired. I worked a lot today",
      created_datetime: "2022-03-14T00:00:00Z",
    },
  ])

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
            title={post.title}
            content={post.content}
            username={post.username}
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