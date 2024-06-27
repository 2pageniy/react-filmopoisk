import {FC, useCallback, useState} from 'react';
import {Input} from 'src/shared/ui/Input';
import {Icon} from 'src/shared/ui/Icon';
import SearchIcon from 'src/shared/assets/icons/search.svg'
import CloseIcon from 'src/shared/assets/icons/close.svg'

import cl from './SearchInput.module.scss';

interface SearchInputProps {
    onSearch: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
    onSearch
}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((value: string) => {
        onSearch(value);
        setValue(value);
    }, [onSearch]);

    return (
        <div className={cl.wrapper}>
            <Icon
                cls={cl['search-icon']}
                src={SearchIcon}
            />
            <Input
                cls={cl.input}
                onChange={onChange}
                value={value}
            />
            {value.length !== 0 && (
                <Icon
                    cls={cl['close-icon']}
                    src={CloseIcon}
                />
            )}
        </div>
    );
};
