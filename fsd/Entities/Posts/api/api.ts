import { getPostInterProps } from "@/fsd/Shared/type/types"
import axios from "axios"
import { headers } from "next/headers";


const baseApiPost = process.env.NEXT_PUBLIC_BASE_POST;

export const getPostsList = async ({ _page, _limit}:getPostInterProps) => {
    try {
        const response  = await axios.get(`${baseApiPost}/posts`, {
            params: {
                _page: _page,
                _limit: _limit
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getPostById = async (id:number) => {
    try {
        const response  = await axios.get(`${baseApiPost}/posts/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (title: string, body: string) => {
    try {
        const response = await axios.post(
            `${baseApiPost}/posts`,
            {
                title: title,
                body: body,
                userId: 1,
            },
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
