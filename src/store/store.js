import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./taskSlice/taskSlice.js";

export default configureStore({
  reducer: {
    task:taskReducer
  }
})