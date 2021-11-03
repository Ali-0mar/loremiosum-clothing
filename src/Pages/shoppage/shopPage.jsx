import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collections-overview";
const ShopePage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
);

export default ShopePage;
