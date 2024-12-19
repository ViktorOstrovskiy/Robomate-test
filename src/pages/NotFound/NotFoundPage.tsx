import React from 'react'
import { Box, Typography } from '@mui/material'

const NotFoundPage: React.FC = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
            <Typography variant="h3">404 - Page not found</Typography>
        </Box>
    )
}

export default NotFoundPage
