"use client"

import { getPostById } from '@/fsd/Entities/Posts/api/api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const PostPage = ({ id }: { id: number }) => {

    const result = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPostById(id)
    })


    return (
        <div className='p-[20px]'>
            <Link href={'/'}>
                <button className="text-[25px] text-[#fff] bg-[#000] p-3 rounded-lg ">{'<'}</button>
            </Link>
            <div className="justify-center items-center text-center ">
                <h1 className='text-[40px] text-center'>
                    Пост номер {id}
                </h1>
                <div className='flex justify-center items-center flex-col'>
                    {/* {<Image src="https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill" width={200} height={200} alt=''/>} */} {/* не работает с NextImage */}
                    <img src={`https://via.assets.so/furniture.png?id=${id}&q=95&w=360&h=360&fit=fill`} alt="" />
                    <p>{result.data?.title}</p>
                    <p>{result.data?.body}</p>
                </div>
            </div>
        </div>
    )
}

export default PostPage