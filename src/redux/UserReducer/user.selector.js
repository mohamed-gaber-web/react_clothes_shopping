import { createSelector } from 'reselect';

const userSelect = state => state.user;

// get currentUser
export const currentUserSelect = createSelector(
    [userSelect],
    currenUser => currenUser.currenUser
);