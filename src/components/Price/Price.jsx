import styled from "styled-components";
import Button from "../Button/Button";
import CheckSvg from "../CheckSvg/CheckSvg";
import theme from "../../theme";
const StyledPrice = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 3px 6px 0px #0000003d;
`;

const PriceContainer = styled.div`
  align-items: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  max-width: 230px;

  &,
  &::before,
  &::after {
    box-sizing: content-box;
  }
`;

const PriceTitle = styled.div`
  color: ${theme.primary};
  font-weight: 800;
  font-size: 1.75rem;
  text-align: center;
`;

const PriceValue = styled.div`
  align-self: center;
  text-align: center;
  font-size: 1.25rem;

  span.value {
    font-size: 3rem;
    font-weight: 900;
  }
  span.idr {
    vertical-align: top;
  }

  .duration {
    text-align: end;
    margin-top: -0.5rem;
  }
`;

const BenefitContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  button {
    text-align: center;
  }

  width: 15rem;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  span {
    width: 185px;
  }
`;

const BestSeller = styled.div`
  text-align: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0.25rem 0;
  background-color: ${theme.primary};
  color: white;
  margin-bottom: -1rem;
`;

function Price({ bestSeller, name, value, benefits }) {
  return (
    <StyledPrice>
      {bestSeller ? <BestSeller>Best Seller!</BestSeller> : null}
      <PriceContainer>
        <PriceTitle>{name}</PriceTitle>
        <PriceValue>
          <span className="idr">Rp.</span>{" "}
          <span className="value">{value}</span>{" "}
          <div className="duration">/ Bulan</div>
        </PriceValue>
        <BenefitContainer>
          {benefits.map((benefit, i) => {
            return (
              <BenefitItem key={i}>
                <CheckSvg />
                <span>{benefit}</span>
              </BenefitItem>
            );
          })}
        </BenefitContainer>
        <Button
          variant="primary"
          style={{ textAlign: "center", width: "13rem", fontSize: "1rem" }}
        >
          Aku mau
        </Button>
      </PriceContainer>
    </StyledPrice>
  );
}

export default Price;
