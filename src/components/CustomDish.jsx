import { useRef, useState } from "react";

export default function CustomDish({ onAdd, ...props }) {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);

    function updateIngredient() {

    }

    function addIngredientField() {
        setIngredients([...ingredients, '']);
    }

    function updateSteps() {

    }

    function addStepField() {
        setSteps([...steps, '']);
    }

    function onDelete(type, index) {
        if (type === 'ingredient') {
            setIngredients(ingredients.filter((_, i) => i !== index));
        }
        if (type === 'step') {
            setSteps(steps.filter((_, i) => i !== index));
        }
        

    }

    const timeRef = useRef();
    const dishRef = useRef();
 

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
                
                {ingredients.map((ingredient, index) => (
                    <label key={index}><input key={index} value={ingredient} className="bg-amber-100" /><button onClick={() => onDelete('ingredient', index)} className="hover:text-blue-400 ml-3">Delete</button></label>
                ))}
                <button onClick={addIngredientField} className="border bg-amber-300 px-1 rounded-sm hover:border-2 shadow-2xl">+ ingredient</button>
                
                <h2>Steps:</h2>
                    {steps.map((step, index) => (
                        <label key={index}><input key={index} value={step} className="bg-amber-100" /><button onClick={() => onDelete('step', index)} className="hover:text-blue-400 ml-3">Delete</button></label>
                    ))}
                <button onClick={addStepField} className="border bg-amber-300 px-1 rounded-sm hover:border-2 shadow-2xl">+ step</button>
                <button className='border px-1 rounded-sm hover:border-2 shadow-2xl'>Save</button>
            </div>
        </div>
    );



}