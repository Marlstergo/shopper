import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectUserDetail = createSelector(
    [selectUser],
    user => user.userDetail
)

export const selectProducts = createSelector(
    [selectUser],
    user => user.products
)



export const selectRefresh = createSelector(
    [selectUser],
    user => user.refresh
)
