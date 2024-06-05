import { useState } from "react"
import { useRef } from "react"
import clsx from "clsx"
import VideoPlayerActions from "./VideoPlayerActions"
import VideoDescription from "./VideoDescription"
import { useEffect } from "react"


export default function VideoPlayer({ src, username, description, avatar, likes, shares, comments, songTitle }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const video = useRef(null)
  const options = {
    root: document.querySelector("main"),
    rootMargin: "0px",
    threshold: 0.8,
  };
  
  let observer = new window.IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.play();
          setIsPlaying(true);
      } else {
          entry.target.pause();
          setIsPlaying(false);
      }
  });
  }, options);

  useEffect(() => {
    let currentVideo = video.current
    if (currentVideo) {
      observer.observe(currentVideo)
    }
  }, [])
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
      <VideoPlayerActions likes={likes} shares={shares} comments={comments} avatar={avatar} username={username} />
      <VideoDescription username={username} description={description} avatar={avatar} songTitle={songTitle} />
    </div>
  )
}