import {useCallback, useState} from "react";
import {Button} from "src/shared/ui/Button";
import {AuthForm} from "../AuthForm/AuthForm.tsx";

export const AuthModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
            >
                Войти
            </Button>
            <AuthForm
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
};
