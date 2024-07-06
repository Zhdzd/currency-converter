import "./App.css";
import CurrencyDropdown from "./components/CurrencyDropdown";
import CurrencyConverter from "./components/CurrencyConverter";
import CurrencyContext from "./contexts/CurrencyContext";
import { useContext, useState } from "react";
function App() {
  const [currencyFrom, setCurrencyFrom] = useState("AED");
  const [currencyTo, setCurrencyTo] = useState("AED");
  return (
    <>
      <CurrencyContext.Provider
        value={{ currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo }}
      >
        <h1>Currency Converter</h1>
        <CurrencyDropdown />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
