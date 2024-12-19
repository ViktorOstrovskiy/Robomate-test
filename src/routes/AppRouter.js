import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import LoginPage from '../pages/Login/LoginPage';
import ItemsPage from '../pages/Items/ItemsPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    if (!isLoggedIn) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return children;
};
const AppRouter = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/items", element: _jsx(ProtectedRoute, { children: _jsx(ItemsPage, {}) }) }), _jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/items", replace: true }) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }));
};
export default AppRouter;
