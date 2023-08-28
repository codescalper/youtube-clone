import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'

const inter = Inter({ subsets: ['latin'] })
const data = {
  title: "Javascript tutorial",
  views: "45k views",
  thumbnail: 'https://picsum.photos/id/237/300/160',
  channelImg: 'https://picsum.photos/id/301/25/25',
  uploadOn: '2 months ago',
  channel: "Mayank Singh"
}

export default function Home() {
  return (
    <div>
      <VideoCard title={data.title} channel={data.channel} views={data.views} thumbnail={data.thumbnail} channelImg={data.channelImg} uploadOn={data.uploadOn} />
    </div>
  )
}
