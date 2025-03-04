import { CUISINES } from "../recipes";
import { IoIosAddCircle } from "react-icons/io";

export default function CuisineList({ onSelect, selectedCuisine, showAdd }) {

    return (
        <div className="flex mt-2 justify-center flex-wrap">
            <ul className="flex gap-4 items-center align-middle">
                {CUISINES.map(cuisine =>
                    <li key={cuisine}><button onClick={() =>
                        onSelect(cuisine)} className={selectedCuisine === cuisine ? 'px-1 rounded-sm border-2 font-semibold shadow-2xl' : 'border px-1 rounded-sm hover:border-2 shadow-2xl'}>
                        {cuisine}
                    </button></li>)}
                    <li><button onClick={showAdd}><IoIosAddCircle className="text-3xl text-amber-400 hover:text-amber-500"/></button></li>
            </ul>
        </div>
    );
}