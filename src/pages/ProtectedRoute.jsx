import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Main from "../components/Main";

const ProtectedRoute = () => {
  const selector = useSelector((store) => store.userSignUpReducer.isOnline);
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    setIsAuth(selector);
  }, []);

  return (
    <>
      {isAuth ? <Main /> : <Navigate to="/signin" />}
    </>
  )
};

export default ProtectedRoute;