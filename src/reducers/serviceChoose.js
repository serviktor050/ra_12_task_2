import {
  CHANGE_SERVICE_FIELD,
  SERVICE_CHOOSE_REQUEST,
  SERVICE_CHOOSE_FAILURE,
  SERVICE_CHOOSE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  item: {
    name: "",
    price: "",
    content: "",
  },
  loading: false,
  error: null,
};
export default function serviceChooseReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_CHOOSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SERVICE_CHOOSE_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case SERVICE_CHOOSE_SUCCESS:
      const { item } = action.payload;
      return {
        ...state,
        item,
        loading: false,
        error: null,
      };
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return {
        ...state,
        item: {
          ...state.item,
          [name]: value,
        },
      };
    default:
      return state;
  }
}
