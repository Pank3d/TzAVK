"use client"

import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getPostsList } from '../api/api'
import { postInterProps } from '@/fsd/Shared/type/types'
import PickLimit from '../model/PickLimit'
import { Skeleton } from '@mantine/core'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import FormPost from './FormPost/FormPost'


const PostList = () => {
    const [page, setPage] = useState(1)
    const result = useQuery({
        queryKey: ['posts', { _page: page }],
        queryFn: () => getPostsList({ _limit: 20, _page: page })
    })
    const lastId = result && result.data?.[result.data.length - 1]?.id
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <section >
            <div className='flex  gap-1 mb-[40px] justify-between items-center'>
                <div>
                    <p className='text-[40px]'>Список постов </p>
                    <p className='text-[20px]'> Страница номер {page}</p>
                </div>
                <Button onClick={open}>Новый пост</Button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-[10px] h-[70vh] overflow-y-auto">
                {result.data?.map((el: postInterProps) => (

                    <div key={el.id} className='flex gap-2'>
                        <Skeleton visible={result.isFetching}>
                            <Link href={`${el.id}`}>
                                <p className='text-[20px]'>{`${el.id})`}</p>
                                <p className='text-[20px]'>{el.title}</p>
                            </Link>
                        </Skeleton>
                    </div>
                ))}

            </div>
            <div className="flex gap-5 w-full justify-center mt-[40px]">
                <button className="text-[25px] text-[#fff] bg-[#000] p-3 rounded-lg disabled:cursor-not-allowed" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                <button className="text-[25px] text-[#fff] bg-[#000] p-3 rounded-lg disabled:cursor-not-allowed" disabled={lastId >= 100} onClick={() => setPage(page + 1)}>Next</button>
            </div>
            <Modal opened={opened} onClose={close} title="Новый пост" centered>
                <FormPost onClick={close}/>
            </Modal>
        </section>
    )
}

export default PostList