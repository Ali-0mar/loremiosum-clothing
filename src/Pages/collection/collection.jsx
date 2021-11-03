import React from "react";
import collectionItem from "../../components/collection-item/collectionItem";
import "./collection-style.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
const CollectionPage = ({ collection }) => (
    <div className="collection-page">
        <h2>Collection page</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
