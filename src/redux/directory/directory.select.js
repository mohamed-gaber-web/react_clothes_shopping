import { createSelector } from 'reselect';

const directorySelect = state => state.directory;

// get sections
export const getSectionsSelect = createSelector(
    [directorySelect],
    dirSelect => dirSelect.sections // sections = [] 
)