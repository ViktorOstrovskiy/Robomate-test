import React from 'react';
interface ItemFormDialogProps {
    open: boolean;
    onClose: () => void;
    itemData: {
        id?: string;
        name: string;
    } | null;
}
declare const ItemFormDialog: React.FC<ItemFormDialogProps>;
export default ItemFormDialog;
