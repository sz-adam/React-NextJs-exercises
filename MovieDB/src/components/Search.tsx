import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

type Props = {
    onSearch: (query: string) => void;
};

const Search = ({ onSearch }: Props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    return (
        <div className="md:w-full max-w-sm min-w-[200px]">
            <div className="relative">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search..."
                />
                <button
                    onClick={handleSearchClick}
                    className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    <CiSearch className="w-4 h-4 mr-2" />
                    Search
                </button>
            </div>
        </div>
    );
}

export default Search;
