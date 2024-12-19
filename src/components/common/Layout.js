import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container } from '@mui/material';
import Header from './Header';
const Layout = ({ children }) => {
    return (_jsxs(Box, { display: "flex", flexDirection: "column", minHeight: "100vh", children: [_jsx(Header, {}), _jsx(Container, { maxWidth: "md", sx: { py: 4 }, children: children })] }));
};
export default Layout;
