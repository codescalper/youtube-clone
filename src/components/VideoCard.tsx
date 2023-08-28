import React from 'react';

function VideoCard(props: any) {
    return (

        <div className='p-5 '>
            <img className='rounded-xl mt-3 cursor-pointer' src={props.thumbnail} alt="Thumbnail" />
            <div className='flex items-center cursor-pointer' >
                <img className='rounded-xl mr-3' src={props.channelImg} alt="Channel Img" />
                <div className='font-bold'>{props.title}</div>
            </div>
            <div className='text-gray-400 mt-2 ml-9 cursor-pointer'>{props.channel}</div>
            <div className='text-gray-400 ml-9 cursor-pointer'>{props.views}<span> • </span>{props.uploadOn}</div>
        </div>

    );
}

export default VideoCard;
