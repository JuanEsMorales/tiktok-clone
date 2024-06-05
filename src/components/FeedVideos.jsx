import { useEffect } from "react"
import VideoPlayer from "./VideoPlayer"
import { getVideos } from "../services"
import { useState } from "react"



export default function FeedVideos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos().then((videos) => {
      setVideos(videos)
    })
  }, [])
  return (
    videos.map((video) => {
      const { user } = video
      const { username, avatar } = user
      return <div key={video.id} className="item"><VideoPlayer {...video} username={username} avatar={avatar} /></div>
    })
  )
}