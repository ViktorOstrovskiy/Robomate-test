import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '../../app/hooks'
import { addItem, updateItem } from '../../features/items/itemsSlice'

interface ItemFormDialogProps {
    open: boolean
    onClose: () => void
    itemData: { id?: string; name: string } | null
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
})

const ItemFormDialog: React.FC<ItemFormDialogProps> = ({ open, onClose, itemData }) => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: itemData?.name || '',
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            if (itemData?.id) {
                dispatch(updateItem({ id: itemData.id, name: values.name }))
            } else {
                dispatch(addItem({ name: values.name }))
            }
            onClose()
        },
    })

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>{itemData?.id ? 'Edit Item' : 'Add Item'}</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    margin="normal"
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => formik.handleSubmit()} variant="contained" color="primary">
                    {itemData?.id ? 'Save' : 'Add'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ItemFormDialog
