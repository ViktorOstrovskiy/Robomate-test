import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../app/hooks';
import { addItem, updateItem } from '../../features/items/itemsSlice';
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
});
const ItemFormDialog = ({ open, onClose, itemData }) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            name: itemData?.name || '',
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            if (itemData?.id) {
                dispatch(updateItem({ id: itemData.id, name: values.name }));
            }
            else {
                dispatch(addItem({ name: values.name }));
            }
            onClose();
        },
    });
    return (_jsxs(Dialog, { open: open, onClose: onClose, fullWidth: true, children: [_jsx(DialogTitle, { children: itemData?.id ? 'Edit Item' : 'Add Item' }), _jsx(DialogContent, { children: _jsx(TextField, { fullWidth: true, margin: "normal", id: "name", name: "name", label: "Name", value: formik.values.name, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.name && Boolean(formik.errors.name), helperText: formik.touched.name && formik.errors.name }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onClose, children: "Cancel" }), _jsx(Button, { onClick: () => formik.handleSubmit(), variant: "contained", color: "primary", children: itemData?.id ? 'Save' : 'Add' })] })] }));
};
export default ItemFormDialog;
