import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Calculator from "../../../types";

const initialCalculator: Calculator = {
  currentNumber: "1",
  previousNumber: "",
  operator: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialCalculator,
  reducers: {
    addNumber: (
      currentState: Calculator,
      action: PayloadAction<string>
    ): Calculator => ({
      ...currentState,
      currentNumber: `${currentState.currentNumber}${action.payload}`,
    }),
  },
});

export const { addNumber: addNumberActionCreator } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
