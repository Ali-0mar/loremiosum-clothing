import React from "react";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div>
            {items
                .filter((item, indx) => indx < 4)
                .map(({ name, id }) => (
                    <div className="preview" key={id}>
                        {name}
                    </div>
                ))}
        </div>
    </div>
);

export default CollectionPreview;
