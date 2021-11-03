import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";
import CollectionsOverview from "../../components/collection-overview/collections-overview";
const ShopePage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
);

export default ShopePage;
