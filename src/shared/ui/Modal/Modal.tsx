import {FC, ReactNode} from "react";
import {Portal} from "src/shared/ui/Portal";
import {Button} from "src/shared/ui/Button";
import {Icon} from "src/shared/ui/Icon";
import CloseIcon from 'src/shared/assets/icons/close.svg';

import cl from './Modal.module.scss';


interface ModalProps {
    title: string;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({
    title,
    onClose,
    children
}) => {
    return (
        <Portal>
            <div
                className={cl.background}
                onClick={onClose}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={cl.modal}
                >
                    <div className={cl.header}>
                        <h3 className={cl.title}>
                            {title}
                        </h3>
                        <div className={cl.close}>
                            <Button
                                btnType='transparent'
                                onClick={onClose}
                            >
                                <Icon
                                    size='small'
                                    src={CloseIcon}
                                />
                            </Button>
                        </div>
                    </div>
                    <div className={cl.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
