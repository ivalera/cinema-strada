import '../../components/checkbox/checkbox.css'

export type DataGenres = {
  id: number;
  name: string;
  checked: boolean;
};

interface DataGenresProps {
  genres: DataGenres[];
  setGenresCheckbox: React.Dispatch<React.SetStateAction<DataGenres[]>>; 
}

export default function Checkbox(props: DataGenresProps) {
    const { genres, setGenresCheckbox } = props;

    function handleCheckboxChange(name: string) {
      const updatedCheckboxes = genres.map(genre => {
        if (genre.name === name) {
          return { 
            ...genre, 
            checked: !genre.checked 
          };
        }
        return genre;
      });
      setGenresCheckbox(updatedCheckboxes);
  }

    return (
        <div className="filters__genre-wrapper">
          <ul className="filters__genre-list">
              {genres.map((genre) => (
                <li key={genre.id}>
                <label className="filters__genre-element">
                    <input
                      className='filters__genre-checkbox'
                      type="checkbox"
                      checked={genre.checked}
                      onChange={(_) => handleCheckboxChange(genre.name)}
                    />
                    {genre.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
    )
}