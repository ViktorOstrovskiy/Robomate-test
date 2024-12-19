import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    return (_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [_jsx(Box, { display: "flex", alignItems: "center", flexGrow: 1, children: _jsx("img", { src: logo, alt: "robomate logo", style: { width: '100px', marginRight: '16px' } }) }), isLoggedIn && (_jsx(Button, { color: "inherit", onClick: handleLogout, children: "Logout" }))] }) }));
};
export default Header;
