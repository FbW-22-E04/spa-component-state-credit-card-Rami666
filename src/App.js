import CreditCard from "./CreditCard";
import React from "react";

function App() {
  const bankName = "Big Bank, Inc";
  const cardNumber = "1234 5678 9012 3456";
  const expirationDate = "08/2020";
  const costumerName = "Rami Basher";

  return (
    <div className="App">
      <CreditCard
        bank={bankName}
        cardNum={cardNumber}
        exDate={expirationDate}
        cosName={costumerName}
      />
    </div>
  );
}

export default App;
