import Price from "../../components/Price/Price";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPricing } from "../../redux";
import { useSelector } from "react-redux";
const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    & {
      flex-wrap: nowrap;
    }
  }
`;

function Pricing({ openModal }) {
  const dispatch = useDispatch();
  const pricingData = useSelector((state) => state.pricing.pricing);
  useEffect(() => {
    axios.get("http://localhost:3001/pricing").then((res) => {
      dispatch(addPricing(res.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PricingContainer>
      {pricingData.length === 0
        ? "Loading..."
        : pricingData.map((price, i) => {
            return (
              <Price
                key={price.name}
                name={price.name}
                value={price.price}
                benefits={price.benefit}
                bestSeller={price.bestSeller}
                openModal={openModal}
              ></Price>
            );
          })}
    </PricingContainer>
  );
}

export default Pricing;
