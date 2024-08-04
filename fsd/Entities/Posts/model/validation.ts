import { z } from "zod";

export const postValidation = z.object({
    title:z.string({required_error:"Заголовок обязателен", invalid_type_error:"Заголовок должен быть строкой"}),
    body:z.string({required_error:"Тело обязательно", invalid_type_error:"Тело должно быть строкой"}),
})