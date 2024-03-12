import { useEffect, useState } from "react"
import "./filters.css"
import Button from "../button/button"
import Checkbox, { DataGenres } from "../checkbox/checkbox"
import Pagination from "../pagination/pagination"
import Select from "../select/select-film"
import { OptionsFilm, OptionsFilmYear } from '../select/data/options';
import { getGenresList } from "../../api/request-genre";

let defaultGenres: DataGenres[] = [];

const SELECT_DEFAULT = {
    OPTION: 'popular',
    YEAR: '2007',
  };

export interface SelectOptionsProprepty {
    selectOptions: string;
    selectYear: string;
}

export default function Filters() {
    const [genres, setGenres] = useState<DataGenres[]>([]);
    const [selectedOption, setSelectedOption] = useState<SelectOptionsProprepty>({
        selectOptions: SELECT_DEFAULT.OPTION,
        selectYear: SELECT_DEFAULT.YEAR
    });
    
    useEffect(() => {
        dataGenresFetching();
    }, []);

    async function dataGenresFetching() {
        const data = await getGenresList();
        if(data){
            defaultGenres = data;
        }
        setGenres(data.map((genre: DataGenres) => ({ 
            ...genre, 
            checked: false
        })));
    }

    function handleFiltersReset() {
        setGenres(defaultGenres);
        setSelectedOption({
            selectOptions: SELECT_DEFAULT.OPTION,
            selectYear: SELECT_DEFAULT.YEAR
        })
    }
    
    return(
        <>
            <div className="filters">
                <div className="filters__wrapper-top">
                    <h1 className="filter__title">Фильтры</h1>
                    <Button buttonName={"x"} onClick={handleFiltersReset}/>
                </div>
                <div className="filters__select-film">
                    <Select
                        title="Cортировать по" 
                        options={OptionsFilm}
                        selectedOption={selectedOption.selectOptions}
                        selectedProperty={"selectOptions"}
                        selectOptionDefault={selectedOption}
                        setSelect={setSelectedOption}/>
                    
                    <Select
                        title="Год релиза"
                        options={OptionsFilmYear}
                        selectedOption={selectedOption.selectYear}
                        selectedProperty={"selectYear"}
                        selectOptionDefault={selectedOption}
                        setSelect={setSelectedOption}/>
                </div>               
                <div className="filters__genre">
                    <h1 className="filter__title">Жанры</h1>
                    <Checkbox genres={genres} setGenresCheckbox={setGenres}/>
                </div>
                <Pagination/>
            </div>
        </>
    )
}