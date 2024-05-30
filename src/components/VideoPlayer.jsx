import { useState } from "react"
import { useRef } from "react"
import clsx from "clsx"
import VideoPlayerActions from "./VideoPlayerActions"
import VideoDescription from "./VideoDescription"

export default function VideoPlayer({ src, author, description, albumImage, likes, shares, comments, songTitle }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const video = useRef()
  const handleClick = () => {
    if (isPlaying) {
      video.current.pause()
      setIsPlaying(false)
    } else {
      video.current.play()
      setIsPlaying(true)
    }
  }
  const classes = clsx({
    player: true,
    hidden: isPlaying,
  })

  return (
    <div className="wrapper">
      <video
        src={src}
        width="100%"
        height="100%"
        loop
        ref={video}
        onClick={handleClick}
      />
      <button className={classes} onClick={handleClick}></button>
      <VideoPlayerActions likes={likes} shares={shares} comments={comments} />
      <VideoDescription author={author} description={description} albumImage={albumImage} songTitle={songTitle} />
    </div>
  )
}