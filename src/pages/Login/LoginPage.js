import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from '../../app/hooks';
import { Navigate } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import LoginForm from './LoginForm';
import Layout from '../../components/common/Layout';
const LoginPage = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    if (isLoggedIn) {
        return _jsx(Navigate, { to: "/items", replace: true });
    }
    return (_jsx(Layout, { children: _jsxs(Paper, { sx: { p: 4, maxWidth: 400, margin: '0 auto', mt: 8 }, children: [_jsx(Typography, { variant: "h4", component: "h1", gutterBottom: true, children: "Welcome to robomate" }), _jsx(Typography, { variant: "body1", gutterBottom: true, children: "Please sign in to access your items." }), _jsx(LoginForm, {})] }) }));
};
export default LoginPage;
