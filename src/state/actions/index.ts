import { ActionTypes } from "../action-types";

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITIRIES;
  }
  interface SearchRepositoriesSuccessAction {
    type: ActionTypes.SEARCH_REPOSITIRIES_SUCCESS;
    payload: string[];
  }
  
  interface SearchRepositoriesErrorAction {
    type: ActionTypes.SEARCH_REPOSITIRIES_ERROR;
    payload: string;
  }
  
  export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;