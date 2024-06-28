import {FC, useCallback, useState} from 'react';
import {Input} from 'src/shared/ui/Input';
import {Icon} from 'src/shared/ui/Icon';
import SearchIcon from 'src/shared/assets/icons/search.svg'
import CloseIcon from 'src/shared/assets/icons/clear.svg'

import cl from './SearchInput.module.scss';
import {Button} from "src/shared/ui/Button";

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
                <Button
                    cls={cl['btn-clear']}
                    btnType='transparent'
                    onClick={() => onChange('')}
                >
                    <Icon
                        src={CloseIcon}
                    />
                </Button>
            )}
        </div>
    );
};
