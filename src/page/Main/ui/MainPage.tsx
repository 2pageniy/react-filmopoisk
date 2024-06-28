import './Main.module.scss';
import {Modal} from "src/shared/ui/Modal";
import {Input} from "src/shared/ui/Input";

const MainPage = () => {

    // const onSearch = useDebounce((value: string) => {
    //     console.log(value);
    // }, 500)

    return (
        <main>
            <Modal
                title={'Авторизакцуитя'}
                onClose={() => {
                    console.log(1);
                }}
            >
                <Input
                    label={'Логин'}
                    required
                ></Input>
            </Modal>
        </main>
    );
};

export default MainPage;
