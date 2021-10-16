import React from "react";
import CollectionPreview from "components/collection-preview/collection-preview.component";
import collections from "./shop.data";
import "./shop.styles.scss";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
