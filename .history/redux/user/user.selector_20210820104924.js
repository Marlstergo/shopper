import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectUserDetail = createSelector(
    [selectUser],
    user => user.userDetail
)

export const selectPaymentLinks = createSelector(
    [selectUser],
    user => user.paymentLinks
)

export const selectWalletDetails = createSelector(
    [selectUser],
    user => user.walletDetails
)


export const selectRefresh = createSelector(
    [selectUser],
    user => user.refresh
)
