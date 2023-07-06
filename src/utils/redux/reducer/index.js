import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { loginReducer } from "../../../components/pages/login/_redux/reducer";
import { registerReducer } from "../../../components/pages/register/_redux/reducer";
import { productReducer } from "../../../components/pages/masterProduct/_redux/reducer";
import { headerReducer } from "../../../components/organism/header/_redux/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    header: headerReducer,
    product: productReducer,
})

export default rootReducer