import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import AppBar from '@/components/AppBar'
import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'
import data from '@/components/data'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <AppBar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <div className="p-5">

          <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 '>
            {data
              .filter(el => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(el => (
                <VideoCard
                  key={Math.random()}
                  title={el.title}
                  views={el.views}
                  thumbnail={el.thumbnail}
                  channelImg={el.channelImg}
                  uploadOn={el.uploadOn}
                  channel={el.channel}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
