import React from "react";
import Product from "./product";

export const Grid = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 ? (
        <div className="grid">
          {data.map((item) => {
            return (
              <div key={item._id}>
                <Product item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

export default Grid;
