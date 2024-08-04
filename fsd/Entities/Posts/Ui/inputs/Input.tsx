import { Input, Textarea } from "@mantine/core";
import { FieldProps } from "formik";

export const MyInput: React.FC<FieldProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ field, form, ...props }) => (
    <Input {...field} {...props} />
);

export const MyTextarea: React.FC<FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ field, form, ...props }) => (
    <Textarea {...field} {...props} />
);

