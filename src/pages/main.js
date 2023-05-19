import Header from "../components/Header";
import CreatePosts from "../components/CreatePosts";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from '../redux/userSlice'

const CODELAP_URL = "https://dev.codeleap.co.uk/careers/"

export default function MainPage() {
  const [posts, setPosts] = useState([])
  const { name } = useSelector(selectUser)

  useEffect(() => {
    getPosts()
      .then(() => { })
      .catch((err) => console.log("error when getting posts"))
  }, []);

  async function getPosts() {
    const response = await axios.get(CODELAP_URL)
    setPosts(response.data.results)
  }

  async function editPost(id, post) {
    try {
      await axios.patch(`${CODELAP_URL}${id}/`);
      await getPosts()
    } catch (err) {
      console.log("error when editing post", err)
    }
  }

  return (
    <>
      <Header />
      <CreatePosts />
      {
        posts.map((post) => (
          <Post
            postId={post.id}
            username={post.username}
            title={post.title}
            content={post.content}
            createdAt={post.created_datetime}
            canRemove={post.username === name ? "true" : "false"}
            canEdit={post.username === name ? "true" : "false"}
            onEdit={editPost}
          />
        ))
      }
    </>
  )
};