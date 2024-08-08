import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReucer from "./modules/entire/index";
import detailReducer from "./modules/detail";
import mainReducer from './modules/main'
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReucer,
    detail: detailReducer,
    main:mainReducer
  },
});

export default store;
