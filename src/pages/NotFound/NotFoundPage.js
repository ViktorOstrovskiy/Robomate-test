import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography } from '@mui/material';
const NotFoundPage = () => {
    return (_jsx(Box, { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", children: _jsx(Typography, { variant: "h3", children: "404 - Page not found" }) }));
};
export default NotFoundPage;
