'use client';

import LoaderIcon from "src/shared/assets/icons/loader.svg";
import {Icon} from "src/shared/ui/Icon";

import cl from './Loader.module.scss';

export const Loader = () => {
    return (
        <Icon
            src={LoaderIcon}
            size='xlarge'
            cls={cl.loader}
        />
    );
};
