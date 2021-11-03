import { createSelector } from "reselect";

const selectproductMenu = (state) => state.productMenu;

export const selectProductSections = createSelector(
    [selectproductMenu],
    (productmenu) => productmenu.sections,
);
