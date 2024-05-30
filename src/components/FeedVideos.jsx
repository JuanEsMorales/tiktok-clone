import VideoPlayer from "./VideoPlayer"

const VIDEOS = [
  {
    author: 'Horselover',
    description: 'Horselover is a video game developed by the indie game studio Horse & Lemon. The game was released on October 14, 2021 for Microsoft Windows, PlayStation 4, and Xbox One. The game is a side-scrolling platformer with a focus on exploration and combat.',
    likes: 423,
    shares: 656,
    comments: 789,
    songTitle: 'sonido original - horselover ost',
    albumImage: 'https://github.com/JuanEsMorales.png',
    src: 'https://cdn.pixabay.com/video/2024/03/31/206294_large.mp4',
    id: 1
  },
  {
    author: 'juan',
    description: 'This is a video description',
    likes: 123,
    shares: 456,
    comments: 189,
    songTitle: 'sonido original - random song',
    albumImage: 'https://github.com/John.png',
    src: 'https://cdn.pixabay.com/video/2021/04/19/71567-538962845_large.mp4',
    id: 2
  },
]

export default function FeedVideos() {
  return (
    VIDEOS.map((video) => (
      <div key={video.id} className="item"><VideoPlayer {...video} /></div>
    ))
  )
}