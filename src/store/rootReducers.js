import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import homeReducer from "./reducers/homeReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducers = {
    home: homeReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    dashboard: dashboardReducer
}

export default rootReducers