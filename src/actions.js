import { CHNAGE_SEARCH_FIELD } from "./constants";

export const setSearchField = (key) => {
    console.log(key);
    return {
        type : CHNAGE_SEARCH_FIELD,
        payload : key
    }
}