import {FilmDetails} from "src/features/FilmDetails/ui/FilmDetails";
import {FC} from "react";

interface FilmDetailsPageProps {
    id: string;
}

export const FilmDetailsPage: FC<FilmDetailsPageProps> = ({
    id
}) => {
    return (
        <main>
            <FilmDetails
                id={id}
            />
        </main>
    );
};

export default FilmDetailsPage;