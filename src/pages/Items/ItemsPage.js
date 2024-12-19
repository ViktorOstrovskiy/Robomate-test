import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import ItemsList from './ItemsList';
import ItemFormDialog from './ItemFormDialog';
import Layout from '../../components/common/Layout';
const ItemsPage = () => {
    const [open, setOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const handleAdd = () => {
        setEditingItem({ name: '' });
        setOpen(true);
    };
    const handleEdit = (id, name) => {
        setEditingItem({ id, name });
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setEditingItem(null);
    };
    return (_jsxs(Layout, { children: [_jsxs(Box, { display: "flex", alignItems: 'center', justifyContent: "space-between", mb: 2, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Items" }), _jsx(Button, { variant: "contained", color: "primary", onClick: handleAdd, children: "Add Item" })] }), _jsx(Paper, { children: _jsx(ItemsList, { onEdit: handleEdit }) }), _jsx(ItemFormDialog, { open: open, onClose: handleClose, itemData: editingItem })] }));
};
export default ItemsPage;
