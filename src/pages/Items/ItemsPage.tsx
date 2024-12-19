import React, { useState } from 'react'
import { Box, Button, Typography, Paper } from '@mui/material'
import ItemsList from './ItemsList'
import ItemFormDialog from './ItemFormDialog'
import Layout from '../../components/common/Layout'

interface ItemFormData {
    id?: string
    name: string
}

const ItemsPage: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [editingItem, setEditingItem] = useState<ItemFormData | null>(null)

    const handleAdd = () => {
        setEditingItem({ name: '' })
        setOpen(true)
    }

    const handleEdit = (id: string, name: string) => {
        setEditingItem({ id, name })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setEditingItem(null)
    }

    return (
        <Layout>
            <Box display="flex" alignItems='center' justifyContent="space-between" mb={2}>
                <Typography variant="h4" gutterBottom>Items</Typography>
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Add Item
                </Button>
            </Box>
            <Paper>
                <ItemsList onEdit={handleEdit} />
            </Paper>
            <ItemFormDialog open={open} onClose={handleClose} itemData={editingItem} />
        </Layout>
    )
}

export default ItemsPage
