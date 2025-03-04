import { useRef, useState } from "react";

export default function CustomDish({ onAdd, ...props }) {
    const [ingredientFields, setIngredientFields] = useState([]);

    function addIngredientField() {
        setIngredientFields([...ingredientFields, '']);
    }

    const timeRef = useRef();
    const dishRef = useRef();
    const ingredientsRef = useRef();
    const stepsRef = useRef();

    const ingredientsArr = [];
    const stepsArr = [];



    function addNewDish(dish, ingredients, steps) {
        const newDish = {
            link: '',
            img: '',
            time: timeRef.current.value,
            dish: dishRef.current.value,
            ingredients: ingredients,
            steps: steps
        }

        onAdd(newDish);
    }

    return (
        <div {...props} className="flex flex-col items-center mt-10">
            <div className="flex flex-col text-left gap-3">
                <h1 className="font-semibold">Custom Recipe</h1>
                <label>Dish Name: <input ref={dishRef} type="text" className="bg-amber-100" /></label>
                <label>Time: <input ref={timeRef} type="text" className="bg-amber-100" /></label>

                <h2>Ingredients:</h2>
                <label>Ingredients: <input ref={ingredientsRef} type="text" className="bg-amber-100" /></label>

                <label>Steps: <input ref={stepsRef} type="text" className="bg-amber-100" /></label>
                <button>Save</button>
            </div>
        </div>
    );



}