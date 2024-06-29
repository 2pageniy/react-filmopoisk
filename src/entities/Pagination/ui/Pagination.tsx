import {FC, useCallback} from "react";
import {Button} from "src/shared/ui/Button";
import {Icon} from "src/shared/ui/Icon";
import ArrowLeftIcon from 'src/shared/assets/icons/arrow-left.svg';
import ArrowRightIcon from 'src/shared/assets/icons/arrow-right.svg';

import cl from './Pagination.module.scss';

interface PaginationProps {
    setPage: (page: number) => void;
    maxPage: number;
    page: number;
}

export const Pagination: FC<PaginationProps> = ({
    setPage,
    page,
    maxPage
}) => {
    const onNextPage = useCallback(() => {
        if (page !== maxPage) {
            setPage(page + 1);
        }
    }, [setPage, page, maxPage]);

    const onPrevPage = useCallback(() => {
        if (page !== 1) {
            setPage(page - 1);
        }
    }, [setPage, page]);

    return (
        <div className={cl.pagination}>
            <Button
                cls={cl['arrow-btn']}
                btnType='transparent'
                onClick={onPrevPage}
                disabled={page === 1}
            >
                <Icon src={ArrowLeftIcon} />
            </Button>
            {page}
            <Button
                cls={cl['arrow-btn']}
                btnType='transparent'
                onClick={onNextPage}
                disabled={page === maxPage}
            >
                <Icon src={ArrowRightIcon} />
            </Button>
        </div>
    );
};
