import {FC} from "react";
import {Icon} from "src/shared/ui/Icon";
import StarIcon from 'src/shared/assets/icons/star.svg';
import StarFilledIcon from 'src/shared/assets/icons/star-filled.svg';
import StarFilledOrangeIcon from 'src/shared/assets/icons/star-filled-orange.svg';

import cl from './Rating.module.scss';
import classNames from "classnames";

interface RatingProps {
    rating: number;
    onFocus?: boolean;
    setFocus?: (value: boolean) => void;
    setRating?: (value: number) => void;
    onClick?: () => void;
    cls?: string;
}

export const Rating: FC<RatingProps> = ({
    rating,
    onFocus,
    setFocus = () => {},
    setRating = () => {},
    onClick,
    cls
}) => {
    return (
        <div
            className={classNames(cl.rating, cls)}
            onMouseEnter={() => {
                setFocus(true);
            }}
            onMouseLeave={() => setFocus(false)}
            onClick={onClick}
        >
            {new Array(5).fill(0).map((_, i) => {
                const isFilled = rating >= i + 1;
                return (
                    <div
                        className={cl.star}
                        key={i}
                        onMouseEnter={() => {
                            setRating(i + 1);
                        }}
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
