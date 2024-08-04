import React from 'react';
import { Formik, Field, Form, FieldProps, ErrorMessage } from 'formik';
import { Button, Input, Textarea } from '@mantine/core';
import { postValidation } from '../../model/validation';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useMutation } from '@tanstack/react-query';
import { createPost } from '../../api/api';
import { MyInput, MyTextarea } from '../inputs/Input';



const FormPost = ({onClick}:{onClick:() => void}) => {
    const mutation = useMutation({
        mutationFn: (values: { title: string; body: string }) => createPost(values.title, values.body),
        onSuccess: (data) => {
            reset()
        },
        onError: (error) => {
            console.error('Error posting data', error);
        },
    });

    const reset =  async() => {
        setTimeout(() => {
            onClick()
        }, 1000)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
                validationSchema={toFormikValidationSchema(postValidation)}
                onSubmit={(values) => {
                    mutation.mutate(values);
                }}
            >
                <Form className='flex flex-col justify-center items-center gap-[30px]'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Field className='w-[300px]' name="title" component={MyInput} placeholder="Заголовок" />
                        <ErrorMessage name="title" component="div" className='text-[red]' />
                        <Field className='w-[300px]' name="body" component={MyTextarea} placeholder="Тело" />
                        <ErrorMessage name="body" component="div" className='text-[red]' />
                    </div>
                    <Button type='submit' disabled={mutation.isPending}>
                        {mutation.isPending ? 'Создание...' : 'Создать'}
                    </Button>
                    {mutation.isError && <div className="text-[red]">Ошибка при отправке данных</div>}
                    {mutation.isSuccess && <div className="text-[green]">Данные успешно отправлены</div>}
                </Form>
            </Formik>
        </div>
    );
};

export default FormPost;
