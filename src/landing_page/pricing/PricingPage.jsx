import Charges from "./Charges.jsx";
import Prices from "./Prices.jsx";
import ChargesSections from "./charges-sections/ChargesSections.jsx";
import CalculateCost from "./CalculateCost.jsx"
import ChargesAccOpen from "./ChargesAccOpen.jsx";
import DematAMC from "./DematAMC.jsx";
import ChargesOptional from "./ChargesOptional.jsx";
import ChargesExplain from "./ChargesExplain.jsx";

function PricingPage() {
  return (
    <>
      <Charges />
      <Prices />
      <ChargesSections />
      <CalculateCost />
      <ChargesAccOpen />
      <DematAMC />
      <ChargesOptional />
      <ChargesExplain />
    </>
  );
}

export default PricingPage;
