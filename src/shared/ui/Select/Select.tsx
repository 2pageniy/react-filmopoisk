import {FC, SelectHTMLAttributes} from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {

}

export const Select: FC<SelectProps> = ({

    ...props
}) => {
    return (
        <select
            {...props}
            value={'placeholder'}
        >
            <option value={'value 1'}>value 1</option>
            <option value={'value 2'}>value 2</option>
            <option value={'value 3'}>value 3</option>
        </select>
    );
};
