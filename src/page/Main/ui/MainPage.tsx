import './Main.module.scss';
import {SearchInput} from 'src/features/SearchInput';
import {useDebounce} from 'src/shared/lib/hooks/useDebounce.tsx';

const MainPage = () => {

    const onSearch = useDebounce((value: string) => {
        console.log(value);
    }, 500)

    return (
        <main>
            <SearchInput
                onSearch={onSearch}
            />
        </main>
    );
};

export default MainPage;
