import Calculator from "../../../types";
import { addNumberActionCreator, calculatorReducer } from "./calculatorSlice";

describe("Given the calculatorReducer function", () => {
  describe("When invoked with the accion addNumber with payload '2'", () => {
    test("Then it should return a new state with the currentNumber '22'", () => {
      const currentState: Calculator = {
        currentNumber: "2",
        previousNumber: "",
        operator: "",
      };

      const expectedState: Calculator = {
        currentNumber: "22",
        previousNumber: "",
        operator: "",
      };

      const action = addNumberActionCreator("2");
      const result = calculatorReducer(currentState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });
});
