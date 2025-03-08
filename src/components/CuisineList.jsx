import { CUISINES } from "../recipes";
import { IoIosAddCircle } from "react-icons/io";

export default function CuisineList({ onSelect, selectedCuisine, showAdd }) {

    const customStyles = '';
    const savedStyles = '';

    return (
        <div className="flex mt-2 justify-center flex-wrap">
            <ul className="flex gap-4 items-center align-middle flex-wrap">
                {CUISINES.map(cuisine =>
                    <li key={cuisine}>
                        <button onClick={() => onSelect(cuisine)}
                            className={`
                                border px-1 rounded-sm hover:border-2 shadow-2xl
                                ${cuisine === 'Custom' && 'bg-amber-400 hover:bg-amber-500'}
                                ${selectedCuisine === cuisine && 'border-2 font-semibold'}
                                `}>
                            {cuisine}
                        </button></li>)}
                <div className="flex">
                    <li><button onClick={showAdd}><IoIosAddCircle className="mt-1 text-3xl text-amber-400 hover:text-amber-500" /></button></li>
                </div>

            </ul>
        </div>
    );
}

