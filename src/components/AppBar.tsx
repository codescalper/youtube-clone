import React from 'react'
import SearchBar from './SearchBar'

interface Props {
    searchQuery: string;
    onSearch: (query: string) => void;
}

function AppBar({ searchQuery, onSearch }: Props) {
    return (
        <div className='flex justify-between p-5'>
            <div className='flex items-center ' >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 cursor-pointer"
                    fill="currentColor"
                    style={{ color: '#ff0000' }}
                    viewBox="0 0 24 24">
                    <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <p className='pl-5 font-bold cursor-pointer'>Youtube </p>
            </div>
            <div>
                <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
            </div>
            <div className='font-medium cursor-pointer'>Sign in </div>

        </div>
    )
}

export default AppBar