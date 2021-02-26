const fetchinitialState = {
    congressMembers: [],
    error: ''
}

const searchnitialState = {
    searchVal: '',
    searchResults: [],
    searchState: ''
}

export const fetch = (state = fetchinitialState, action) => {
    switch (action.type) {
        case 'FETCH_BEGIN':
            return state;
        case 'FETCH_SUCCESS':
            return { ...state, congressMembers: action.payload };
        case 'FETCH_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const search = (state = searchnitialState, action) => {
   switch (action.type) {
       case 'SEARCH':
            const searchVal = action.payload.searchValue.toLowerCase();

            const searchResults = action.payload.inputData.filter(item => {

                return Object.keys(item).some(key => {
                    return (
                        (typeof item[key] === 'string' && item[key].includes(searchVal))
                        || 
                        (typeof item[key] === 'number' && item[key] === Number(searchVal))
                    )
                });
            });

            let searchState = `Se encontraron ${searchResults.length} coincidencias`;

            if(searchResults.length === 0 || searchResults.length === action.payload.inputData.length) {
                if(searchVal)
                    searchState = "No se han encontrado resultados";
                searchState = "";
            }

            return { ...state, searchVal, searchResults, searchState}

       default:
           return {...state};
   }
};