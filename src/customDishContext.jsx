import { createContext, useState, useEffect } from "react";

export const CustomDishContext = createContext();

export function CustomDishProvider({ children }) {
    const [selectedCuisine, setSelectedCuisine] = useState('Saved');
    const [showAdd, setShowAdd] = useState(false);
    const [newDishes, setNewDishes] = useState(JSON.parse(localStorage.getItem('newDishes')) || []);

    const [customDish, setCustomDish] = useState({
        link: '',
        img: '',
        time: '',
        dish: '',
        ingredients: [],
        steps: [],
        stepsCount: 0,
        ingredientCount: 0
    });

    useEffect(() => {
        localStorage.setItem('newDishes', JSON.stringify(newDishes))
    }, [newDishes]);

    console.log(customDish);

    useEffect(() => {
        console.log("New dishes updated:", newDishes);
    }, [newDishes]);


    function handleSelectCuisine(cuisine) {
        setShowAdd(false);
        setSelectedCuisine(cuisine);
    }

    function handleShowAddDish() {
        setShowAdd(prevState => !prevState);
        setSelectedCuisine('Custom');
    }

    function handleAddDish(time, dish, ingredients, steps) {
        const newDish = {
            link: '',
            img: '',
            time: time,
            dish: dish,
            ingredients: ingredients,
            steps: steps
        }

        setNewDishes(prevDishes => {
            const updatedDishes = [newDish, ...prevDishes];
            console.log(updatedDishes);
            return updatedDishes;
        })

        setCustomDish({
            link: '',
            img: '',
            time: '',
            dish: '',
            ingredients: [],
            steps: [],
            stepsCount: 0,
            ingredientCount: 0
        })
        console.log('new dishes: ' + newDishes);
    };

    function handleDeleteDish(dish) {
        setNewDishes(prevDishes => (
            prevDishes.filter(recipe => recipe.dish !== dish.dish)
        ))
    }

    function handleAddName(newName) {
        setCustomDish(prevState => ({
            ...prevState,
            dish: newName
        }))
    }

    function handleAddTime(newTime) {
        setCustomDish(prevState => ({
            ...prevState,
            time: newTime
        }))
    };

    function addIngredientField() {
        setCustomDish(prevState => ({
            ...prevState,
            ingredients: [...prevState.ingredients, ''],
            ingredientCount: prevState.ingredientCount + 1
        }))
    }

    function addStepField() {
        setCustomDish(prevState => ({
            ...prevState,
            steps: [...prevState.steps, ''],
            stepsCount: prevState.stepsCount + 1
        }))
    }

    function updateIngredients(index, value) {
        setCustomDish(prevState => {
            const newIngredients = [...prevState.ingredients];
            newIngredients[index] = value;
            return {
                ...prevState,
                ingredients: newIngredients
            }
        })
        console.log('new dishes: ' + newDishes);
    }

    function updateSteps(index, value) {
        setCustomDish(prevState => {
            const newSteps = [...prevState.steps];
            newSteps[index] = value;
            return {
                ...prevState,
                steps: newSteps
            }
        })
        console.log('new dishes: ' + newDishes);
    }

    return (
        <CustomDishContext.Provider value={{
            selectedCuisine,
            showAdd,
            newDishes,
            customDish,
            handleSelectCuisine,
            handleShowAddDish,
            handleAddDish,
            handleDeleteDish,
            handleAddName,
            handleAddTime,
            addIngredientField,
            addStepField,
            updateIngredients,
            updateSteps
        }
        }>
            {children}
        </CustomDishContext.Provider >
    )

}