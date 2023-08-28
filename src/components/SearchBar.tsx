import React from 'react'

interface Props {
    searchQuery: string;
    onSearch: (query: string) => void;
}


function SearchBar({ searchQuery, onSearch }: Props) {
    const handleSearchChange = (event: { target: { value: any; }; }) => {
        onSearch(event.target.value);
    };
    return (

        <>

            <div className="relative ">

                <input
                    type="search"
                    id="default-search"
                    className="block w-96 p-4 pl-10 text-white text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:border-slate-500 dark:bg-stone-950 dark:border-stone-700 "
                    placeholder="Search"
                    onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-black-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
            </div>
        </>


    )
}

export default SearchBar