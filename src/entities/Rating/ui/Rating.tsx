import {FC} from "react";
import {Icon} from "src/shared/ui/Icon";
import StarIcon from 'src/shared/assets/icons/star.svg';
import StarFilledIcon from 'src/shared/assets/icons/star-filled.svg';
import StarFilledOrangeIcon from 'src/shared/assets/icons/star-filled-orange.svg';

import cl from './Rating.module.scss';
import classNames from "classnames";

interface RatingProps {
    rating: number;
    color: 'orange' | 'gray';
    onFocus: boolean;
}

export const Rating: FC<RatingProps> = ({
    rating = 4,
    onFocus,
}) => {
    return (
        <div
            className={cl.rating}
        >
            {new Array(5).fill(0).map((_, i) => {
                const isFilled = rating >= i + 1;
                return (
                    <div
                        className={cl.star}
                        key={i}
                    >
                        <Icon
                            src={isFilled ? (onFocus ? StarFilledIcon : StarFilledOrangeIcon) : StarIcon}
                            cls={cl.icon}
                        />
                        <p
                            className={classNames({[cl.disable]: !isFilled || onFocus})}
                        >
                            {i + 1}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
