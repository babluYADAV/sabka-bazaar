import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/actions/getProduct";
import { RootState } from "../../Redux/reducers";

const Home = () => {
  const dispatch = useDispatch();
  const { products,error,loading } = useSelector((state: RootState) => state.productReducer);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return <div>Home</div>;
};

export default Home;
