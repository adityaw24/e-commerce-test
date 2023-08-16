import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useRegularHooks = () => {
  const [refresh, refreshSet] = useState(false);

  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRefresh = () => refreshSet(!refresh);

  return {
    ref,
    dispatch,
    reduxState,
    refresh,
    refreshSet,
    handleRefresh,
    navigate,
    location,
  };
};

export default useRegularHooks;
