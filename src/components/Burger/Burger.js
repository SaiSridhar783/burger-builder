import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //console.log([Array(props.ingredients[igKey])])
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient 
                key={igKey + i} type={igKey}
                />;
            });
        })
        .reduce((arr, elem) => {
            return arr.concat(elem);
        }, []);  //providing default value of arr as []

    //console.log(transformedIngredients)
    if (transformedIngredients.length===0) {
        transformedIngredients = <p>Please Start adding Ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;