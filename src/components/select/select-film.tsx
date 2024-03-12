import './select-film.css'
import { SelectOptionsProprepty } from '../filters/filters';

export type OptionsFilmType = {
    id: number;
    value: string;
    label: string;
}

export type SelectFilmProps = {
    title: string;
    selectedOption: string;
    selectedProperty: string;
    options: OptionsFilmType[];
    selectOptionDefault: SelectOptionsProprepty;
    setSelect: React.Dispatch<React.SetStateAction<SelectOptionsProprepty>>;
}

export default function Select(props: SelectFilmProps) {
    const { title, selectedOption, options, selectedProperty, selectOptionDefault, setSelect} = props;

    function handleOnChange(
        event: React.ChangeEvent<HTMLSelectElement>,
        property: keyof SelectOptionsProprepty
      ) {
        const selectedElement = event.target.value;
        const updatedData = {
          ...selectOptionDefault,
          [property]: selectedElement,
        };
        setSelect(updatedData);
    }

    return(
        <div className='filters__select-wrapper'>
            <label className='filters__select-title'>
                {title}
                <select 
                    className='filters__select-option'
                    value={selectedOption} 
                    onChange={event => 
                        handleOnChange(event, selectedProperty as keyof SelectOptionsProprepty)}>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}