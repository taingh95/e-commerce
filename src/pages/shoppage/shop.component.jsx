import React from "react";
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../components/collection-preview/collectionPreview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
      const {collections} = this.state;
    return (
      <div className="shop-page">
        <h1>Shop page</h1>
        {collections.map(({id, ...otherCollectionProps}) => {
            return (
                <CollectionPreview key={id} {...otherCollectionProps} />
            )
        })}
      </div>
    );
  }
}

export default ShopPage;
