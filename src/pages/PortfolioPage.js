import React, { useState } from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLaout } from "../styles/Layout";
import Portfolios from "../data/Portfolios";
import Menu from "../Components/menu";
import portfolios from "../data/Portfolios";
import { Button } from "../Components/Button";
import styled from "styled-components";

////////////////////////////////////////////

/* const allButtons = ["All", ...portfolios.map((item) => item.category)]; */
/* const allButtons1 = ["All", ...portfolios.flatMap((item) => item.category)];
console.log(allButtons1); */

const allButtons = [
  "All",
  ...new Set(portfolios.flatMap((item) => item.category)),
];

/* const allCategories = [
  "All",
  ...new Set(portfolios.flatMap((item) => item.category)),
];
console.log(allButtons); */

export default function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(Portfolios);
  const [button, setButtons] = useState(allButtons);

  ///////////////////////////////////////////////////
  const categoryButton = (butt) => {
    if (butt === "All") {
      setMenuItems(Portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === butt);
    /* const filteredData = portfolios.filter((item) =>
      item.category.flatMap((item) => item === butt)
    );
 */
    setMenuItems(filteredData);
    console.log(filteredData, butt);
    /* const filteredData1 = portfolios.filter(function (item) {
      item.category.flat(4);

      return item.category === butt;
    }); */
  };

  return (
    <PortfolioPageStyle>
      <MainLaout>
        <Title title={"Portfolio"} span={"Portfolio"} />

        <InnerLayout>
          <div className="container1">
            <Button category={categoryButton} buttons={button} />
            <Menu items={menuItem} />
          </div>
        </InnerLayout>
      </MainLaout>
    </PortfolioPageStyle>
  );
}

const PortfolioPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
`;
