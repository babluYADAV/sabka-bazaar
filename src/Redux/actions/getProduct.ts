import { Dispatch } from 'redux';
import {getProductActiontype} from '../types/index'
  
  import axios from 'axios';
import { PRODUCTS } from '../../Config/apiUrl';
  
 const getProducts = () => {
     
    return (dispatch:Dispatch) => {
    
      dispatch(Started());
  
      axios
        .get(PRODUCTS)
        .then(res => {
          dispatch(Success(res.data.product));
        })
        .catch(err => {
          console.log("api2r",err)
          dispatch(Failure(err.message));
        });
    };
  };
  
  const Started = () => ({
    type:getProductActiontype.START,
    payload:[]
  });


  const Success = (todo:any[]) => ({
    type: getProductActiontype.SUCCESS,
    payload:todo
  });
  
  
  
  const Failure = (error:string) => ({
    type:getProductActiontype.FAILURE,
    payload: error
  });


  export default getProducts