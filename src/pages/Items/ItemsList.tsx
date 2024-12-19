import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { List, ListItem, ListItemText, IconButton, Divider } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

interface ItemsListProps {
    onEdit: (id: string, name: string) => void
}

const ItemsList: React.FC<ItemsListProps> = ({ onEdit }) => {
    const items = useAppSelector((state) => state.items.list)

    return (
        <List style={{width: '100%'}}>
            {items.map((item, index) => (
                <div key={item.id}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(item.id, item.name)}>
                                <EditIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={item.name} secondary={`ID: ${item.id}`} />
                    </ListItem>
                    {index < items.length - 1 && <Divider component="li" />}
                </div>
            ))}
        </List>
    )
}

export default ItemsList
