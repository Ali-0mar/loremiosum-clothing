import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collectionItem";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter((_elem, ind) => ind < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
