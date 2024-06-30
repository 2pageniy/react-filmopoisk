'use client';

import {FC, ReactNode} from "react";
import classNames from "classnames";
import {Portal} from "src/shared/ui/Portal";
import {Button} from "src/shared/ui/Button";
import {Icon} from "src/shared/ui/Icon";
import CloseIcon from 'src/shared/assets/icons/close.svg';
import {Card} from "src/shared/ui/Card";

import cl from './Modal.module.scss';

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
                <Card
                    cls={classNames(cl.modal, cls)}
                    title={title}
                    controls={(
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
                    )}
                >
                    {children}
                </Card>
            </div>
        </Portal>
    );
};
