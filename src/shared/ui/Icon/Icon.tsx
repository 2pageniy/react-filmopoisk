import {memo} from 'react';
import classNames from 'classnames';

import cl from './Icon.module.scss';

interface IconProps {
    src: string;
    alt?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    cls?: string;
}

export const Icon= memo(({
    src,
    alt,
    size = 'medium',
    cls
}: IconProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cl.img, cl[size], cls)}
        />
    );
});
