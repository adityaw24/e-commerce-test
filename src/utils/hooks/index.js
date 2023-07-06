import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const useRegularHooks = () => {
    const [refresh, refreshSet] = useState(false)

    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state);
    const ref = useRef();

    const handleRefresh = () => refreshSet(!refresh)

    return {
        ref,
        dispatch,
        reduxState,
        refresh,
        refreshSet,
        handleRefresh,
    }
}

export default useRegularHooks