import { useRef, useState } from "react";

let ingredientsArr = [];
let stepsArr = [];

export default function CustomDish({ onAdd, ...props }) {
    const [ingredientCount, setIngredientCount] = useState(0);
    const [stepCount, setStepCount] = useState(0);

    const timeRef = useRef();
    const dishRef = useRef();
   
    function addIngredientField() {
        setIngredientCount(prevIngredients => prevIngredients + 1);
    }

    function addStepField() {
        setStepCount(prevSteps => prevSteps + 1);
    }

    function updateIngredients(index, value) {
        ingredientsArr[index] = value;
        
    }

    function updateSteps(index, value) {
        stepsArr[index] = value;
    }

    function addNewDish(ingredients, steps, time, dish) {
        const newDish = {
            link: '',
            img: '',
            time: time,
            dish: dish,
            ingredients: ingredients,
            steps: steps
        }
        onAdd(newDish);

        ingredientsArr = [];
        stepsArr = [];
    }

    return (
        <div {...props} className="flex flex-col items-center mt-10">
            <div className="flex flex-col text-left gap-3">
                <h1 className="font-semibold">Custom Recipe</h1>
                <label>Dish Name: <input ref={dishRef} type="text" className="bg-amber-100" /></label>
                <label>Time: <input ref={timeRef} type="text" className="bg-amber-100" /></label>

                <h2>Ingredients:</h2>
                {Array.from(Array(ingredientCount)).map((value, index) => {
                    return <input key={value} onChange={(event) => updateIngredients(index, event.target.value)} className="bg-amber-100" type="text"/>
                })}
                <button onClick={addIngredientField} className="border bg-amber-300 px-1 rounded-sm hover:border-2 shadow-2xl">+ ingredient</button>
                
                <h2>Steps:</h2>
                {Array.from(Array(stepCount)).map((value, index) => {
                    return <input key={value} onChange={(event) => updateSteps(index, event.target.value)} className="bg-amber-100" type="text"/>
                })}
                <button onClick={addStepField} className="border bg-amber-300 px-1 rounded-sm hover:border-2 shadow-2xl">+ step</button>

                <button className='border px-1 rounded-sm hover:border-2 shadow-2xl' onClick={() => addNewDish(ingredientsArr, stepsArr, timeRef.current.value, dishRef.current.value)}>Save</button>
            </div>
        </div>
    );
}