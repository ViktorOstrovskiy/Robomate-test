import React from 'react'
import { Box, Container } from '@mui/material'
import Header from './Header'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Container maxWidth="md" sx={{ py: 4 }}>
                {children}
            </Container>
        </Box>
    )
}

export default Layout
