import {FC, ReactNode} from "react";
import {Portal} from "src/shared/ui/Portal";
import {Button} from "src/shared/ui/Button";
import {Icon} from "src/shared/ui/Icon";
import CloseIcon from 'src/shared/assets/icons/close.svg';

import cl from './Modal.module.scss';
import classNames from "classnames";


interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    cls?: string;
}

export const Modal: FC<ModalProps> = ({
    title,
    isOpen,
    onClose,
    cls,
    children,
}) => {
    return isOpen && (
        <Portal>
            <div
                className={cl.background}
                onMouseDown={onClose}
            >
                <div
                    onMouseDown={(e) => {
                        e.stopPropagation();
                    }}
                    className={classNames(cl.modal, cls)}
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
