import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from '../redux/userSlice'
import PostForm from "../components/PostForm";
import Timeline from "../components/Timeline";

const CODELAP_URL = "https://dev.codeleap.co.uk/careers/"
const POSTS_LIMIT = 10

export default function MainPage() {
  const [posts, setPosts] = useState([])
  const [next, setNext] = useState('')
  const { username } = useSelector(selectUser)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const response = await axios.get(`${CODELAP_URL}?limit=${POSTS_LIMIT}`)
    const data = response.data
    setPosts(data.results)
    setNext(data.next)
  }

  async function fetchNextPosts() {
    if (next) {
      const response = await axios.get(next)
      const data = response.data
      setPosts((prev) => [...prev, ...data.results])
      setNext(data.next)
    }
  }

  async function editPost(id, post) {
    const body = {
      title: post.title,
      content: post.content
    }
    try {
      await axios.patch(`${CODELAP_URL}${id}/`, body)
      await fetchPosts()
    } catch (err) {
      console.log("error when editing post", err)
    }
  }

  async function createPost(newPost) {
    try {
      const body = { ...newPost, username }
      await axios.post(CODELAP_URL, body)
      await fetchPosts()
    } catch (err) {
      console.log(err)
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`${CODELAP_URL}${id}/`)
      await fetchPosts()
    } catch (err) {
      console.log("error when deleting post", err)
    }
  }

  return (
    <>
      <Header />
      <PostForm onSubmit={createPost} />
      <Timeline
        username={username}
        posts={posts}
        fetchNext={fetchNextPosts}
        onDelete={deletePost}
        onEdit={editPost}
      />
    </>
  )
};