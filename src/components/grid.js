import React from "react";
import Product from "./product";
import style from "../styleConstants";
import styled from "styled-components";

export const Grid = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 ? (
        <GridArea>
          {data.map((item) => {
            return (
              <div key={item._id}>
                <Product item={item} />
              </div>
            );
          })}
        </GridArea>
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

const GridArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  padding: 30px 0;
  margin: 0 10px;
  border-left: 1px solid ${style.green};
  border-right: 1px solid ${style.green};
  @media only screen and (min-width: 600px) {
    padding: 30px 0;
    margin: 0 80px;
  }
`;

export default Grid;
