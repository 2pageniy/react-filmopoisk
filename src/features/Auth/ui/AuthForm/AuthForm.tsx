import {FC, useCallback} from "react";
import {useSelector} from "react-redux";
import {Input} from "src/shared/ui/Input";
import {Button} from "src/shared/ui/Button";
import {Modal} from "src/shared/ui/Modal";
import {useAppDispatch} from "src/app/providers/store";
import {loginActions} from "../../modal/slices/loginSlice";
import {getLoginName} from "../../modal/selectors/getLoginName";
import {getLoginPassword} from "../../modal/selectors/getLoginPassword";
import {loginByUsername} from "../../modal/services/loginByUsername";
import {getIsAuth} from "../../modal/selectors/getIsAuth";

import cl from './AuthForm.module.scss';


interface AuthFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthForm: FC<AuthFormProps> = ({
    isOpen,
    onClose,
}) => {
    const dispatch = useAppDispatch();
    const name = useSelector(getLoginName);
    const password = useSelector(getLoginPassword);
    const isAuth = useSelector(getIsAuth);

    const onChangeName = useCallback((value: string) => {
        dispatch(loginActions.setName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onHandleClose = useCallback(() => {
        dispatch(loginActions.reset());
        onClose();
    }, [dispatch, onClose]);

    const onLogin = useCallback(() => {
        dispatch(loginByUsername());
        if (isAuth) {

            onClose();
        }
    }, [dispatch, onClose, isAuth]);

    return (
        <Modal
            title='Авторизация'
            onClose={onHandleClose}
            isOpen={isOpen}
        >
            <div className={cl.inputs}>
                <Input
                    label='Логин'
                    required
                    value={name}
                    onChange={onChangeName}
                    cls={cl.input}
                />
                <Input
                    label='Пароль'
                    required
                    value={password}
                    onChange={onChangePassword}
                    type='password'
                    cls={cl.input}
                />
            </div>
            <div className={cl.controls}>
                <Button
                    onClick={onLogin}
                    disabled={name.length === 0 || password.length === 0}
                >
                    Войти
                </Button>
                <Button
                    btnType='clear'
                    onClick={onClose}
                >
                    Отменить
                </Button>
            </div>
        </Modal>
    );
};
