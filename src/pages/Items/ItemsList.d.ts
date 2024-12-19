import React from 'react';
interface ItemsListProps {
    onEdit: (id: string, name: string) => void;
}
declare const ItemsList: React.FC<ItemsListProps>;
export default ItemsList;
