import { configureStore } from "@reduxjs/toolkit";
import changeTheNumber from "./Reducer";

export const Store = configureStore({ reducer: { changeTheNumber } });
