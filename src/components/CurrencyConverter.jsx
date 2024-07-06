import "./CurrencyStyling.css";
import { useEffect, useState, useContext } from "react";
import CurrencyContext from "../contexts/CurrencyContext";

function CurrencyConverter(props) {
  const [amt, setAmt] = useState("");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const { currencyFrom, currencyTo } = useContext(CurrencyContext);

  function handleAmtChange(event) {
    setAmt(event.target.value);
  }
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/f6e5687d48574f65158da9b7/pair/${currencyFrom}/${currencyTo}/${amt}`
    )
      .then((res) =>
        res.json().then((data) => setConvertedAmt(data.conversion_result))
      )
      .catch();
  }, [amt]);

  return (
    <div className="curr-container">
      <input
        value={amt}
        placeholder="Enter amount"
        className="converter-input"
        onChange={handleAmtChange}
        id="amt-input"
      ></input>
      <p>{currencyFrom}</p>
      <p>=</p>
      <p id="converted-amt">{convertedAmt} </p>
      <p>{currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
