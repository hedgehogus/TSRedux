import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITIRIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITIRIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITIRIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
