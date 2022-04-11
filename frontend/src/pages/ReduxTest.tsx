import React from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/reducers/counterSlice";

import { login, logout } from "../redux/reducers/userProfileSlice";

interface userP {
  email: string;
  name: string;
  role: string;
  created_on: string;
}

export default function ReduxRoute(): JSX.Element {
  const countN = useAppSelector((state) => state.counter.value);

  const dispatchy = useAppDispatch();

  const incrementAction = (): void => {
    dispatchy(increment());
  };

  const decrementAction = (): void => {
    dispatchy(decrement());
  };

  const incrementByAmountAction = (): void => {
    dispatchy(incrementByAmount(6));
  };

  const loginReduxAction = () => {
    const loginObject = {
      email: "any@mail.com",
      name: "anyname",
      role: "Nonadmin",
      created_on: "2023-01-22",
    };
    dispatchy(login(loginObject));
  };

  const logoutReduxAction = () => {
    dispatchy(logout());
  };

  return (
    <div>
      <h1>I am redux page</h1>
      <h1>{countN}</h1>
      <button onClick={incrementAction}>increment button</button>
      <button onClick={decrementAction}>decrement button</button>
      <button onClick={incrementByAmountAction}>
        increment by amount of 6 button
      </button>
      <button onClick={loginReduxAction}>login redux</button>
      <button onClick={logoutReduxAction}>logout redux</button>
    </div>
  );
}
