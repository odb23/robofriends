import { CHANGE_SEARRCH_FIELD } from './constants';

export const setSearchField = (text) =>({
    type: CHANGE_SEARRCH_FIELD,
    payload: text
})