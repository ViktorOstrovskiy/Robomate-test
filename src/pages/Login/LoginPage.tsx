import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Navigate } from 'react-router-dom'
import { Typography, Paper } from '@mui/material'
import LoginForm from './LoginForm'
import Layout from '../../components/common/Layout'

const LoginPage: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)

    if (isLoggedIn) {
        return <Navigate to="/items" replace />
    }

    return (
        <Layout>
            <Paper sx={{ p:4, maxWidth:400, margin:'0 auto', mt:8 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to robomate
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Please sign in to access your items.
                </Typography>
                <LoginForm />
            </Paper>
        </Layout>
    )
}

export default LoginPage
