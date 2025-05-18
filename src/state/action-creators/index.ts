import axios from "axios";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.SEARCH_REPOSITIRIES });

        try {
            const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
                params: {
                    text: term,
                    size: 20,
                },
            });

           const names = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionTypes.SEARCH_REPOSITIRIES_SUCCESS,
                payload: names,
            });
            
        } catch (err: any) {
            dispatch({
                type: ActionTypes.SEARCH_REPOSITIRIES_ERROR,
                payload: err.message,
            });
        }
    }
}