import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import LoginPage from '../pages/Login/LoginPage'
import ItemsPage from '../pages/Items/ItemsPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }
    return children
}

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/items"
                element={
                    <ProtectedRoute>
                        <ItemsPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/" element={<Navigate to="/items" replace />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRouter
