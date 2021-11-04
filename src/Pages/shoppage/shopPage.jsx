import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";
import CollectionsOverview from "../../components/collection-overview/collections-overview";
const ShopePage = ({ match }) => {
    console.log(match);
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};
export default ShopePage;
