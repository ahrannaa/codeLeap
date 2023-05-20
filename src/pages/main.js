import Header from "../components/Header";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from '../redux/userSlice'
import PostForm from "../components/PostForm";

const CODELAP_URL = "https://dev.codeleap.co.uk/careers/"

export default function MainPage() {
  const [posts, setPosts] = useState([])
  const { username } = useSelector(selectUser)

  useEffect(() => {
    getPosts()
      .then(() => { })
      .catch((err) => console.log("error when getting posts", err))
  }, []);

  async function getPosts() {
    const response = await axios.get(CODELAP_URL)
    setPosts(response.data.results)
  }

  async function editPost(id, post) {
    const body = {
      title: post.title,
      content: post.content
    }

    try {
      await axios.patch(`${CODELAP_URL}${id}/`, body);
      await getPosts()
    } catch (err) {
      console.log("error when editing post", err)
    }
  }

  async function createPost(post) {
    try {
      const body = { ...post, username }
      await axios.post(CODELAP_URL, body)
      await getPosts()
    } catch (err) {
      console.log(err)
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`${CODELAP_URL}${id}/`);
      await getPosts()
    } catch (err) {
      console.log("error when deleting post", err)
    }
  }

  return (
    <>
      <Header />
      <PostForm onSubmit={createPost} />
      {
        posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            username={post.username}
            title={post.title}
            content={post.content}
            createdAt={post.created_datetime}
            canDelete={post.username === username ? "true" : "false"}
            onDelete={deletePost}
            canEdit={post.username === username ? "true" : "false"}
            onEdit={editPost}
          />
        ))
      }
    </>
  )
};