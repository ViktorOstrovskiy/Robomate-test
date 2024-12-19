import React from 'react'
import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter } from 'react-router-dom'
import ItemsPage from '../pages/Items/ItemsPage'
import { login } from '../features/user/userSlice'

describe('ItemsPage', () => {
    beforeEach(() => {
        store.dispatch(login('test@test.com'))
    })

    test('renders the items and Add Item button', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ItemsPage />
                </BrowserRouter>
            </Provider>
        )

        expect(screen.getByText('Item 1')).toBeInTheDocument()
        expect(screen.getByText('Item 2')).toBeInTheDocument()

        const addButton = screen.getByRole('button', { name: /add item/i })
        expect(addButton).toBeInTheDocument()
    })

    test('opens dialog on "Add Item" click and adds a new item', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ItemsPage />
                </BrowserRouter>
            </Provider>
        )

        const addButton = screen.getByRole('button', { name: /add item/i })
        await userEvent.click(addButton)

        const dialog = screen.getByRole('dialog')
        expect(dialog).toBeInTheDocument()

        const nameInput = within(dialog).getByLabelText(/name/i)
        await userEvent.type(nameInput, 'Item 3')

        const submitButton = within(dialog).getByRole('button', { name: /add/i })
        await userEvent.click(submitButton)

        expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    test('opens dialog on "Edit" button click and updates an existing item', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ItemsPage />
                </BrowserRouter>
            </Provider>
        )

        const editButton = screen.getAllByRole('button', { name: /edit/i })[0]
        await userEvent.click(editButton)

        const dialog = screen.getByRole('dialog')
        expect(dialog).toBeInTheDocument()

        const nameInput = within(dialog).getByLabelText(/name/i)

        await userEvent.clear(nameInput)
        await userEvent.type(nameInput, 'Item 1 Updated')

        const saveButton = within(dialog).getByRole('button', { name: /save/i })
        await userEvent.click(saveButton)

        expect(screen.getByText('Item 1 Updated')).toBeInTheDocument()
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
    })

    test('can cancel the dialog without changes', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ItemsPage />
                </BrowserRouter>
            </Provider>
        )

        const addButton = screen.getByRole('button', { name: /add item/i })
        await userEvent.click(addButton)

        const dialog = screen.getByRole('dialog')
        expect(dialog).toBeInTheDocument()

        const cancelButton = within(dialog).getByRole('button', { name: /cancel/i })
        await userEvent.click(cancelButton)

        await waitFor(() => {
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
        })
    })
})
