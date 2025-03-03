import { useState } from "react";
import { CUISINES } from "../recipes";

export default function CuisineList({ onSelect, selectedCuisine }) {

    return (
        <div className="flex mt-2 justify-center flex-wrap">
            <ul className="flex gap-4">
                {CUISINES.map(cuisine =>
                    <li key={cuisine}><button onClick={() => onSelect(cuisine)} className={selectedCuisine === cuisine ? 'px-1 rounded-sm border-2' : 'border px-1 rounded-sm hover:border-2'}>{cuisine}
                    </button></li>)}
            </ul>
        </div>
    );
}