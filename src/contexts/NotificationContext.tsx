import { createContext, useState } from "react";

interface NotificationContextType {
    message: string | null;
    showNotification: (message: string) => void;
    hideNotification: () => void;
}

export const NotificationContext = createContext<NotificationContextType|undefined>(undefined);

export const Notificationprovider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [message, setMessage] = useState<string|null>(null);

    const hideNotification = () => {
        setMessage(null);
    }

    const showNotification = (message: string) => {
        setMessage(message);
        setTimeout(() => {
            hideNotification();
        }, 3000);
    }

    return (
        <NotificationContext.Provider value={{ message, showNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}