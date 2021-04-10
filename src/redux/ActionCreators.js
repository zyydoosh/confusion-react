import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

//this is an addComment action
export const addComment = (dishId, rating, author, comment) =>
({
    type: ActionTypes.ADD_COMMENT,
    payload:
    {//this is the standard aciton structure
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//this is a thunk which returns a function instead of object
export const fetchDishes = () => (dispatch) =>
{
    dispatch(dishesLoading(true));

    setTimeout
    (
        () => 
        {
            dispatch(addDishes(DISHES));
        }
    ,2000);
}

export const dishesLoading = () =>
({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) =>
({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) =>
({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});