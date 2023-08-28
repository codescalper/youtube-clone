import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import AppBar from '@/components/AppBar'
import Sidebar from '@/components/Sidebar' // Import the Sidebar component
import data from '@/components/data'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <AppBar />
        <div className="p-5">
          <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 '>
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
          </div>
        </div>
      </div>
    </div>
  )
}
