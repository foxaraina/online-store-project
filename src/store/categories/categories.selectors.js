import {createSelector} from "reselect";

const selectCategoriesReducer = (state) => state.categories
const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categories)
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
)

export const selectIsLoading = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.isLoading)
export const selectError = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.error)