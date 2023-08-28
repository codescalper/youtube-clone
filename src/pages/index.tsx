import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import AppBar from '@/components/AppBar'
import data from '@/components/data'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <AppBar />
      <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 '>
        {
          data.map(el => <VideoCard
            key={Math.random}
            title={el.title}
            views={el.views}
            thumbnail={el.thumbnail}
            channelImg={el.channelImg}
            uploadOn={el.uploadOn}
            channel={el.channel}
          >

          </VideoCard>)
        }
      </div >
    </>
  )
}
