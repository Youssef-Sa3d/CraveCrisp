import React, { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  showCheckout: () => {},
  showDone: () => {},
  hide: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }
  function showCheckout() {
    setProgress("checkout");
  }
  function showDone() {
    setProgress("done")
  }
  function hide() {
    setProgress("");
  }

  const userProgressContext = {
    progress: userProgress,
    showCart,
    showCheckout,
    showDone,
    hide,
  };
  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
