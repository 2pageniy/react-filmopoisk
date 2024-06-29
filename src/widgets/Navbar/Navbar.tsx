import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {Button} from "src/shared/ui/Button";
import {Icon} from "src/shared/ui/Icon";
import PersonIcon from 'src/shared/assets/icons/person.svg';
import {useAppDispatch} from "src/app/providers/store";
import {AuthModal, getIsAuth, loginActions} from "src/features/Auth";

import cl from './Navbar.module.scss';

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getIsAuth);

    const onLogout = useCallback(() => {
        dispatch(loginActions.logout());
    }, [dispatch]);

    useEffect(() => {
        dispatch(loginActions.init());
    }, [dispatch]);

    return (
        <nav
            className={cl.navbar}
        >
            <h1
                className={cl.header}
            >
                Фильмопоиск
            </h1>
            <div
                className={cl.login}
            >
                {isAuth ? (
                    <>
                        <div className={cl.person}>
                            <Icon
                                src={PersonIcon}
                                size='xlarge'
                            />
                        </div>

                        <Button
                            btnType='clear'
                            onClick={onLogout}
                        >
                            Выйти
                        </Button>
                    </>
                ) : (
                    <AuthModal />
                )}
            </div>
        </nav>
    );
};
