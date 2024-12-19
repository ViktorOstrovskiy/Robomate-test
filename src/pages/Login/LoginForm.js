import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../features/user/userSlice';
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});
const LoginForm = () => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(login(values.email));
        },
    });
    return (_jsxs(Box, { component: "form", onSubmit: formik.handleSubmit, display: "flex", flexDirection: "column", children: [_jsx(TextField, { margin: "normal", fullWidth: true, id: "email", name: "email", label: "Email", value: formik.values.email, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email }), _jsx(TextField, { margin: "normal", fullWidth: true, id: "password", name: "password", label: "Password", type: "password", value: formik.values.password, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.password && Boolean(formik.errors.password), helperText: formik.touched.password && formik.errors.password }), _jsx(Button, { type: "submit", variant: "contained", color: "primary", sx: { mt: 2 }, children: "Login" })] }));
};
export default LoginForm;
