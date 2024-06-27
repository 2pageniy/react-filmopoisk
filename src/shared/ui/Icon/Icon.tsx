import {memo} from 'react';
import classNames from 'classnames';

import cl from './Icon.module.scss';

interface IconProps {
    src: string;
    alt?: string;
    cls?: string;
}

export const Icon= memo(({
    src,
    alt = '',
    cls
}: IconProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cl.img, cls)}
        />
    );
});
