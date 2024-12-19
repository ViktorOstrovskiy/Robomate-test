import React from 'react'
import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout } from '../../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <img src={logo} alt="robomate logo" style={{ width: '100px', marginRight: '16px' }} />
                </Box>
                {isLoggedIn && (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header
