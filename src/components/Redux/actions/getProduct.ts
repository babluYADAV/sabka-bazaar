import { Dispatch } from 'redux';
import {getProductActiontype} from '../types/index'
  
  import axios from 'axios';
  
  export const getProducts = () => {
     
    return (dispatch:Dispatch) => {
    
      dispatch(Started());
  
      axios
        .get('http://localhost:5000/products')
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