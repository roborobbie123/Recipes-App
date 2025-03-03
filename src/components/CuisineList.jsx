const CUISINES = ["Italian", "Mexican", "Chinese", "Indian", "Thai", "Japanese", "Mediterranean", "American"];

export default function CuisineList({ onSelect }) {

    return (
        <div className="flex mt-2 justify-center">
            <ul className="flex gap-4">
                {CUISINES.map(cuisine => <li key={cuisine}><button onClick={() => onSelect(cuisine)} className="border px-1 rounded-sm hover:border-2">{cuisine}</button></li>)}
            </ul>
        </div>
    );
}