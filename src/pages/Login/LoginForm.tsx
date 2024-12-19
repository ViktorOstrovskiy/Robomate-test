import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField, Box } from '@mui/material'
import { useAppDispatch } from '../../app/hooks'
import { login } from '../../features/user/userSlice'

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
})

interface LoginFormValues {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch()

    const formik = useFormik<LoginFormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(login(values.email))
        },
    })

    return (
        <Box component="form" onSubmit={formik.handleSubmit} display="flex" flexDirection="column">
            <TextField
                margin="normal"
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                margin="normal"
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Login
            </Button>
        </Box>
    )
}

export default LoginForm
