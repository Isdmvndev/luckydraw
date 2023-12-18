import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { counterReducer, CounterAction } from "~/reducer/ConfettiReducer";

type CounterContextValue = {
  state: boolean;
  dispatch: React.Dispatch<CounterAction>;
};
const CounterContext = createContext<CounterContextValue | undefined>(
  undefined,
);
type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  let initialState: boolean = false;
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextValue => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
