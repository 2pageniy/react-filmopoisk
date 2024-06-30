'use client';

import {FC, MouseEvent, useState} from 'react';
import classNames from 'classnames';
import SelectUpIcon from 'src/shared/assets/icons/select-up.svg'
import SelectDownIcon from 'src/shared/assets/icons/select-down.svg'
import {Icon} from "src/shared/ui/Icon";

import cl from './Select.module.scss';

interface OptionsList {
    value: string;
    key: string;
}

interface SelectProps {
    initialSelected?: string;
    placeholder?: string;
    optionsList: OptionsList[];
    onSelect: (value: string) => void;
    label?: string;
    name?: string;
    cls?: string;
}

export const Select: FC<SelectProps> = ({
    initialSelected = '',
    placeholder = '',
    optionsList = [],
    onSelect,
    label,
    name,
    cls
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(initialSelected);

    const selectValue = (e: MouseEvent<HTMLLIElement>, value: string, name: string) => {
        e.stopPropagation();
        setSelectedValue(name);
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={classNames(cl['custom-select'], cls, isOpen && cl.active)}
        >
            {label && (
                <label className={cl.label}>
                    {label}
                </label>
            )}
            <button
                className={cl['select-button']}
                role='combobox'
                aria-labelledby='select button'
                aria-haspopup='listbox'
                aria-expanded='false'
                aria-controls='select-dropdown'
            >
                {selectedValue ? (
                    <span className={cl['selected-value']}>{selectedValue}</span>
                ) : (
                    <span className={classNames(cl['selected-value'], cl.placeholder)}>{placeholder}</span>
                )}

                <Icon
                    src={isOpen ? SelectUpIcon : SelectDownIcon}
                />
            </button>
            <ul className={cl['select-dropdown']} role='listbox' id='select-dropdown'>
                {optionsList.map(({value, key}) => (
                    <li
                        role='option'
                        onClick={(e) => {
                            selectValue(e, value, key);
                        }}
                        key={key}
                    >
                        <input type='radio' id={`${value}-${name}`} name={name} />
                        <label htmlFor={`${value}-${name}`}>{key}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
