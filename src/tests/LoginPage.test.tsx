import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'

test('shows error message if email is invalid', async () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        </Provider>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: /login/i })

    await userEvent.type(emailInput, 'invalid-email')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.click(loginButton)

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
})
