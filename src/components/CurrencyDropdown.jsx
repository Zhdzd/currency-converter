import { useContext, useEffect, useState } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyContext from "../contexts/CurrencyContext";
function CurrencyDropdown() {
  // const currenciesList = [
  //   ["AED", "UAE Dirham"],
  //   ["AFN", "Afghan Afghani"],
  //   ["ALL", "Albanian Lek"],
  //   ["AMD", "Armenian Dram"],
  //   ["ANG", "Netherlands Antillian Guilder"],
  // ];
  const [currencies, setCurrencies] = useState([]);

  const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } =
    useContext(CurrencyContext);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/f6e5687d48574f65158da9b7/codes")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data["conversion_rates"]);
        setCurrencies(data["supported_codes"]);
      });
    //setCurrencies(currenciesList);
  }, []);

  function handleChangeCurrForm(event) {
    setCurrencyFrom(event.target.value);
  }
  function handleChangeCurrTo(event) {
    setCurrencyTo(event.target.value);
  }
  console.log(currencies);
  return (
    <>
      <div className="container">
        <p> I want to convert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={handleChangeCurrForm}
          value={currencyFrom}
        >
          {currencies.map((currencyValue) => (
            <option value={currencyValue[0]} key={currencyValue[0]}>
              {currencyValue[1]}
            </option>
          ))}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={handleChangeCurrTo}
          value={currencyTo}
        >
          {currencies.map((currencyValue) => (
            <option value={currencyValue[0]} key={currencyValue[0]}>
              {currencyValue[1]}
            </option>
          ))}
        </select>
      </div>
      <CurrencyConverter
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
      ></CurrencyConverter>
    </>
  );
}
export default CurrencyDropdown;
