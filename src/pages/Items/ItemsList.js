import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from '../../app/hooks';
import { List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
const ItemsList = ({ onEdit }) => {
    const items = useAppSelector((state) => state.items.list);
    return (_jsx(List, { style: { width: '100%' }, children: items.map((item, index) => (_jsxs("div", { children: [_jsx(ListItem, { secondaryAction: _jsx(IconButton, { edge: "end", "aria-label": "edit", onClick: () => onEdit(item.id, item.name), children: _jsx(EditIcon, {}) }), children: _jsx(ListItemText, { primary: item.name, secondary: `ID: ${item.id}` }) }), index < items.length - 1 && _jsx(Divider, { component: "li" })] }, item.id))) }));
};
export default ItemsList;
