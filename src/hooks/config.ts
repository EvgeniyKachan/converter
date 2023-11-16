export function getStabdata() {
  return [
    { ccy: "CHF", base_ccy: "UAH", buy: "40.00670", sale: "40.00670" },
    { ccy: "CZK", base_ccy: "UAH", buy: "1.56860", sale: "1.56860" },
    { ccy: "GBP", base_ccy: "UAH", buy: "44.18370", sale: "44.18370" },
    { ccy: "ILS", base_ccy: "UAH", buy: "9.37100", sale: "9.37100" },
    { ccy: "JPY", base_ccy: "UAH", buy: "0.23848", sale: "0.23848" },
    { ccy: "NOK", base_ccy: "UAH", buy: "3.22790", sale: "3.22790" },
    { ccy: "PLZ", base_ccy: "UAH", buy: "8.65850", sale: "8.65850" },
    { ccy: "SEK", base_ccy: "UAH", buy: "3.31180", sale: "3.31180" },
  ];
}

export function updateLocalStore() {
  if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", "1");
  } else {
    const counter = localStorage.getItem("counter") || 0;

    if (+counter < 5) {
      localStorage.setItem("counter", `${+counter + 1}`);
    }
  }
}
