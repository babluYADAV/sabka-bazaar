import { getProductActiontype } from "../types/index";
const initialState = {
  loading: false,
  error: "",
  products:null,
};

interface Start {
  type: string;
  payload:string
}
interface Success {
  type: string;
  payload:any[];
}
interface Failure {
  type: string;
  payload: string;
}

 type Action = Start | Success | Failure;
const getProductReducer = ( state = initialState, action :Action) => {
  switch (action.type) {
    case getProductActiontype.START:
      return {
        ...state,
        loading: true,
        error: "",
        products:action.payload,
      };

    case getProductActiontype.SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        products: action.payload,
      };
    case getProductActiontype.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getProductReducer;
