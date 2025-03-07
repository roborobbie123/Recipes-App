

export default function CustomDish({ onAdd, addName, addTime, addIngredient, addStep, updateIngredients, updateSteps, customDish }) {
  
    return (
        <div className="flex flex-col items-center mt-10">
            <div className="flex flex-col text-left gap-3">
                <h1 className="font-semibold">Custom Recipe</h1>
                <label>Dish Name: <input onChange={event => addName(event.target.value)} value={customDish.dish} type="text" className="bg-amber-100" /></label>
                <label>Time: <input onChange={event => addTime(event.target.value)} type="text" value={customDish.time} className="bg-amber-100" /></label>

                <h2>Ingredients:</h2>
                {Array.from(Array(customDish.ingredientCount)).map((value, index) => {
                    return <input key={index} onChange={(event) => updateIngredients(index, event.target.value)} className="bg-amber-100" type="text"/>
                })}
                <button onClick={addIngredient} className="border bg-amber-300 px-1 rounded-sm hover:border-2 shadow-2xl">+ ingredient</button>
                
                <h2>Steps:</h2>
                {Array.from(Array(customDish.stepsCount)).map((value, index) => {
                    return <input key={index} onChange={(event) => updateSteps(index, event.target.value)} className="bg-amber-100" type="text"/>
                })}
                <button onClick={addStep} className="border bg-amber-300 px-1 rounded-sm hover:border-2 shadow-2xl">+ step</button>

                <button className='border px-1 rounded-sm hover:border-2 shadow-2xl' onClick={() => onAdd(customDish.time, customDish.dish, customDish.ingredients, customDish.steps)}>Save</button>
            </div>
        </div>
    );
}