import {useParams} from "react-router-dom";
import {FilmDetails} from "src/features/FilmDetails/ui/FilmDetails.tsx";

const FilmDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <main>
                Не найдено
            </main>
        )
    }

    return (
        <main>
            <FilmDetails
                id={id}
            />

        </main>
    );
};

export default FilmDetailsPage;