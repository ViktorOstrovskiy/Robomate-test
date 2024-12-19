import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
const App = () => {
    return (_jsx(BrowserRouter, { children: _jsx(AppRouter, {}) }));
};
export default App;
